import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CardProject({ title, description, experiences, slug, src, hasWebSite }) {
    function renderFormattedText(text) {
        const parts = text.split('*');
        return parts.map((part, index) =>
            index % 2 === 1 ? <strong key={index}>{part}</strong> : part
        );
    }
    return(
        <Card className='display-card'>
            <Card.Img className="img-card" variant="top" src={src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div>
                    <span>
                        {renderFormattedText(description)}
                    </span>
                    <h6 className="fw-bold my-4">
                        Mission et concepts étudiés durant cette période :
                    </h6>
                    <ul>
                        {experiences.map((experience, index)=>
                            <li className="mb-2" key={index}>{renderFormattedText (experience)}</li>
                        )}
                    </ul>

                </div>
                {slug && (
                    <a href={slug}>
                        <Button variant="primary">{hasWebSite ? "Visitez le site" : "Voir le code"}</Button>
                    </a>
                )}
            </Card.Body>
        </Card>
    )
}
export default CardProject;