import React from "react";
import "./styles/internship.css";

export default function Internship() {
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <div className="intern" id="intern">
        <h5 className="heading">
          Intern<span>ship</span>
        </h5>
        <div className="inter-row">
          <div className="intern-column">
            <div className="intern-box">
              <div className="intern-content">
                <div className="content">
                  <h3>Salesforce Developer Virtual Intern</h3>
                  <p>
                    <ul className="unorderd-list">
                      During the 8-week virtual internship I worked on various
                      project, such as:
                      <li>Developing custom salesforce objects and fields</li>
                      <li>Creating and Managing Salesforce workflows</li>
                      <li>
                        Troubleshooting salesforce problems Relationship &
                        Process automation
                      </li>
                    </ul>
                  </p>
                  <a
                    href="https://smartinternz.com/internships/salesforce_certificates/8573535d757b48469f147c9552f30f84"
                    className="cerf-button"
                    target="blank"
                    rel="norefferer"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
