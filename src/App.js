import React, { useEffect, useState } from "react";
import Characters from "./Characters";
import Navigation from "./Navigation";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((response) => {
          setCharacters(response.data.results);
        });
    }
    fetchData();
  }, [page]);

  return (
    <div className="App">
      <Navigation setPage={setPage} page={page} />
      <Characters characters={characters} setCharacters={setCharacters} />
    </div>
  );
}

export default App;
