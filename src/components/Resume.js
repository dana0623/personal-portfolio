import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";




const Resume = () => {

   
  
    return (
    
    <section id="resume" className="container-info resume">
      <div className="container-title">
        <h1>Background</h1>
      </div>
      <div className="container-text">
      </div>
      <div className="resume-info">
      <div className="resume-main-text row">
      <div className="col-sm">
      <div className="resume-education">
        <h3 className="resume-title"><span>Education</span></h3>
        <p className="resume-subtitle">100 days of Python (Online Bootcamp) - London App Brewery</p>
        <p className="resume-text">Certificate of Completion, 2022</p>
        <p className="resume-subtitle">Web Devevelopment Bootcamp (React) - London App Brewery</p>
        <p className="resume-text">Certificate of Completion, 2021</p>
        <p className="resume-subtitle">Korea Advanced Institute of Science And Technology (KAIST)</p>
        <p className="resume-text">BS Industrial & Systems Engineering / Techno-MBA, 2008-2015</p>
      
        </div>
        </div>
        <div className="col-sm">
        <div className="resume-experience">
        <h3 className="resume-title"><span>Work Experience</span></h3>
        <p className="resume-subtitle">STEK, South Korea</p>
        <p className="resume-text">Digital Marketing Team Lead, 2017-2021</p>
        <p className="resume-subtitle">Dotrade, South Korea</p>
        <p className="resume-text">Junior Web Developer, 2015-2017</p>
        
        </div>
        </div>
        </div>
        <div className="skills-tools-container">
        <div className="resume-skills-tools">
        <h1 className="skills-tools-title"><span>Skills & Tools</span></h1></div>
        <div className="card-group">
        <div className="card card-one">
          <FontAwesomeIcon
            icon={faFileCode}
            size="4x"
            style={{margin: "30px auto" }}
          />
          <div className="card-body">
            <h3 className="card-title" style={{fontWeight: "bold" }}>
              Front End
            </h3>
            <p className="card-text">
              Focus on clean & modern responsive designs
            </p>
            <p style={{ fontWeight: "bold"}}>Languages:</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript & React</p>
            <p style={{ fontWeight: "bold"}}>Dev Tools:</p>
            <p>VSCode & Atom</p>
            <p>GitHub</p>
            <p>Bootstrap</p>
          </div>
        </div>
        <div className="card">
          <FontAwesomeIcon
            icon={faDatabase}
            size="4x"
            style={{margin: "30px auto" }}
          />
          <div className="card-body">
            <h3 className="card-title" style={{ fontWeight: "bold" }}>
              Back End
            </h3>
            <p className="card-text">Capable of full stack development</p>
            <p style={{ fontWeight: "bold"}}>Languages:</p>
            <p>Python /Flask /Jinja</p>
            <p>Express & Node</p>
            <p>MongoDB & Mongoose</p>
            <p>RESTful APIs</p>
            <p style={{ fontWeight: "bold"}}>Dev Tools:</p>
            <p>PyCharm</p>
          </div>
        </div>
        <div className="card card-three">
          <FontAwesomeIcon
            icon={faMobileAlt}
            size="4x"
            style={{ margin: "30px auto" }}
          />
          <div className="card-body">
            <h3 className="card-title" style={{ fontWeight: "bold" }}>
              App Dev
            </h3>
            <p className="card-text">Functional App Dev</p>
            <p style={{ fontWeight: "bold" }}>Languages:</p>
            <p>React Native</p>
            <p style={{ fontWeight: "bold"}}>Dev Tools:</p>
            <p>Xcode</p>
          </div>
        </div>
      </div>
      </div>
        </div>
      
    </section>
  );
};

export default Resume;
