import React from 'react';
import Nav from '../Navbar/Nav';
import hero from "../../assets/div.png";
import "./Home.css"
const Home = () => {
    return (
        <>
        <Nav />
        
        <div className="image-container">
            
        <img className="hero-img" src={hero} />
        </div>
        
        </>
       
    )


}

export default Home