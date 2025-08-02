import React from "react";
import { FaMapMarkedAlt,FaPhone,FaEnvelope,FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaPinterest} from "react-icons/fa";
import './Footer.css';
const Footer =() => {

    return(
        <footer className="footer">
            <div className="footer-section">
                <h3>Contact Us</h3>
                <p><FaMapMarkedAlt/> Location</p>
                <p><FaPhone/> Call +91 9876543210</p>
                <p><FaEnvelope/> xyz@gmail.com</p>

            </div>
            <div className="footer-section">
                <h3>frame</h3>
                <p>There is nothing in this world which happens without God's plan</p>
            </div>    
                <div className="social-icons">
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaLinkedinIn/>
                    <FaInstagram/>
                    <FaPinterest/>
                </div>
                <div className="footer-section">
                    <h3>Opening Hours</h3>
                    <p>Everyday</p>
                    <p>10.00 am _10.00pm</p>
                </div>
                <div className="footer-bottom">
                    <p>@2025 All right Reserved By Shadab</p>
                    <p>@distributed by shadab</p>
                </div>
           
        </footer>
    );
};
export default Footer;