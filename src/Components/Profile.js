/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./styles/profile.css";
import "./styles/animated-background.css";
import myImage from "./myImage.jpg";
import Resume from "./Resume.pdf";

export default function Profile() {
  return (
    <div className="animated-background">
      <div className="animated-box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="home" id="home">
        <div className="img">
          <img src={myImage} about="image" alt="image"></img>
        </div>
        <div className="home-content">
          <h1>
            Hi I'm <span>Snehil Sah</span>
          </h1>
          <div className="text">
            <h3>Front-end Developer</h3>
          </div>
          <p>
            Aiming to obtain a successful career in the IT Industry and to fully
            utilize my skills for making a significant contribution to the
            success of the organization that I will work in.
          </p>

          <div className="btn-box">
            <a href={Resume} download={"Resume.pdf"} className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
