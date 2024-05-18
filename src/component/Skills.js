import CardSkill from "./layout/CardSkill";
import dataSkills from "../data/data-skills";
function Skills () {
    return (
        <section id="dataSkills" className="container d-flex justify-content-center align-content-center flex-column py-5">
            <h2 className="text-uppercase fw-bold text-secondary text-center mb-5">Compétences</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {dataSkills.map((skill, index) =>
                    <div key={index} className="col d-flex justify-content-center">
                        <CardSkill title={skill.title} items={skill.items}/>
                    </div>
                )}
            </div>

        </section>
    )
}

export default Skills;