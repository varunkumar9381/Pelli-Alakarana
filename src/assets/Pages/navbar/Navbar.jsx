import React, { useState, useEffect } from 'react'
import logo from '../../images/logo.png'
import '../../../../src/index.css'
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 80);
      
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-colored" : "navbar-transparent"}`}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="error" width="55px" height="55px" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white mx-2 fw-bold" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white mx-2 fw-bold" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white mx-2 fw-bold" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white mx-2 fw-bold" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
