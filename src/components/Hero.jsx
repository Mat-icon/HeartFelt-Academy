import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import Navbar from './Navbar';

function Hero() {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  console.log('Active Section:', activeSection);

  return (
    <div className="irregular-curved-div" id="home">
      <div className="hold-contact">
        <h4>Other Services</h4>
        <a href="https://heartfeltholdings.com/hsl/" className="link1" target="_blank" rel="noopener noreferrer">
          Consulting Agency
        </a>
        <a href="#appotg" className="link2" onClick={() => scrollToSection('appotg')}>
          AppOTG
        </a>
        <a href="#worksdev" className="link3" onClick={() => scrollToSection('worksdev')}>
          WorkDevs
        </a>
      </div>
      <Navbar />
      <div className="hero-content">
        
        <span className="welcome">
          Welcome To The Best Tech <span style={{ color: 'yellow' }}>/</span> After School Academy{' '}
        </span>
        <h1 className="c-name">HeartFelt<span>Academy</span> </h1>
        <MediaQuery maxWidth={767}>
          {/* Render this button for mobile devices (max-width: 767px) */}
          <button className="contact-btn" onClick={() => scrollToSection('contact')}>
            Apply Now
          </button>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          {/* Render this button for larger screens (min-width: 768px) */}
          <button className="contact-btn" onClick={() => scrollToSection('contact')}>
            Apply Now
          </button>
        </MediaQuery>
      </div>
    </div>
  );
}

export default Hero;
