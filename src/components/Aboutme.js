import React from "react";


const Aboutme = () => {
  return (
      <section className="container-about-info" id="about">
        <div className="container-title">
        <div className="about-container">
          <h1 className="about-title">About</h1>
        </div>
        <div className="container-about-text">
          <p>
          {" "}
          <span className="highlight-text">I'm </span> a <span className="highlight-text">Junior Python</span> and <span className="highlight-text"> MERN </span>Developer based in Seoul, South Korea.
          </p>
          <p>
          1 year of commercial experience making web apps for SME companies globally. 
          </p>
          <p>Highly passionate in Tech and Problem Solving.</p>
          <p>Open for new opportunities and interesting projects.</p>
        </div>
        </div>
      </section> 
  );
};

export default Aboutme;
