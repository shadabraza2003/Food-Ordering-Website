import React from "react";
import './Burger2.css';

const Burger2 =()=> {

    return(
        <div className="burger-section">
            <div className="burger-content">
                <img src="/images/about-img.png" alt="about-img.png"/>
            </div>
            <div className="burger-text">
                <h2>We Are Feane</h2>
                <p>Oh! My God I'm Full.</p>
                <button className="read-more-button">Read More</button>
            </div>
        </div>
    );
};

export default Burger2;