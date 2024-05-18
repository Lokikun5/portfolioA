import Card from 'react-bootstrap/Card';
import '../../style/card-skill.scss';
function CardSkill ({title, items }) {
    return(
        <Card style={{ width: '18rem' }} className="h-100">
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
            </Card.Body>
        </Card>
    )
}

export default CardSkill;