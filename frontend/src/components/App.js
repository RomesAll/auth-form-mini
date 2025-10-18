import MainPage from './MainPage';
import FormPage from './FormPage';
import { Routes, Route } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import '../css/App.css';

const App = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/auth" element={<FormPage />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App