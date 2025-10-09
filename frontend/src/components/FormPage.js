import '../css/Form.css'
import AstronautScene from './AstronautScene'
import Header from './Header';
import Footer from './Footer';
import PixelBlast from "./PixelBlast";
import {SignInButton, SignUpButton} from './Button'
import Stack from '@mui/material/Stack';
import AuthForm from './DialogAuth'
import RegForm from './DialogReg'
import Button from '@mui/material/Button';
// import { StarsBackground } from './StarsBack';


const FormPage = () => {
    const background = null;
    document.body.style.backgroundImage = "url('./Simple_Shiny.svg')";

    return (
        <main className="main_form_page">
            <article> 
                <AstronautScene /> 
            </article>
            <article>
                <div className='auth_form'>
                    <p className='form_p' >Complete the authentication process</p>
                    <p>How does it work? We use a JWT token for authentication and authorization</p>
                    <div className='form_btn_container'>
                        <span style={{ color:'#1b904eff' }}>Sign in</span> <AuthForm />
                        <span style={{ color:'#ca1c5b' }}> or up</span> <RegForm />
                    </div>
                    <p>How many users are already registered: 0 users</p>
                    {/* <p>Welcome Roman</p>
                    <p><Button style={{ borderRadius: "50px", width: "90%" }} variant="contained" color="success">Let's start</Button></p> */}
                </div>
            </article>
        </main>
    );
}
export default FormPage