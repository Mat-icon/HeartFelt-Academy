import React from "react";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import Logo from '../assests/logo.jpeg'

function Footer() {
  const [activeSection, setActiveSection] = useState(null);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
      });

      setActiveSection(sectionId);
    }
  };

  console.log('Active Section:', activeSection);
  return (
    <div className="footer-body">
      <div className="footer-address">
        <div className="footer-info">
          <p>+2349161703449</p>
          <p>matthewameh007@heartfeltholdings.com</p>
          <p>123 Main Street, Anytown, USA</p>
          <div className="footer-logo">
            <img src={Logo} alt="" onClick={() => scrollToSection("home")} />
          </div>
        </div>
      </div>
      <div className="footer-flex">
        <div className="footer-title">
          <h2>Be Future-Ready</h2>
          <p>
            Subscribe to our newsletter for daily updates on technology and
            innovation.
          </p>

          <div className="footer-form">
            <form>
              <input type="email" placeholder="Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="social-icons">
            <SocialIcon
              url="https://twitter.com"
              fgColor="gold"
              bgColor="black"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              className="social"
            />
            <SocialIcon
              url="https://whatsapp.com"
              fgColor="gold"
              bgColor="black"
              style={{
                marginLeft: "10px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
              className="social"
            />
            <SocialIcon
              url="https://facebook.com"
              fgColor="gold"
              bgColor="black"
              style={{
                marginLeft: "10px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
              className="social"
            />
          </div>
        </div>
      </div>
      <p className="copyrights">
        All Rights Reserved &copy; {new Date().getFullYear()} HeartFeltHoldings
      </p>
    </div>
  );
}

export default Footer;
