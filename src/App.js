import { useEffect, useState } from "react";
import "./App.css";
import imagen from "./assets/animal-bishop-cartoon-svgrepo-com.svg";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((resp) => resp.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <section className="card-container">
      {characters.map((character) => (
        <div className="card">
          <img className="imagen" src={imagen} alt="" />
          <p className="nombre"> {character.name} </p>
          <p className="url"> url: {character.url} </p>
        </div>
      ))}
    </section>
  );
}

export default App;
