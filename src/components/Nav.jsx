import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Title from "./Title";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false); // estado del menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // cierra el menú cuando se pulsa el link
  };
  return (
    <header>
      <Title text={"Bob's Burguers"} />
      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </button>
      <nav className={menuOpen ? "open" : ""}>
        <NavLink to="/" onClick={handleLinkClick}>
          Home 🏠
        </NavLink>
        <NavLink to="/about" onClick={handleLinkClick}>
          About 🍔
        </NavLink>
        <NavLink to="/characters" onClick={handleLinkClick}>
          Characters 👨🏼‍🍳
        </NavLink>
        <NavLink to="/favorites" onClick={handleLinkClick}>
          Favorites 💛
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
