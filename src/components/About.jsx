import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

import "./About.css";

function About() {
  return (
    <div className="about" id="About">
      <div className="about-section">
        <h4 className="about-subtitle">About</h4>
        <h2 className="about-title">Know More About Me</h2>
      </div>
      <motion.div className="about-container"
      
      whileInView={{ opacity: 0.8, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      >
        <div className="about-me">
          <h3 className="my-section">
            Hello! I'm Sujeet Yadav, a dedicated Frontend Developer with a
            passion for crafting seamless and visually appealing web
            experiences. With expertise in HTML, CSS, JavaScript, and frameworks
            like React, I specialize in transforming design concepts into
            interactive, responsive websites that engage users and deliver
            results.
          </h3>
        </div>
        <div className="about-icon">
          <div className="icons">
            <FaHtml5 className="html" title="HTML5" />

            <FaCss3Alt className="css" title="CSS3" />
            <FaBootstrap className="bootstrap" title="Bootstrap" />
            <RiTailwindCssFill className="tailwind" title="Tailwind CSS" />
            {/* <h6  className="frontend"  >Frontend Developer</h6> */}
            <RiJavascriptFill className="javascript" title="JavaScript" />
            <FaReact className="react" title="React JS" />
            <SiRedux className="redux" title="Redux" />
            <FaGitAlt className="github" title="Git" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
