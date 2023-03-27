import { useEffect, useState } from "react";
import PokeItem from "./PokeItem";
import "./styles/PokeList.css";

function PokeList() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
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
      <section className="button">
        <button
          className="button-prev"
          disabled={!offset > 0}
          onClick={() => {
            if (offset > 0) {
              setOffset(offset - limit);
              setPage(page - 1);
            }
          }}
        >
          Prev
        </button>
        <p>{page}</p>
        <button
          className="button-next"
          onClick={() => {
            setOffset(offset + limit);
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </section>
    </>
  );
}

export default PokeList;
