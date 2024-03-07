import { useState, useEffect } from 'react';
import './BeanDetailsPage'
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
        <div key={bean.beanId} className="bean-card__card">
            <h3>{bean.flavorName}</h3>
            <img width="150px" src={bean.imageUrl} alt="Jelly Belly Image" />
            <p>{bean.description}</p>
            <ul>
                {bean.ingredients.map((ingredient) => {
                    return (
                        <li>{ingredient}</li>
                    )
                })}
            </ul>
            <p>{bean.colorGroup}</p>
        </div>
    )


} 