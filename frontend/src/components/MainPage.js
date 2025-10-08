import Stack from "@mui/material/Stack";
import PixelBlast from "./PixelBlast";
import {HeaderButton, HeaderLink} from './Button'

const MainPage = () => {

    const background = (<PixelBlast variant="circle" pixelSize={6} color="#1DC469" patternScale={7} patternDensity={1.2}
                pixelSizeJitter={2} enableRipples rippleSpeed={0.4} rippleThickness={0.12} rippleIntensityScale={1.5}
                liquid={false} liquidStrength={0.12} liquidRadius={1.2} liquidWobbleSpeed={5} speed={0.6}
                edgeFade={0.25} transparent />);
    const github_btn = HeaderLink(HeaderButton("GitHub"), 'https://github.com/RomesAll/auth-form-mini');
    const continue_btn = HeaderLink(HeaderButton("Continue"), '/auth');

    return (
        <main className="main_main_page">
            { background }
            <article>
                <h1>Hello evryone 😸</h1>
                <span>Welcome to my portfolio website. 
                    It was created to showcase my skills in building Fullstack applications and completing a web technology course at a university. 
                    The technology stack includes React, Python, Fastapi, Git, Docker, Nginx, PostgreSQL. 
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