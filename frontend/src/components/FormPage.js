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
import { useEffect, useState } from 'react';

const FormPage = () => {
    const background = null;
    const [count_user, setCount] = useState(null);
    document.body.style.backgroundImage = "url('./Simple_Shiny.svg')";

    useEffect(() => {
        fetch("/api/v1/users/count")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(json => {
            setCount(json.detail);
        })
    });

    return (
        <main className="main_form_page">
            <article className='model'> 
                <AstronautScene /> 
            </article>
            <article >
                <div className='auth_form'>
                    <p className='form_title' >Complete the authentication process</p>
                    <p>How does it work? We use a JWT token for authentication and authorization</p>
                    <div className='form_btn_container'>
                        <span style={{ color:'#1b904eff' }}>Sign in</span> <AuthForm />
                        <span style={{ color:'#ca1c5b' }}> or up</span> <RegForm />
                    </div>
                    <p>How many users are already registered: {count_user} users</p>
                </div>
            </article>
        </main>
    );
}
export default FormPage