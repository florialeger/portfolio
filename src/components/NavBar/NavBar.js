import React, { useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as DownloadIcon } from "../../icon/download.svg";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      
      <div className={`nav-links-container ${isNavOpen ? "active" : ""}`}>
        <ul className="nav-links nav-left">
          <li className={`nav-component ${isActive("/") ? "active-link" : ""}`}>
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
        </ul>
        <ul className="nav-links nav-right">
          <li className={`nav-component ${isActive("/portfolio") ? "active-link" : ""}`}>
            <Link to="/portfolio" onClick={closeNav}>
              Portfolio
            </Link>
          </li>
          <li className={`nav-component ${isActive("/about") ? "active-link" : ""}`}>
            <Link to="/about" onClick={closeNav}>
              About
            </Link>
          </li>
          <li className={`nav-component ${isActive("/contact") ? "active-link" : ""}`}>
            <Link to="/contact" onClick={closeNav}>
              Contact
            </Link>
          </li>
          <li className="nav-component" id="nav-resume">
            <a onClick={closeNav} className="link-cv" href="https://drive.google.com/file/d/10R0H6alDtpePk514MNGfUmzjd2nYoCQi/view?usp=sharing">
              Resume
              <DownloadIcon alt="download" className="download-icon" />
            </a>
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
