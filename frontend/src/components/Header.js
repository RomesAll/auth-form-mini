import Stack from '@mui/material/Stack'
import { DefaultButton } from './Button'

const Header = () => {
    const home_btn = <DefaultButton name='Home' to='/' />;
    const auth_btn = <DefaultButton name='Auth' to='/auth' />;
    return (
        <header>
            <nav>
                <span className='title_nav'>👾 Space Web ://</span>
                <Stack direction="row" spacing={5}>
                    { home_btn }
                    { auth_btn }
                </Stack>
            </nav>
        </header>
    );
}

export default Header