import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
function Contact(){

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "833b636b-313f-4ebb-8d3f-c976133fc2bc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <  div className="contact" id="Contact"
   
    >
      <div className="contact-section">
        <h4 className="contact-subtitle">Contact</h4>
        <h2 className="contact-title">Get In Touch</h2>
      </div>

      <motion.div
        className="contact-container"
        whileInView={{ opacity: 0.8, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        <div className="left-container">
          <MdEmail className="email" />
          <p className="contact-text">sujeetyadav4688@gmail.com </p>
          <FaPhoneAlt className="phone" />
          <p className="contact-text">+91 8485081504 </p>
          <FaLocationDot className="location" />
          <p className="contact-text">Butibori Nagpur Maharashtra </p>
        </div>
        <form onSubmit={onSubmit} className="right-container">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
