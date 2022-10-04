import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav_items">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#expirience">Expirience</a>
        </li>
        <li>
          <a href="">Newsletter</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
