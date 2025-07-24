import './Hero.css';

import ieteOfficialLogo from '../../Assets/IETE Official Logo.png'; // Replace with your actual image path
import xLogo from '../../Assets/xlogo.png'; // Replace with your actual image path for X logo
import ieteRgitLogo from '../../Assets/IETE_LOGO.png'; // Replace with your actual image path

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-box">
        <div className="logo-row">
          <img src={ieteOfficialLogo} alt="IETE Official Logo" className="logo-img1" />
          <img src={xLogo} alt="X Logo" className="logo-img2" />
          <img src={ieteRgitLogo} alt="IETE RGIT Logo" className="logo-img3" />
        </div>
        <div className="hero-text">
          <h1 className="welcome-text">Welcome to IETE RGIT</h1>
          <p className="subtitle">
            Empowering the Future through Innovation and Excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
