import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import CharacterList from "../components/CharacterList.jsx";
import "./Characters.css";

const Characters = ({ favorites, toggleFavorite }) => {
  const [characters, setCharacters] = useState([]); // array de personajes
  const [loading, setLoading] = useState(true); // loading
  const [error, setError] = useState(null); // error
  const [searchTerm, setSearchTerm] = useState(""); // input

  useEffect(() => {
    const stored = localStorage.getItem("characters");
    if (stored) {
      setCharacters(JSON.parse(stored));
      setLoading(false);
    } else {
      fetch("https://bobsburgers-api.herokuapp.com/characters")
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data); // data es el array completo
          localStorage.setItem("characters", JSON.stringify(data));
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch characters");
          setLoading(false);
        });
    }
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="character-detail-page">
      <Title text={"Bob's Burgers Characters"} />

      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {loading && <p>Loading characters...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <CharacterList characters={filteredCharacters} favorites={favorites} toggleFavorite={toggleFavorite} />
      )}
    </main>
  );
};

export default Characters;
