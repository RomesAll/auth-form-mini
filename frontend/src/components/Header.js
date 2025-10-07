import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'

function Header() {
    return (
        <header>
            <nav>
                <span className='title_nav'>👾 Space Web</span>
                <Stack direction="row" spacing={5}>
                    <Button style={{ fontSize: '18px', fontFamily: 'MiniPC_bold', 
                        borderRadius: "20px" }} href="/" color="black" >Home</Button>
                    <Button style={{ fontSize: '18px', fontFamily: 'MiniPC_bold', 
                        borderRadius: "20px" }} href="/about" color="black" >About</Button>
                </Stack>
            </nav>
        </header>
    );
}

export default Header