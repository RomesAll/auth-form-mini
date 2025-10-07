import PixelBlast from './PixelBlast';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import '../css/App.css';

function App() {
    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
            <PixelBlast variant="circle" pixelSize={6} color="#1DC469" patternScale={7} patternDensity={1.2}
                pixelSizeJitter={2} enableRipples rippleSpeed={0.4} rippleThickness={0.12} rippleIntensityScale={1.5}
                liquid={false} liquidStrength={0.12} liquidRadius={1.2} liquidWobbleSpeed={5} speed={0.6}
                edgeFade={0.25} transparent />
            <Header />
            <MainPage />
            <Footer />
        </div>
    );
}

export default App