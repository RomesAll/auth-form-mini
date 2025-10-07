import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function MainPage() {
    return (
        <main>
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
                            fontFamily: 'MiniPC_bold', borderRadius: "20px"}} href="#contained-buttons" >GitHub</Button>
                        <Button color="black" style={{marginTop:'40px', fontSize: '18px', 
                            fontFamily: 'MiniPC_bold', borderRadius: "20px" }} href="#contained-buttons" >Сontinue</Button>
                    </Stack>
                </div>
            </article>
        </main>
    );
}

export default MainPage