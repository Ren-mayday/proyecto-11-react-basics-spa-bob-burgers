import React from "react";
import Title from "../components/Title";
import CharacterList from "../components/CharacterList";
import "./Favorites.css";

const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <main className="favorites-page page-container">
      <Title className="chewy-title" text=" My Favorite Characters" />

      {favorites.length === 0 ? (
        <p className="no-favorites">You don't have any favorites</p>
      ) : (
        <CharacterList characters={favorites} favorites={favorites} toggleFavorite={toggleFavorite} />
      )}
    </main>
  );
};

export default Favorites;
