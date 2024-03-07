
import jelly from "../../assets/animation.gif";
import Header from "../../components/Header/Header";
import './LandingPage.scss';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



export default function LandingPage() {
  const[recipe,setRecipe]=useState('')
  const num= Math.floor(Math.random() * 27);
  console.log(num)


useEffect(() => {
const getRecipe = async () => {
  try {
    const response = await axios.get(`https://jellybellywikiapi.onrender.com/api/Recipes/${num}`)
    console.log(response.data)
    setRecipe(response.data)
  } catch (error) {
    console.log(error)
  }
}
getRecipe()
}, [])

if(!recipe){
  return(<><p>loading...!</p></>)
}

  return (
    <div>
        <Header/>
    <div className="landing-page">
      <div className="landing-text">
        <h1 className="landing-text__title">Welcome to the World<br/> of Jelly Belly!</h1>
        <h3>A Rainbow of Flavors Awaits!</h3>
        <Link to='./beans'>
        <button className="landing-text__btn">Click Here To Discover All Beans</button>
        </Link>
      </div>
      <div className="landing-image">
      <img src={jelly} alt="jelly" />
      </div>
    </div>
    <div className="recipe">
      <div className="recipe__text">
      <h2 className="recipe__today">Recipe Of Today!</h2>
      <h3 className="recipe__title">{recipe.name}</h3>
      <p className="recipe__des">{recipe.description}</p>
      <button className="landing-text__btn">Click To View</button>
      </div>
      <div className="recipe__box">
        <img className="recipe__img" src={recipe.imageUrl} alt="recipe"/>
      </div>
      
      </div>
    </div>
  );
}
