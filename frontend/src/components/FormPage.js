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


const FormPage = () => {
    const background = (<PixelBlast variant="circle" pixelSize={6} color="#1DC469" patternScale={7} patternDensity={1.2}
                pixelSizeJitter={2} enableRipples rippleSpeed={0.4} rippleThickness={0.12} rippleIntensityScale={1.5}
                liquid={false} liquidStrength={0.12} liquidRadius={1.2} liquidWobbleSpeed={5} speed={0.6}
                edgeFade={0.25} transparent />);

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
            <Header />
            <main className="main_form_page">
                <article> 
                    <AstronautScene /> 
                </article>
                <article>
                    <div className='auth_form'>
                        <h1>Complete the authentication process</h1>
                        <div className='form_btn_container'>
                            <span>Sign in</span> <AuthForm />
                            <span>or up</span> <RegForm />
                        </div>
                        <p>How does it work? We use a JWT token for authentication and authorization</p>
                        <p>How many users are already registered: 0 users</p>
                        {/* <p>Welcome Roman</p>
                        <p><Button style={{ borderRadius: "50px", width: "90%" }} variant="contained" color="success">Let's start</Button></p> */}
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
export default FormPage