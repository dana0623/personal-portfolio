import React from "react";
import Typed from "react-typed";
import axios from 'axios'
import fileDownload from 'js-file-download'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }
  return (
    <section className="header" id="title">
      <div className="container row">
        <div className="profile-img-container col-lg-5">
          <img src="./images/profile.jpg" alt="profile-img" className="profile-img img-fluid rounded"></img>
        </div>
        <div className="header-text-container col-lg-7">
        <h4 className="header-subtitle" >Full-stack web developer</h4>
          <h1 className="header-title" >Natalia Dadasova</h1>
          <Typed
            className="typed-text"
            strings={[
              "{Web Design}",
              "{Web Development}",
              "{Apps Development}",
              "{Full Stack}",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <div className="header-btn-container">
          {/* <Link to="contact" smooth={true} duration={500}>
            <button className="header-btn btn btn-dark btn-lg contact-me-btn .text-nowrap me-2">Contact me</button> 
          </Link> */}
          <Link to="portfolio" smooth={true} duration={500} offset={-100}>
            <button className="header-btn btn rounded-pill btn-outline-light check-work-btn .text-nowrap me-4">MY WORK</button>
          </Link>
          <button className="header-btn resume-btn rounded-pill btn " onClick={() => {handleDownload('./Resume-Natalia.pdf', 'Resume-Natalia.pdf')
}}> <FontAwesomeIcon icon={faAngleDown} size="sm" style={{ marginRight: "10px"}} />DOWNLOAD CV</button>
   
          </div>
        </div>
        
      </div>
      <a href="#contact" className="scroll_down">Scroll Down</a>
    </section>
  );
};

export default Header;
