import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <div
          id="menu-btn"
          className={`fas fa-bars ${isActive ? "fa-times" : ""}`}
          onClick={handleMenu}
        ><FontAwesomeIcon icon={faBars} /></div>
      </section>
    </header>
  );
};

export default Header;
