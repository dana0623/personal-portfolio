import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    var today = new Date(); 
    var currentYear = today.getFullYear(); 

    return (
        <div className="footer-container">
            <div className="footer-info">
                <button className="btn-social btn" onClick={(e) => {
      e.preventDefault();
      window.open("http://facebook.com/dana0623", "_blank");
      }}>
                <FontAwesomeIcon icon = { faFacebook}></FontAwesomeIcon>
                </button>
                <button className="btn-social btn" onClick={(e) => {
      e.preventDefault();
      window.open("http://linkedin.com/in/nataliadadasova", "_blank");
      }}>
                <FontAwesomeIcon icon = { faLinkedin}></FontAwesomeIcon>
                </button>
                <button className="btn-social btn" onClick={(e) => {
      e.preventDefault();
      window.open("http://github.com/dana0623", "_blank");
      }}>
                <FontAwesomeIcon icon = { faGithub}></FontAwesomeIcon>
                </button>
                <p>© Website by Natalia Dadasova {currentYear}</p>
            </div>
        </div>
    )
}

export default Footer
