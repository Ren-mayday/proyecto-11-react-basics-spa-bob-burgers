// Recibe un personaje individual por props, muestra img, nombre... (Botón añadir a favoritos)
import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  return (
    <article>
      <div className="image-wrapper">
        <img src={character.image} alt={character.name} />
      </div>
      <h2>{character.name}</h2>
      <p>Occupation: {character.occupation || "Unknown"}</p>
      <p>Gender: {character.gender || "Unknown"}</p>
      <p>Age: {character.age || "Unknown"}</p>
      <p>Nicknames: {character.nicknames || "Unknown"}</p>
    </article>
  );
};

export default CharacterCard;
