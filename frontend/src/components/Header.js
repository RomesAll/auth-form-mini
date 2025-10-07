import Stack from '@mui/material/Stack'
import {HeaderButton, HeaderLink} from './Button'

const Header = () => {
    const home_btn = HeaderLink(HeaderButton("Home"), '/');
    const about_btn = HeaderLink(HeaderButton("About"), '/about');
    return (
        <header>
            <nav>
                <span className='title_nav'>👾 Space Web</span>
                <Stack direction="row" spacing={5}>
                    { home_btn }
                    { about_btn }
                </Stack>
            </nav>
        </header>
    );
}

export default Header