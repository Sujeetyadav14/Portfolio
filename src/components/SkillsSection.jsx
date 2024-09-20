import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./SkillsSection.css";
import {motion} from "framer-motion"

function Skillcard({ skill, percentage, Lastweek, LastMonth }) {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    triggerInce: true,
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        if (progress < percentage) {
          setProgress((prevProgress) => Math.min(prevProgress + 1, percentage));
        } else {
          clearInterval(timer);
        }
      }, 20);
      return () => clearInterval(timer);
    }
  }, [progress, percentage, inView]);
  return (
    <div ref={ref} className="skill-card">
      <h3>{skill}</h3>
      <div className="progress-circle" style={{ "--percentage": progress }}>
        <span className="percentage">{progress}%</span>
      </div>
    
    </div>
  );
}

function SkillsSection() {
  const skills = [
    { skill: "HTML", percentage: 98, Lastweek: 28, LastMonth: 60 },
    { skill: "CSS", percentage: 95, Lastweek: 28, LastMonth: 60 },
    { skill: "JS", percentage: 60, Lastweek: 28, LastMonth: 60 },
    { skill: "REACT ", percentage: 50, Lastweek: 28, LastMonth: 60 },
  ];

  return (
    <div className="skills-section" id="Skills">
      <h4 className="section-subtitle">Skill</h4>
      <h2 className="section-title">My Skills</h2>
      <motion.p className="section-description"
      whileInView={{ opacity: 0.8, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}>
        As a passionate and detail-oriented frontend developer, I specialize in
        creating engaging, responsive, and user-friendly web applications. With
        a strong foundation in HTML, CSS, and JavaScript, I bring designs to
        life through clean, efficient, and scalable code. I am well-versed in
        modern frontend frameworks like React...
      </motion.p>

      <motion.div className="skills-container"
      
      whileInView={{ opacity: 0.8, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      >
        {skills.map((skill, index) => (
          <Skillcard key={index} {...skill} />
        ))}
      </motion.div>
    </div>
  );
}

export default SkillsSection;
