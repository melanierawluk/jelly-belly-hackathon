
import navlogo from "../../assets/jellybelly.png"
import './Header.scss'


export default function Header() {

    


    return (
        <nav className="Header">
            <a href='/'>
            <img className="logo" src={navlogo}  alt="logo"/>
            </a>
        </nav>
    )

}