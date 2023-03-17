import { useEffect, useState } from "react";
import PokeItem from "./PokeItem";
import "./styles/PokeList.css";

function PokeList() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, [offset]);

  return (
    <>
      <section className="card-container">
        {pokemons.map((pokemon) => (
          <PokeItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </section>
      <button
        className="button-before"
        disabled={!offset > 0}
        onClick={() => {
          if (offset > 0) {
            setOffset(offset - limit);
          }
        }}
      >
        Prev
      </button>
      <button className="button-next" onClick={() => setOffset(offset + limit)}>
        Next
      </button>
    </>
  );
}

export default PokeList;
