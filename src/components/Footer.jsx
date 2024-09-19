import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



function Footer() {
  return (
    <div className="footer">
      <div className="left-footer">
      <img className="footer-logo" src="./images/SY.png" alt="Sujeet Yadav" />
      <p className="footer-description">I am a Frontend developer</p>
      </div>
      <div className="footer-line"></div>
      <div className="right-footer">
        <div className="left-item">© 2024 Sujeet Yadav. All rights</div>
        <div className="right-item">
        <a
          href="https://github.com/Sujeetyadav14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sujeet-yadav-a41b3a272/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="footer-icon" />
        </a>
        <a
          href="https://x.com/Sujeet848508?t=Mn780v3sviAT_UPePNGLew"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="footer-icon" />
        </a> 
        </div>
      </div>
    </div>
  );
}

export default Footer;
