import React, { useState } from 'react';
import '../App.scss';
import Logo from '../assests/logo.jpeg';

function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });

      setActiveSection(sectionId);
      setShowMenu(false); // Close the menu on click
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`nav-body ${showMenu ? 'menu-open' : ''}`}>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <div className={`nav-links ${showMenu ? 'show' : 'hide'}`}>
        <ul>
          <li><a href='home'>Home</a></li>
          <li><a href='#' onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a href='#' onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href='#' onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
      <div className='menu-icon' onClick={toggleMenu}>&#9776;</div>
    </div>
  );
}

export default Navbar;
