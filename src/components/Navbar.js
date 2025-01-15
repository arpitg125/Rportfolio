import React, { useState } from "react";
import "./Navbar.css"; // No need to import as styles
import img1 from "../assets/menuIcon.png";
import img2 from "../assets/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="title" href="/">
        Rudolf
      </a>
      <div className="menu">
        <img
          className="menuBtn"
          src={menuOpen ? img1 : img2}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`menuItems ${menuOpen ? "menuOpen" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};