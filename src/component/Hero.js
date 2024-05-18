import '../style/banner.scss';

import DownloadPDFButton from "./DownloadPDFButton";
function Hero () {
    return(
        <section className="bg-parallaxe">
            <h1>Antonio Quadjovie</h1>
            <p>Développeur Web - full stack</p>
            <DownloadPDFButton/>
        </section>
    )
}
export default Hero;