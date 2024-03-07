import { Link } from "react-router-dom"


export default function BeanCard({ image, name, description, id }) {

    return (
        <Link to={`/beans/${id}`}>
            <div className="bean-card__card">
                <h3>{name}</h3>
                <img width="150px" src={image} alt="Jelly Belly Image" />
                <p>{description}</p>
            </div>
        </Link>
    )
}