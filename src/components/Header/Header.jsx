import React, { useState, useEffect } from 'react';
import './Header.css';

import ieteRgitLogo from '../../Assets/IETE_LOGO.png';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section'); // Ensure sections have IDs
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 90; // Adjust for navbar height
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveLink(`#${section.id}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuActive(false); // Close the sidebar
  };

  return (
    <header id="home">
      <nav className="navbar">
        <div className="logo">
          <img src={ieteRgitLogo} alt="IETE Logo" className="logo-img" />
          <span className="logo-text">IETE RGIT</span>
        </div>
        <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
          {menuActive ? 'X' : '☰'}
        </div>
        {/* Links for large devices */}
        <ul className="nav-links">
          <li><a href="#home" className={activeLink === '#home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeLink === '#about' ? 'active' : ''}>About</a></li>
          <li><a href="#team" className={activeLink === '#team' ? 'active' : ''}>Team</a></li>
          <li><a href="#events" className={activeLink === '#events' ? 'active' : ''}>Events</a></li>
          <li><a href="#magazine" className={activeLink === '#magazine' ? 'active' : ''}>Magazines</a></li>
          <li><a href="#contact" className={activeLink === '#contact' ? 'active' : ''}>Contact</a></li>
        </ul>
        {/* Sidebar for smaller devices */}
        <div className={`sidebar ${menuActive ? 'active' : ''}`}>
          <ul className="sidebar-links">
            <li><a href="#home" className={activeLink === '#home' ? 'active' : ''} onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" className={activeLink === '#about' ? 'active' : ''} onClick={handleLinkClick}>About</a></li>
            <li><a href="#team" className={activeLink === '#team' ? 'active' : ''} onClick={handleLinkClick}>Team</a></li>
            <li><a href="#events" className={activeLink === '#events' ? 'active' : ''} onClick={handleLinkClick}>Events</a></li>
            <li><a href="#magazine" className={activeLink === '#magazine' ? 'active' : ''} onClick={handleLinkClick}>Magazine</a></li>
            <li><a href="#contact" className={activeLink === '#contact' ? 'active' : ''} onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
