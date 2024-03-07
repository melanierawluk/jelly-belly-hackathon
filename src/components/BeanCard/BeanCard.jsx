import { Link } from "react-router-dom"
import './BeanCard.scss'


export default function BeanCard({ image, name, description, id }) {

    return (
        <Link className="bean-card__card" to={`/beans/${id}`}>
            <div >
                <h3 className="bean-card__name">{name}</h3>
                <img className="bean-card__image" width="150px" src={image} alt="Jelly Belly Image" />
                <div className="bean-card__box">
                    <p className="bean-card__description">{description}</p>
                </div>
            </div>
        </Link>
    )
}