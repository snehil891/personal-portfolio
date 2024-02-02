/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./styles/project.css";
import PowerBi from "./PowerBi.png";
import BloodBank from "./bloodbank.jpg";
import GameSearch from "./gamesearch.jpeg";
import Calculator from "./calculator-app.jpg";

export default function Project() {
  return (
    <div data-aos="zoom-in">
      <div className="project">
        <h3 className="title">
          My<span>Work</span>
        </h3>
        <div className="container">
          <div className="content-section">
            <div class="card">
              <img src={BloodBank} alt="image"></img>
              <h4>GITAM Blood Bank</h4>
              {/* <div className="text-overlay">
                  <p>
                    This Blood Bank website is a group project where I have
                    worked as a front-end developer.It aims to provide user an
                    online portal for seamless blood donation & request.
                  </p>
                </div> */}
              <a
                href="https://www.bloodbankgitam.live/"
                target="blank"
                rel="norefferer"
                className="btn"
              >
                View Project
              </a>
            </div>
            <div class="card">
              <img src={GameSearch} alt="image"></img>
              <h4>Game Search</h4>
              {/* <p>This Game Search website will provide users with an online portal to search games
              and find top games from steam,Gog and Epic.
            </p> */}
              <a
                href="https://github.com/snehil891/Gamewebsiteproject"
                target="blank"
                rel="norefferer"
                className="btn"
              >
                View Project
              </a>
            </div>
            <div class="card">
              <img src={Calculator} alt="image"></img>
              <h4>Calculator App</h4>
              {/* <p>This my first simple calculator app,which I have build using flutter.
              <br></br>
              <br></br>
              <br></br>
            </p> */}
              <a
                href="https://github.com/snehil891/calculator"
                target="blank"
                rel="norefferer"
                className="btn"
              >
                View Project
              </a>
            </div>
            <div class="card">
              <img src={PowerBi} alt="image"></img>
              <h4>E-Commerce Dashboard</h4>
              {/* <p>This is my Personal portfolio website where users can find about my education journey,
              my skills,my projects and can also contact me.
            </p> */}
              <a
                href="https://github.com/snehil891/E-commerce-PowerBi.git"
                target="blank"
                rel="norefferer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
