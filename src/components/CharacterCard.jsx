// Recibe un personaje individual por props, muestra img, nombre... (Botón añadir a favoritos)
import React from "react";
import "./CharacterCard.css";
import { Link } from "react-router-dom";

const CharacterCard = ({ character, favorites, toggleFavorite }) => {
  const isFavorite = favorites.some((fav) => fav.id === character.id);

  return (
    <article className="character-card">
      <Link to={`/characters/${character.id}`}>
        <div className="image-wrapper">
          <img src={character.image} alt={character.name} />
        </div>
        <h2>{character.name}</h2>
        <p>Occupation: {character.occupation || "Unknown"}</p>
        <p>Gender: {character.gender || "Unknown"}</p>
        <p>Age: {character.age || "Unknown"}</p>
        <p>Nicknames: {character.nicknames || "Unknown"}</p>
      </Link>

      <button className={`fav-btn ${isFavorite ? "hearted" : ""}`} onClick={() => toggleFavorite(character)}>
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </article>
  );
};

export default CharacterCard;
