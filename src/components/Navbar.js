import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/js/src/collapse.js";


const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark
     bg-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">D.NA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <FontAwesomeIcon
            icon={faBars}
            size="1x"
            style={{ color: "black" }}
          />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link" to="portfolio" offset={-100} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="resume" offset={-100} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >
              Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
