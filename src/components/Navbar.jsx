import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <nav className="navbar">
      <img className="LOGO" src="./images/SY.png" alt="Sujeet Yadav" />
      <div className={`navbar-menu ${isOpen ? "active" : ""}`}
        
      >
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a  href="#Project">Project</a>
        <a href="#Contact" className="contact-link">
          Contact
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
