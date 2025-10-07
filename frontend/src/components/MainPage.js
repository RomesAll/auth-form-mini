import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PixelBlast from "./PixelBlast";

function MainPage() {
    return (
        <main>
            <PixelBlast variant="circle" pixelSize={6} color="#1DC469" patternScale={7} patternDensity={1.2}
                pixelSizeJitter={2} enableRipples rippleSpeed={0.4} rippleThickness={0.12} rippleIntensityScale={1.5}
                liquid={false} liquidStrength={0.12} liquidRadius={1.2} liquidWobbleSpeed={5} speed={0.6}
                edgeFade={0.25} transparent /> 
            <article>
                <h1>Hello evryone 😸</h1>
                <span>Welcome to my portfolio website. 
                    It was created to showcase my skills in building Fullstack applications and completing a web technology course at a university. 
                    The technology stack includes React, Python, Fastapi, Git, Docker, Nginx, PostgreSQL. 
                    You can view the codebase in my GitHub profile or continue.
                </span>
                <div>
                    <Stack direction="row" spacing={10}>
                        <Button color="black" style={{marginTop:'40px', fontSize: '18px', 
                            fontFamily: 'MiniPC_bold', borderRadius: "20px"}} href="https://github.com/RomesAll/auth-form-mini" >GitHub</Button>
                        <Button color="black" style={{marginTop:'40px', fontSize: '18px', 
                            fontFamily: 'MiniPC_bold', borderRadius: "20px" }} href="/auth" >Сontinue</Button>
                    </Stack>
                </div>
            </article>
        </main>
    );
}

export default MainPage