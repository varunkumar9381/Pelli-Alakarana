import React from 'react';
import '../Preloader/Preloader.css';
import logo from '../../images/logo.png'; // adjust path to your image

function Preloader() {
  return (
    <div className="preloader-container">
      <img src={logo} alt="Loading..." className="preloader-image" />
    </div>
  );
}

export default Preloader;
