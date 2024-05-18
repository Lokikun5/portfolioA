import '../style/banner.scss';
import Button from 'react-bootstrap/Button';
function Hero () {
    return(
        <section className="bg-parallaxe">
            <h1>Antonio Quadjovie</h1>
            <p>Développeur Web - full stack</p>
            <a href="portfolioA/dl/QUADJOVIE-ANTONIO-5_compressed.pdf" download="QUADJOVIE-ANTONIO-5_compressed.pdf">
                <Button variant="primary">Télécharger mon cv</Button>
            </a>
        </section>
    )
}
export default Hero;