import { useState, useEffect } from 'react';
import './BeanDetailsPage.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function BeanDetailsPage() {

    const { id } = useParams();
    const [bean, setBean] = useState();

    useEffect(() => {
        const getBean = async () => {
            try {
                const response = await axios.get(`https://jellybellywikiapi.onrender.com/api/Beans/${id}`)
                // console.log(response.data)
                setBean(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBean();
    }, [id])


    if (!bean) {
        return <h1>No bean exists!</h1>
    }
    return (
        <div key={bean.beanId} className="bean-details__card">
            <div className='bean-details__title'>
                <h3 className='bean-details__name'>{bean.flavorName}</h3>
            </div>
            <div className='bean-details__box'>
                <img className='bean-details__image' src={bean.imageUrl} alt="Jelly Belly Image" />
                <div className='bean-details__text'>
                    <p className='bean-details__color'><strong>Color:</strong> {bean.colorGroup}</p>
                    <p className='bean-details__description'><strong>Description:</strong> {bean.description}</p>
                    <p><strong>Ingredients:</strong> {bean.ingredients.join(", ")}
                    </p>
                </div>
            </div>
        </div>
    )


} 