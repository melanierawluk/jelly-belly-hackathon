import { useState, useEffect } from "react"
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import navlogo from "../../assets/jellybelly.png"
import './NavBar.scss'


export default function NavBar({ setBeanList }) {

    const [choice, setChoice] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        setChoice(event.target.id)
    }

    useEffect(() => {
        const getFilteredBeans = async () => {
            try {
                const response = await axios.get(`https://jellybellywikiapi.onrender.com/api/Beans?${choice}=true`)
                setBeanList(response.data.items)

            } catch (error) {
                console.log(error)
            }
        }
        getFilteredBeans();
    }, [choice,setBeanList])



    return (
        <nav className="navbar">
            <a href='/'>
            <img className="logo" src={navlogo}  alt="logo"/>
            </a>
            <ul>
                <li onClick={handleClick} id="sugarFree">Sugar Free</li>
                <li onClick={handleClick} id="glutenFree">Gluten Free</li>
                <li onClick={handleClick} id="kosher">Kosher</li>
                <li onClick={handleClick} id="seasonal">Seasonal</li>
            </ul>
        </nav>
    )

}