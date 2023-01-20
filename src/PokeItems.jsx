import { useEffect, useState } from "react";
import "./styles/PokeItems.css";
import image from "./assets/Frame.png";

function PokeItems({ name, url }) {
  const [pokemon, setPokemon] = useState({
    id: "-",
    name: name,
    sprites: {
      other: {
        "official-artwork": {
          front_default: image,
        },
      },
    },
  });

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <div className="card">
      <p className="id">#{pokemon.id}</p>
      <img
        className="imagen"
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <p className="nombre"> {pokemon.name} </p>
    </div>
  );
}

export default PokeItems;
