import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { ReactComponent as DownloadIcon } from "../../icon/download.svg";


const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar">
      <div
        className={`overlay ${isNavOpen ? "active" : ""}`}
        onClick={closeNav}
      ></div>

      <div className={`nav-links-container ${isNavOpen ? "active" : ""}`}>
        <ul className="nav-links nav-left">
          <li className="nav-component">
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
        </ul>
        <ul className="nav-links nav-right">
          <li className="nav-component">
            <Link to="/portfolio" onClick={closeNav}>
              Portfolio
            </Link>
          </li>
          <li className="nav-component">
            <Link to="/about" onClick={closeNav}>
              About
            </Link>
          </li>
          <li className="nav-component">
            <Link to="/contact" onClick={closeNav}>
              Contact
            </Link>
          </li>
          <li className="nav-component" id="nav-resume">
            <Link to="/cv" onClick={closeNav} className="link-cv">
              Resume
              <DownloadIcon alt="download" className="download-icon" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-reduced" onClick={handleClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default NavBar;
