import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { FaSquareXTwitter } from "react-icons/fa6";

import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="hero"
      id="Home"
  
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
    >
      <h3>
        <Typewriter
          words={["Hello It's me!"]}
          loop={true}
          cursor
          cursorStyle=""
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1100}
        />
      </h3>
      <h1>
        <Typewriter
          words={["Sujeet Yadav"]}
          loop={2}
          cursor
          cursorStyle=""
          typeSpeed={80}
          deleteSpeed={70}
          delaySpeed={1100}
        />
      </h1>
      <p>
        {" "}
        i am a <span>Frontend Developer.</span>
        who breaks and makes things on the web.
      </p>

      <div className="button">
        <a href="#Contact">
          <button className="hire-me">Contact Me</button>
        </a>
        <a
          href="./Resume.pdf"
          target="_blank"
          alt="my cv"
          rel="noopener noreferrer"
        >
          <button className="download-cv">Download CV</button>
        </a>
      </div>
      <div className="icon-container">
        <a
          href="https://github.com/Sujeetyadav14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sujeet-yadav-a41b3a272/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
         <a
          href="https://x.com/Sujeet848508?t=Mn780v3sviAT_UPePNGLew"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="icon" />
        </a> 
      </div>
    </motion.div>
  );
}

export default Hero;
