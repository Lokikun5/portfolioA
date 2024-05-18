import CardProject from "./layout/CardProject";
import DataProject from "../data/data-project";

function Project () {
    return(
        <section id="project" className="container d-flex justify-content-center align-content-center flex-column py-5">
            <h2 className="text-uppercase fw-bold text-secondary text-center mb-5">Projet et Expérience</h2>
            <div className="d-flex flex-wrap gap-2">
                {DataProject.map((project, index) =>
                    <CardProject
                        key={index}
                        title={project.title}
                        description={project.description}
                        experiences={project.experience}
                        slug={project.link}
                        src={project.image}
                        hasWebSite={project.hasWebSite}
                    />
                )}

            </div>

        </section>
    )
}

export default Project;