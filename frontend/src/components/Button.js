import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
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