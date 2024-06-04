import React from "react";
import "./about.css";
import Award from "../../img/award.png";
import Comp from "../../img/comp.png";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Comp}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Computer science is the operating system for all innovation, that's why I want to be a part of the technological changes. 
        </p>
        <p className="a-desc">
        I equipped with a strong foundation in both theoretical concepts and practical applications. Throughout my academic journey, I've developed a passion for tackling complex problems and leveraging technology to innovate and create meaningful solutions. With a keen eye for detail and a drive for continuous learning, I am excited to embark on a journey where I can contribute my skills and expertise to push the boundaries of what's possible in the realm of computer science.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Professional Certification and Badges</h4>
            <p className="a-award-desc">
              Monitoring Insights, AIOps offering, AWS cloud Practitioner Essentials, Monitoring for banking, Cloud Pak for Watson AIOps, Linux, IBM Tivoli Monitoring
              DB2 for i SQL, Quantum Conversation and Automation for IT, Data Engineering, Generative AI.  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
