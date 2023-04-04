import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <section className="flex">
        <a href="#home" className="logo">
          Psychoshala
        </a>
        <nav className={`navbar ${isActive ? "active" : ""}`}>
          <a href="#about">About us</a>
          <a href="#joinAbout">Why us?</a>
          <a href="#bAbout">Benefits</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <div
          id="menu-btn"
          className={`fas fa-bars ${isActive ? "fa-times" : ""}`}
          onClick={handleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </section>
    </header>
  );
};

export default Header;
