import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Portfolio = ({menuItem, button, filter}) => {
  
  return (
    <div className="container-info" id="portfolio">
      <div className="container-title">
        <h1 className="portfolio-title">Work</h1>
      </div>
      <div className="container-text">
        <p>Check my commercial and non-commercial projects.</p>
        <p>If you have any questions feel free to ask for more information.</p>
      </div>
      <div className="filter">
        { button.map((cat, i) => {
          return <button type="button" className="filter-btn btn me-3 rounded-pill" onClick={()=> filter(cat)}>{cat}</button>
            })}
      </div>
      <div className="portfolio-list">
        {menuItem.map((item) => (
          <div className="apps" key={item.id}>
            <div className="p">
              <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
              </div>
              <a href="http://google.com" target="_blank" rel="noreferrer">
              <img src={item.img} alt="" className="p-img"></img>
              </a>
            </div>
            <div className="row">
              <div className="desc-text col-lg-8">
                <h5>{item.app_title}</h5>
                <p>{item.tech_used}</p>
                <p className="container-text app-desc">{item.description}</p>
              </div>
              <div className="col-lg-4 btn-github">
                <button className="btn btn-outline-dark btn-sm github">
                <FontAwesomeIcon
                    icon={faGithub}
                    size="1x"
                    style={{ marginRight: "5px"}}
                />Github repo
                </button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
  );
};

export default Portfolio;
