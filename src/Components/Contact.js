import React from "react";
import "./styles/contact.css";
import github from "./github-logo-24.png";
import linkedin from "./linkedin-logo-24.png";

export default function Footer() {
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <div className="contact">
        <h3 className="detail">
          Contact<span>Me</span>
        </h3>
        <p>
          Open to talk about tech & development,please reach me out on my
          linkedin or email me.
        </p>
        <address className="contact-info">
          <a href="mailto:snehilsah400@gmail.com">snehilsah400@gmail.com</a>
          <a href="tel:+918294756848">+91 8294756848</a>
        </address>
        <div className="social-links">
          <a href="https://github.com/snehil891">
            <img className="link" src={github} alt="social-link"></img>
          </a>
          <a href="https://www.linkedin.com/in/snehil-sah/">
            <img className="link" src={linkedin} alt="social-link"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
