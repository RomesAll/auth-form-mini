import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const DefaultButton = ({name='Default', to='/'}) => {
    return (
        <Link style={{ textDecoration: 'none', color: 'white' }} to={to}>
            <Button style={{ fontFamily: 'SpaceMono-Regular', borderRadius: "20px", fontSize: '18px' }} color='white' >
                { name } 
            </Button>
        </Link>
    );
}

export const MainPageButton = ({name='Default', to='/', back_color='white', icon=<ArrowForwardIosIcon />}) => {
    return (
        <Link style={{ textDecoration: 'none', color: 'white' }} to={to}>
            <Button style={{ fontFamily: 'SpaceMono-Regular', width:'140px', backgroundColor: back_color, borderRadius: "20px", fontSize: '18px' }} startIcon={icon} color='white' >
                { name } 
            </Button>
        </Link>
    );
}

// export const FormPageButton = (name, to) => {
//     return (
//         <Link style={{ textDecoration: 'none', color: 'black' }} to={to}>
//             <Button style={{ fontSize: '18px', fontFamily: 'MiniPC_bold', borderRadius: "20px" }} color='black' >
//                 { name } 
//             </Button>
//         </Link>
//     );
// }

// export const SignInButton = (handleClickOpen) => {
//     return (
//         <IconButton aria-label="SignInButton" color="primary" onClick={handleClickOpen}>
//             <FingerprintIcon />
//         </IconButton>
//     );
// }

// export const SignUpButton = () => {
//     return (
//         <IconButton aria-label="SignUpButton" color="primary">
//             <FingerprintIcon />
//         </IconButton>
//     );
// }