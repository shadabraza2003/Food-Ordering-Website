import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Header.css';
const Header = () => {
    return (
        <header className="header">
          <div className="header-content">
             <Carousel 
               showThums={false}
               showStatus={false}
               infiniteLoop
               autoPlay
               interval={3000}
               showArrows={false}
             >
                <div className="slider-text">
                   <h2>Fast Food Restaurant</h2>
                   <p>We have the best fast food restaurant. They serve as a family member to all there customers. </p>
                   <button className="order-button">Order Now</button>
                </div>

                <div className="slider-text">
                   <h2>Delicious Meals</h2>
                   <p>The best meal makes the day best.We serve the fresh and delicious food to our customers. </p>
                   <button className="order-button">Order Now</button>
                </div>

                 
                <div className="slider-text">
                   <h2>Best Burger in Town</h2>
                   <p>You are searching for juicy Burgers then go ahead and order the best burger.</p>
                   <button className="order-button">Order Now</button>
                </div>

              </Carousel>
           </div>
       </header>


    );

};

export default Header;