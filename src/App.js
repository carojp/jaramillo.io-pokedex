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
        setCharacter(data);
      });
  }, []);

  return (
    <div>
      <p> Nombre: {character.results.name} </p>
      <p> url: {character.results.url} </p>
    </div>
  );
}

export default App;
