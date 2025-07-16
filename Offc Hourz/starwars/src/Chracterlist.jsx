import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const res = await fetch("https://swapi.info/api/people");
        const data = await res.json();
        setCharacters(data); // data.results is an array of characters
        console.log (data)
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      }
    }

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Character List</h2>
        {characters.map((character, index) => (
          <CharacterCard key={index}char={character} /> )) }
    </div>
  );
}

export default CharacterList;