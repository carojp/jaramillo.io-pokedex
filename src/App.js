import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState({
    results: [
      {
        name: "",
        url: "",
      },
    ],
  });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((resp) => resp.json())
      .then((data) => {
        setCharacter(data.results);
      });
  }, []);

  return (
    <div>
      <p> Nombre: {character.results[0].name} </p>
      <p> url: {character.results[0].url} </p>
    </div>
  );
}

export default App;
