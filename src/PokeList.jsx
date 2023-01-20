import { useEffect, useState } from "react";
import PokeItems from "./PokeItems";
import "./styles/PokeList.css";

function PokeList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((resp) => resp.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <section className="card-container">
      {pokemons.map((pokemon) => (
        <PokeItems name={pokemon.name} url={pokemon.url} />
      ))}
    </section>
  );
}

export default PokeList;
