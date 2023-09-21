import React from "react";
import "./styles/skills.css";

export default function Skills() {
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <div className="skills" id="skills">
        <h5 className="heading">
          Technical<span>Skills</span>
        </h5>
        <div className="skills-row">
          <div className="skills-column">
            <div className="skills-box">
              <div className="skills-content">
                <div className="content">
                  <h3>Programming Languages:</h3>
                  <p>C,Python,Java,JavaScript,HTML,CSS,XML</p>
                </div>
              </div>
              <div className="skills-content">
                <div className="content">
                  <h3>Databases:</h3>
                  <p> SQL,Firebase</p>
                </div>
              </div>
              <div className="skills-content">
                <div className="content">
                  <h3>Framework</h3>
                  <p>Flutter,ReactJS,BootStrap</p>
                </div>
              </div>
              <div className="skills-content">
                <div className="content">
                  <h3>Tools</h3>
                  <p>NodeJS,Github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
