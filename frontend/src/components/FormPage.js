import '../css/Form.css'
import AstronautScene from './AstronautScene'
import Header from './Header';
import Footer from './Footer';
import PixelBlast from "./PixelBlast";

const FormPage = () => {
    const background = (<PixelBlast variant="circle" pixelSize={6} color="#1DC469" patternScale={7} patternDensity={1.2}
                pixelSizeJitter={2} enableRipples rippleSpeed={0.4} rippleThickness={0.12} rippleIntensityScale={1.5}
                liquid={false} liquidStrength={0.12} liquidRadius={1.2} liquidWobbleSpeed={5} speed={0.6}
                edgeFade={0.25} transparent />);

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
            { background }
            <Header />
            <main className="main_form_page">
                <article> 
                    <AstronautScene /> 
                </article>
                <article>
                    <p>sdafasdfsdsfgsdfgsdfsdfgsdfgd</p>
                    <p>sdaflksdfoasd</p>
                    <button>dsafsdf</button>
                    <button>sdfxcvz</button>
                </article>
            </main>
            <Footer />
        </div>
    );
}
export default FormPage