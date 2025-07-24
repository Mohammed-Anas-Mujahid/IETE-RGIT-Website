// src/components/Preloader/Preloader.jsx
import React from "react";
import "./Preloader.css";
import logo from "../../Assets/IETE_LOGO.png";

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img src={logo} alt="IETE RGIT Logo" className="preloader-logo" />
    </div>
  );
};

export default Preloader;
