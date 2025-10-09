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

export default function RegForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log('aaaa')
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    /* Тут отправляем запрос на сервер (не забыть) */
    handleClose();
  };

  return (
    <React.Fragment>

      <IconButton aria-label="SignInButton" onClick={handleClickOpen}>
          <FingerprintIcon />
      </IconButton>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle color='black'>Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Before you access the website, fill in the form fields and register.
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="email_id"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
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