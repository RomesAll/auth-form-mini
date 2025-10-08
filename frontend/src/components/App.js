import MainPage from './MainPage';
import FormPage from './FormPage';
import { Routes, Route } from 'react-router-dom'
import '../css/App.css';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/auth' element={<FormPage />}/>
            <Route path='/about' element={<MainPage />}/>
            <Route path='*' element={<MainPage />}/>
        </Routes>
    );
}

export default App