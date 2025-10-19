import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {SignInButton, SignUpButton} from './Button'
import IconButton from '@mui/material/IconButton';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { useEffect, useState } from 'react';

export default function AuthForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [message, setMessage] = useState(null);
  var result_message = null;
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData);
    const data = formJson;
    
    fetch("/api/v1/users/login", {
      method: "POST", 
      headers: { "Accept": "application/json", "Content-Type": "application/json" }, 
      body: JSON.stringify(data)})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        setMessage(json.detail);
        if (json.username){
          setUsername(json.username);
        }
        else{
          setUsername(data.username);
        }
        if (json.email){
          setEmail(json.email);
        }
        else{
          setEmail('Not found');
        }
    })
    .catch ( error => {
        console.log(error);
    });
  };

  if (message) {
      result_message = (
      <DialogContentText> 
        <DialogContentText color='black'> Message: {message} </DialogContentText>
        <DialogContentText color='black'> Username: {username} </DialogContentText>
        <DialogContentText color='black'> Email: {email} </DialogContentText>
      </DialogContentText>);
  }

  return (
    <React.Fragment>
        <IconButton aria-label="SignInButton" onClick={handleClickOpen}>
            <FingerprintIcon />
        </IconButton>
      
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle color='black' >Authentification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To use the resources of our website, enter your email and username. 
            If you have not visited this website before, you need to register.
          </DialogContentText> 
          {result_message}
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="username_id"
              name="username"
              label="Username"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              margin="dense"
              id="password_id"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
            <Button type="submit" form="subscription-form">Enter</Button>
            <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}