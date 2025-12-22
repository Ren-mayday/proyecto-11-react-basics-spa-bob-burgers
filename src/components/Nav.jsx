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
        ☰
      </button>
      <nav className={menuOpen ? "open" : ""}>
        <NavLink to="/">Home 🏠</NavLink>
        <NavLink to="/about">About 🍔</NavLink>
        <NavLink to="/characters">Characters 👨🏼‍🍳</NavLink>
        <NavLink to="/favorites">Favorites 💛</NavLink>
      </nav>
    </header>
  );
};

export default Nav;
