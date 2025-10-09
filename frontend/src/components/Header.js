import Stack from '@mui/material/Stack'
import { DefaultButton } from './Button'

const Header = () => {
    const home_btn = <DefaultButton name='Home' to='/' />;
    const about_btn = <DefaultButton name='About' to='/about' />;
    return (
        <header>
            <nav>
                <span className='title_nav'>👾 Space Web ://</span>
                <Stack direction="row" spacing={5}>
                    { home_btn }
                    { about_btn }
                </Stack>
            </nav>
        </header>
    );
}

export default Header