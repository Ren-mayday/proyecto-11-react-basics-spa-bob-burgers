import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import CharacterList from "../components/CharacterList.jsx";
import "./Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]); // array de personajes
  const [loading, setLoading] = useState(true); // loading
  const [error, setError] = useState(null); // error
  const [searchTerm, setSearchTerm] = useState(""); // input

  useEffect(() => {
    fetch("https://bobsburgers-api.herokuapp.com/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data); // data es el array completo
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch characters");
        setLoading(false);
      });
  }, []);
  return (
    <main>
      <Title text={"Bob's Burgers Characters"} />

      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <CharacterList
        characters={characters.filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase()))}
      />

      {loading && <p>Loading characters...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <CharacterList characters={characters} />}
    </main>
  );
};

export default Characters;
