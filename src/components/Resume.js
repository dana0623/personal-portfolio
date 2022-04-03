import React from "react";
import axios from 'axios'
import fileDownload from 'js-file-download'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";



const Resume = () => {

    const handleDownload = (url, filename) => {
        axios.get(url, {
          responseType: 'blob',
        })
        .then((res) => {
          fileDownload(res.data, filename)
        })
      }
  
    return (
    
    <div id="resume" className="container-info">
      <div className="container-title">
        <h1>Resume</h1>
      </div>
      <div className="container-text">
      </div>
      <div className="resume-info">
        <h3 className="resume-title"><span>Education</span></h3>
        <p className="resume-subtitle">Korea Advanced Institute of Science And Technology (KAIST)</p>
        <p className="resume-text">Industrial & Systems Engineering / Techno-MBA</p>
        <p className="resume-subtitle">100 days of Python (Online Bootcamp) - London App Brewery</p>
        <h3 className="resume-title"><span>Work Experience</span></h3>
        <p className="resume-subtitle">Dotrade, South Korea</p>
        <p className="resume-text">Senior Web Developer</p>
        <p className="resume-subtitle">STEK, South Korea</p>
        <p className="resume-text">Digital Marketing Manager</p>

        <h3 className="resume-title"><span>Skills & Tools</span></h3>
        <div className="card-group">
        <div className="card">
          <FontAwesomeIcon
            icon={faFileCode}
            size="4x"
            style={{ color: "black", margin: "30px auto" }}
          />
          <div className="card-body">
            <h3 className="card-title" style={{ fontWeight: "bold" }}>
              Front End
            </h3>
            <p className="card-text">
              Focus on clean & modern responsive designs
            </p>
            <p style={{ fontWeight: "bold", color: "black" }}>Languages:</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript & React</p>
            <p style={{ fontWeight: "bold", color: "black" }}>Dev Tools:</p>
            <p>VSCode & Atom</p>
            <p>GitHub</p>
            <p>Bootstrap</p>
          </div>
        </div>
        <div className="card">
          <FontAwesomeIcon
            icon={faDatabase}
            size="4x"
            style={{ color: "black", margin: "30px auto" }}
          />
          <div className="card-body">
            <h3 className="card-title" style={{ fontWeight: "bold" }}>
              Back End
            </h3>
            <p className="card-text">Capable of full stack development</p>
            <p style={{ fontWeight: "bold", color: "black"}}>Languages:</p>
            <p>Python /Flask /Jinja</p>
            <p>Express & Node</p>
            <p>MongoDB & Mongoose</p>
            <p>RESTful APIs</p>
            <p style={{ fontWeight: "bold", color: "black" }}>Dev Tools:</p>
            <p>PyCharm</p>
          </div>
        </div>
        <div className="card">
          <FontAwesomeIcon
            icon={faMobileAlt}
            size="4x"
            style={{ color: "black", margin: "30px auto" }}
          />
          <div className="card-body">
            <h3 className="card-title" style={{ fontWeight: "bold" }}>
              App Dev
            </h3>
            <p className="card-text">Functional App Dev</p>
            <p style={{ fontWeight: "bold", color: "black" }}>Languages:</p>
            <p>React Native</p>
            <p style={{ fontWeight: "bold", color: "black" }}>Dev Tools:</p>
            <p>Xcode</p>
          </div>
        </div>
      </div>
      <p className="resume-subtitle">Download my CV as PDF file:</p>

      
      <button className="resume-btn btn-dark btn btn-lg" onClick={() => {handleDownload('./CV-NataliaDadasova.pdf', 'CV-NataliaDadasova.pdf')
}}> <FontAwesomeIcon icon={faAngleDown} size="sm" style={{ marginRight: "10px"}} />Download CV</button>
   

      
        </div>
      
    </div>
  );
};

export default Resume;
