import Stack from "@mui/material/Stack";
import PixelBlast from "./PixelBlast";
import { MainPageButton } from './Button';
import React from "react";
import Header from './Header';
import Footer from './Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MainPage = () => {
    document.body.style.backgroundImage = null;
    const background = (<PixelBlast variant="circle" pixelSize={6} color="#6af7c1" patternScale={7} patternDensity={1.2}
                pixelSizeJitter={2} enableRipples rippleSpeed={0.4} rippleThickness={0.12} rippleIntensityScale={1.5}
                liquid={false} liquidStrength={0.12} liquidRadius={1.2} liquidWobbleSpeed={5} speed={0.6}
                edgeFade={0.25} transparent />);
    const github_btn = <MainPageButton name='GitHub' to='https://github.com/RomesAll/auth-form-mini' back_color='#202325ff' icon= {<GitHubIcon />} />;
    const continue_btn = <MainPageButton name='Continue' to='/auth' back_color='#1b904eff' icon={<ArrowForwardIosIcon />} />;
    
    const ReactLable = <span style={{ color: '#369debff' }}>React</span>
    const PythonLable = <span style={{ color: '#FFFF00' }}>Python</span>
    const FastapiLable = <span style={{ color: '#12c3a0ff' }}>Fastapi</span>
    const GitLable = <span style={{ color: '#ff5602' }}>Git</span>
    const DockerLable = <span style={{ color: '#2974ffff' }}>Docker</span>
    const NginxLable = <span style={{ color: '#18a10bff' }}>Nginx</span>
    const PostgreSQLLable = <span style={{ color: '#236cf3ff' }}> PostgreSQL</span>

    return (
        <main className="main_main_page">
            {background}
            <article>
                <span style={{ marginBottom: '30px', fontFamily: 'SpaceMono-Bold'}}>Hello evryone 👋</span>
                <span>Welcome to my portfolio website.
                    It was created to showcase my skills in building Fullstack applications and completing a web technology course at a university. 
                    The technology stack includes {ReactLable}, {PythonLable}, {FastapiLable}, {GitLable}, {DockerLable}, {NginxLable}, {PostgreSQLLable}. 
                    You can view the codebase in my GitHub profile or continue.
                </span>
                <div>
                    <Stack style={{ marginTop:'40px' }} direction="row" spacing={10}>
                        {github_btn}
                        {continue_btn}
                    </Stack>
                </div>
            </article>
        </main>
    );
}

export default MainPage