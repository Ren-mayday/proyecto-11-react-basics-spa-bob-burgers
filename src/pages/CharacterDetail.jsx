import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CharacterDetail.css";

const CharacterDetail = () => {
  const { id } = useParams(); // id del personaje en la URL
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("characters");
    if (stored) {
      const characters = JSON.parse(stored);
      const found = characters.find((char) => char.id === parseInt(id));
      setCharacter(found || null);
    }
  }, [id]);

  if (!character) {
    return <p>Loading character...</p>;
  }

  return (
    <main className="character-detail-page">
      <h1>{character.name}</h1>
      <div className="character-detail">
        <img src={character.image} alt={character.name} />
        <p>Occupation: {character.occupation || "Unknown"}</p>
        <p>Voiced By: {character.voicedBy || "Unknown"}</p>
        <p>First Episode: {character.firstEpisode || "Unknown"}</p>
      </div>
    </main>
  );
};

export default CharacterDetail;
