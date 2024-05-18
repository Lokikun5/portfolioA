import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import Hero from "../component/Hero";
import Introduce from "../component/Introduce";
import Skills from "../component/Skills";
import Separation from "../component/layout/Separation";
import Project from "../component/Project";
import Contact from "../component/Contact";
function HomePage () {
    return(
        <main>
            <Header/>
            <Hero/>
            <Introduce/>
            <Separation/>
            <Skills/>
            <Separation/>
            <Project/>
            <Separation/>
            <Contact/>
            <Footer/>
        </main>

    )
}
export default HomePage;