import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const HeaderButton = (name) => {
    return <Button style={{ fontSize: '18px', fontFamily: 'MiniPC_bold', borderRadius: "20px" }} color='black' >{ name } </Button>
}

const HeaderLink = (button, to) => {
    return <Link style={{ textDecoration: 'none', color: 'black' }} to={to}>{ button }</Link>
}

export {HeaderButton, HeaderLink}