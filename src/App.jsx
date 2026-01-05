import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Characters from "./pages/Characters.jsx";
import Favorites from "./pages/Favorites.jsx";
import NotFound from "./pages/NotFound.jsx";
import Nav from "./components/Nav.jsx";
import CharacterDetail from "./pages/CharacterDetail.jsx";

function App() {
  // Inicializar favoritos desde localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  //Guardar en localStorage cada vez que cambien los favoritos
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === character.id);
      return exists ? prev.filter((fav) => fav.id !== character.id) : [...prev, character];
    });
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
