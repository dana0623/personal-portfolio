import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <section className="header" id="title">
      <div className="container row">
        <div className="profile-img-container col-lg-5">
          <img src="./images/profile-image.png" alt="profile-img" className="profile-img img-fluid rounded"></img>
        </div>
        <div className="header-text-container col-lg-7">
          <h1 className="header-title" >Hi, I'm Natalia and I'm a <span>Junior Python Developer.</span></h1>
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
          <Link to="contact" smooth={true} duration={500}>
            <button className="header-btn btn btn-dark btn-lg contact-me-btn .text-nowrap me-2">Contact me</button> 
          </Link>
          <Link to="portfolio" smooth={true} duration={500} offset={-100}>
            <button className="header-btn btn btn-outline-dark btn-lg check-work-btn .text-nowrap">Check my work</button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
