import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

const HeaderButton = (name) => {
    return <Button style={{ fontSize: '18px', fontFamily: 'MiniPC_bold', borderRadius: "20px" }} color='black' >{ name } </Button>
}

const HeaderLink = (button, to) => {
    return <Link style={{ textDecoration: 'none', color: 'black' }} to={to}>{ button }</Link>
}

const SignInButton = () => {
    return (
        <IconButton aria-label="SignInButton" color="primary">
            <FingerprintIcon />
        </IconButton>
    );
}

const SignUpButton = () => {
    return (
        <IconButton aria-label="SignUpButton" color="primary">
            <FingerprintIcon />
        </IconButton>
    );
}

export {HeaderButton, HeaderLink, SignInButton, SignUpButton}