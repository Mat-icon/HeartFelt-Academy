import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";

function Hero() {

  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });

      setActiveSection(sectionId);
    }
  };

  console.log('Active Section:', activeSection);
  return (
    <div className="irregular-curved-div" id="home">
      <div className="hold-contact">
        <h4>Other Services</h4>
        <a href="https://heartfeltholdings.com/hsl/" className="link1">Consulting Agency</a>
        <a href="#appotg"  className="link2">AppOTG</a>
        <a href="#worksdev" className="link3">WorkDevs</a>
      </div>
      <Navbar />
      <div className="hero-content">
        <span className="welcome">Welcome To The Best Tech <span style={{color : 'yellow'}}>/</span> After School Academy </span>
        <h1 className="c-name">HeartFelt<span>Academy</span> </h1>

        <button className="contact-btn" onClick={()=> scrollToSection('contact')} >Apply Now</button>
      </div>
    </div>
  );
}

export default Hero;
