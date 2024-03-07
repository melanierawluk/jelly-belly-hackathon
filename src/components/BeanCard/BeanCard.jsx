import { Link } from "react-router-dom";
import './BeanCard.scss';
import { useState , useEffect} from "react";

export default function BeanCard({ image, name, description, id }) {
    const [descriptionCheck, setDescriptionCheck] = useState(true);

   // Use useEffect to perform the check and set the state only once on component mount
   useEffect(() => {
    // Check if description is an empty string, set descriptionCheck accordingly
    if (description === "") {
        setDescriptionCheck(false);
    }
}, [description]);

    return (
        <Link className="bean-card__card" to={`/beans/${id}`}>
            <div>
                <h3 className="bean-card__name">{name}</h3>
                <img className="bean-card__image" width="150px" src={image} alt="Jelly Belly" />
                <div className="bean-card__box">
                    {/* Use ternary operator to conditionally render description */}
                    {descriptionCheck ? (
                        <p className="bean-card__description">{description}</p>
                    ) : (
                        <p className="bean-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida malesuada lacus nec dapibus.</p>
                    )}
                </div>
            </div>
        </Link>
    );
}
