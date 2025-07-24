import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className='ways'>More ways to connect ✅</p>
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://www.instagram.com/iete.rgit?igsh=MXBuOWw0Ynh3aWgxOA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link"
          >
            <RiInstagramFill className="social-icon3" />
            <span className="social-text">Instagram</span>
          </a>
          <a
            href="mailto:ietergitteam@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
            className="social-link"
          >
            <FaEnvelope className="social-icon3" />
            <span className="social-text">Gmail</span>
          </a>
          <a
            href="https://www.linkedin.com/company/iete-rgit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin className="social-icon3" />
            <span className="social-text">LinkedIn</span>
          </a>
        </div>
        <p className='createdby'>
          Engineered by{' '}
          <a
            href="https://www.linkedin.com/in/mohammed-anas-mujahid-051b87353/"
            target="_blank"
            rel="noopener noreferrer"
            className="edit"
          >
            <b>MOHAMMED ANAS</b>
          </a>
        </p>
        <p>&copy; 2025 IETE RGIT. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
