import '../style/introduce-section.scss';
import sideImg from'../img/icons-img-web2.webp';
import Image from 'react-bootstrap/Image';
function Introduce () {
    return(
        <section id="profil" className="container d-flex justify-content-center align-content-center flex-column py-5">
            <h2 className="text-uppercase fw-bold text-secondary text-center mb-5">présentation</h2>
            <div className="d-flex flex-column flex-sm-row">
                <div className="w-100 w-sm-50 d-flex flex-column justify-content-center align-content-center">
                    <p>
                        Bonjour !
                        Je m'appelle Antonio Quadjovie, développeur web en reconversion.
                        Cela fait quatre ans que je m'intéresse à la conception d’applications web.
                        J'ai commencé à découvrir ce domaine en autodidacte, en apprenant les bases de HTML,
                        CSS et JavaScript.
                    </p>

                    <p>
                        Par la suite, j'ai suivi deux formations
                        : une première de six mois en développement web, puis une deuxième de deux ans en alternance
                        , spécialisée en développement d’applications web avec React.
                    </p>
                    <p>
                        J'arrive maintenant à la fin de mon parcours de formation et
                        je suis désormais à la recherche de nouvelles opportunités pour
                        mettre en pratique mes compétences et continuer à évoluer professionnellement.
                    </p>
                </div>
                <div className="w-100 w-sm-50 d-flex justify-content-center align-content-center">
                    <Image className="side-img" src={sideImg} alt="icone web"  />

                </div>

            </div>
        </section>
    )
}

export default Introduce;