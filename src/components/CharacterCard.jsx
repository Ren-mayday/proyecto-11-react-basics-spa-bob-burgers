// Recibe un personaje individual por props, muestra img, nombre... (Botón añadir a favoritos)
import React from "react";
import "./CharacterCard.css";
import { Link } from "react-router-dom";

const CharacterCard = ({ character, favorites, toggleFavorite }) => {
  const isFavorite = favorites.some((fav) => fav.id === character.id);

  const cleanText = (text) => {
    if (!text) return "Unknown";
    return text.replace(/^["']|["']$/g, "");
  };

  // Función para mostrar nicknames
  const displayNicknames = () => {
    if (!character.nicknames || character.nicknames.length === 0) return "Unknown";
    return character.nicknames.map(cleanText).join(", ");
  };

  return (
    <article className="character-card">
      <Link to={`/characters/${character.id}`}>
        <div className="image-wrapper">
          <img src={character.image} alt={cleanText(character.name)} />
        </div>
        <h2>{cleanText(character.name)}</h2>
        <p>
          <strong>Occupation:</strong> {character.occupation || "Unknown"}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender || "Unknown"}
        </p>
        <p>
          <strong>Age:</strong> {character.age || "Unknown"}
        </p>
      </Link>

      <button
        className={`fav-btn ${isFavorite ? "hearted" : ""}`}
        onClick={() => toggleFavorite(character)}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </article>
  );
};

export default CharacterCard;
