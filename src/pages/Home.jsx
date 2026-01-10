import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/home-hero-Bobs-Burgers.jpg";
import Title from "../components/Title";
import "./Home.css";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="home">
      <div className="hero">
        <div className="hero-content">
          <Title className="chewy-title" text={"Welcome to..."} />

          <div className="hero-image-wrapper">
            <img
              src={heroImage}
              alt="Bob's Burgers Family"
              className="hero-img"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            />
            <div className="image-decoration decoration-top"></div>
            <div className="image-decoration decoration-bottom"></div>
          </div>

          <div className="hero-overlay">
            <h2 className="hero-subtitle">Meet the family, discover the characters and save your favourites</h2>
            <div className="burger-icons">
              <span className="burger-icon">🍔</span>
              <span className="burger-icon">🍟</span>
              <span className="burger-icon">🥤</span>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <Link to="/characters" className="cta-button cta-primary">
            <span className="cta-text">Explore Characters</span>
            <span className="cta-arrow">→</span>
          </Link>
          <Link to="/about" className="cta-button cta-secondary">
            <span className="cta-text">About the Show</span>
          </Link>
        </div>

        <div className="floating-elements">
          <div className="float-item float-1">🍔</div>
          <div className="float-item float-2">🧀</div>
          <div className="float-item float-3">🥬</div>
          <div className="float-item float-4">🍅</div>
        </div>
      </div>
    </main>
  );
};

export default Home;
