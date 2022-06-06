import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Portfolio = ({ menuItem, button, filter }) => {
  return (
    <section className="container-info portfolio" id="portfolio">
      <div className="container-title">
        <h1 className="portfolio-title">Projects</h1>
      </div>
      <div className="container-text portfolio-text">
        <p>Check my commercial and non-commercial projects.</p>
        <p>If you have any questions feel free to ask for more information.</p>
      </div>
      <div className="filter">
        {button.map((cat, i) => {
          return (
            <button
              type="button"
              className="filter-btn btn-outline-light btn me-3 rounded-pill"
              onClick={() => filter(cat)}
            >
              {cat}
            </button>
          );
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
              <img src={item.img} alt="" className="p-img"></img>
              <div className="btn-app-container">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(item.url, "_blank");
                  }}
                  className="btn bg-transparent btn-app me-4"
                >
                  <FontAwesomeIcon icon={faEye} size="2x" color="white" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(item.github_url, "_blank");
                  }}
                  className="btn bg-transparent btn-app github-btn"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
                </button>
              </div>
            </div>
            {/* <div className="row"> */}
            <div className="desc-text">
              <h5 className="app_title">{item.app_title}</h5>
              <p className="app_tech_used">{item.tech_used}</p>
              <p className="container-text app-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
