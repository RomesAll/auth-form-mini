import PixelBlast from './PixelBlast';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import FormPage from './FormPage';
import { Routes, Route, Link } from 'react-router-dom'
import '../css/App.css';

function App() {
    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
            <Header />
            <Routes>
                <Route path='/' element={<MainPage />}/>
                <Route path='/auth' element={<FormPage />}/>
                <Route path='*' element={<MainPage />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App