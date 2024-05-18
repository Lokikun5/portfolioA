import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import {Link} from "react-router-dom";
import imgNotFound from "../../src/img/404notfound.webp";
import Button from "react-bootstrap/Button";

function NotFound () {
    return(
        <div className="mt-5">
            <Header/>
            <section className="container paddingxxl d-flex justify-content-center align-content-center flex-column">
                <h1 className="text-center mb-5">Ouups... <br/>Page introuvable</h1>
                <div className="d-flex justify-content-center align-content-center">
                    <img className="rounded-circle object-fit-cover not-found-img" src={imgNotFound} alt="not found"/>
                </div>
                <div className="d-flex justify-content-center align-content-center mt-5">
                    <Link to="/">
                        <Button variant="primary">Retour à la page d'aceuill </Button>
                    </Link>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default NotFound;