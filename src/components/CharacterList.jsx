// Tiene que recibir un array de personajes por props, .map() para renderizar cada personaje.
import React from "react";
import CharacterCard from "./CharacterCard.jsx";
import "./CharacterList.css";

const CharacterList = ({ characters }) => {
  return (
    <section className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character}></CharacterCard>
      ))}
    </section>
  );
};

export default CharacterList;
