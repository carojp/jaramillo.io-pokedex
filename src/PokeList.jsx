import { useEffect, useState } from "react";
import PokeItems from "./PokeItems";
import "./styles/PokeList.css";

function PokeList() {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [pokemons, setPokemons] = useState([]);

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
          <PokeItems key={pokemon.name} name={pokemon.name} url={pokemon.url} />
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
        Before
      </button>
      <button className="button-next" onClick={() => setOffset(offset + limit)}>
        Next
      </button>
    </>
  );
}

export default PokeList;
