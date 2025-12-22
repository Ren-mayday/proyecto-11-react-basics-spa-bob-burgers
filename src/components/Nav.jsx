import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Title from "./Title";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false); // estado del menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <Title text={"Bob's Burguers"} />
      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </button>
      <nav className={menuOpen ? "open" : ""}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home 🏠
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About 🍔
        </NavLink>
        <NavLink to="/characters" onClick={() => setMenuOpen(false)}>
          Characters 👨🏼‍🍳
        </NavLink>
        <NavLink to="/favorites" onClick={() => setMenuOpen(false)}>
          Favorites 💛
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
