import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CharacterDetail.css";

const CharacterDetail = () => {
  const { id } = useParams(); // id del personaje en la URL
  const [character, setCharacter] = useState(null);

  const cleanText = (text) => {
    if (!text) return "Unknown";
    return text.replace(/^["']|["']$/g, "");
  };
  useEffect(() => {
    const stored = localStorage.getItem("characters");
    if (stored) {
      const characters = JSON.parse(stored);
      const found = characters.find((char) => char.id === parseInt(id));
      setCharacter(found || null);
    }
  }, [id]);

  if (!character) {
    return (
      <main className="character-detail-page">
        <p>Loading character...</p>
      </main>
    );
  }

  return (
    <main className="character-detail-page">
      <h1>{cleanText(character.name)}</h1>
      <div className="character-detail">
        <img src={character.image} alt={cleanText(character.name)} />

        <p>
          <strong>Occupation:</strong> {character.occupation || "Unknown"}
        </p>

        {character.allOccupations && character.allOccupations.length > 0 && (
          <p>
            <strong>All Occupations:</strong> {character.allOccupations.join(", ")}
          </p>
        )}

        {character.nicknames && character.nicknames.length > 0 && (
          <p>
            <strong>Nicknames:</strong> {character.nicknames.map(cleanText).join(", ")}
          </p>
        )}

        <p>
          <strong>Voiced By:</strong> {character.voicedBy || "Unknown"}
        </p>
        <p>
          <strong>First Episode:</strong> {cleanText(character.firstEpisode)}
        </p>
      </div>
    </main>
  );
};

export default CharacterDetail;
