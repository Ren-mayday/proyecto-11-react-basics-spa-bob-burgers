import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>¡Ups! Page Not Found</h1>
        <p className="error-message">Seems like this hamburger got burned... 🍔🔥</p>
        <p className="error-subtitle">This page doesn’t exist… or Gene ate it.</p>
        <Link to="/" className="back-home-btn">
          <span>🏠</span>
          Go back to the Restaurant
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
