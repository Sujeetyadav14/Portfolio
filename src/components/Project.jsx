import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import {motion} from "framer-motion"

function Project() {
  return <div className="project"
   id="Project"
  >
    <div className="project-section">
    <h4 className="project-subtitle">Project</h4>
    <h2 className="project-title">Projects</h2>
    </div>
    <motion.div className="project-container"
    
    whileInView={{ opacity: 0.8, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1.5 }}
    >
      <div  className="project-card" id="project-1">
        <h3 className="project-name">SalesForce-Clone</h3>
        <p className="project-description">A Salesforce website clone created using HTML and CSS, and fully responsive, ensures that the layout and design adapt seamlessly to various screen sizes and devices, providing an optimal user experience across different platforms.</p>
        <a
          href="https://github.com/Sujeetyadav14/SalesForce_Clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="link"  id="link1"/>
        </a>
        <a
          href="https://sujeetyadav14.github.io/SalesForce_Clone/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="link" id="link2" />
        </a>

      </div>
     

      
    </motion.div>
  </div>;
}

export default Project;
