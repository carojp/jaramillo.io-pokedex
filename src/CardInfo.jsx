import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrowLeft from "./assets/arrow-left.png";
import imageGray from "./assets/Frame.png";
import imgmenor from "./assets/menor.png";
import imgmayor from "./assets/mayor.png";
import weight from "./assets/weight.png";
import height from "./assets/height.png";
import pokeball from "./assets/Pokeball.png";
import barra from "./assets/barra.png";
import "./styles/CardInfo.css";

function CardInfo() {
  const { pokemon_id } = useParams();
  const [description, setDescription] = useState("");
  const [infoCard, setInfoCard] = useState({
    id: "-",
    name: "",
    sprites: {
      other: {
        "official-artwork": {
          front_default: imageGray,
        },
      },
    },
    abilities: [
      {
        ability: {
          name: "",
        },
      },
    ],
    stats: [
      {
        base_stat: 0,
        stat: {
          name: "",
        },
      },
    ],
    types: [
      {
        type: {
          name: `wireframe`,
        },
      },
    ],
    height: "-",
    weight: "-",
  });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
      .then((resp) => resp.json())
      .then((data) => setInfoCard(data));
  }, []);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_id}`)
      .then((resp) => resp.json())
      .then((data) => setDescription(data.flavor_text_entries[0].flavor_text));
  }, []);

  return (
    <section className={`card-info ${infoCard.types[0].type.name}`}>
      <img className="image-pokeball" src={pokeball} alt="" />
      <img
        className="image-pokemon"
        src={infoCard.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <section className="card-info-uno">
        <div className="contents-name">
          <a href={`http://localhost:3000`}>
            <img className="arrow-left" src={arrowLeft} alt="" />
          </a>

          <h2 className="name-pokemon">{infoCard.name} </h2>
          <h3 className="id-pokemon"># {pokemon_id}</h3>
        </div>
        <div className="contents-image-pokemon">
          <a href={`/pokedex/#/cardInfo/${infoCard.id - 1}`}>
            <img className="img-menor" src={imgmenor} alt="" />
          </a>
          <a href={`/pokedex/#/cardInfo/${infoCard.id + 1}`}>
            <img className="img-mayor" src={imgmayor} alt="" />
          </a>
        </div>
      </section>
      <section className="card-info-dos">
        <div className="info-pokemon">
          <div className="type-pokemon">
            {infoCard.types.map((type) => (
              <p
                key={type.type.name}
                className={`types-pokemons ${type.type.name}`}
              >
                {type.type.name}
              </p>
            ))}
          </div>
          <div>
            <h2 className={`about text-color-${infoCard.types[0].type.name} `}>
              About
            </h2>
          </div>
          <div className="about-pokemon">
            <div className="about-weight">
              <img className="img-weight" src={weight} alt="" />
              <p> {infoCard.weight / 100}kg</p>
            </div>
            <hr />
            <div className="about-height">
              <img className="img-height" src={height} alt="" />
              <p>{(infoCard.height / 3.83).toFixed(2)} m</p>
            </div>
            <hr />
            <div className="about-move">
              {infoCard.abilities.map((move) => (
                <p
                  key={move.ability.name}
                  className={`about-move-ability ${move.ability.name}`}
                >
                  {move.ability.name}
                </p>
              ))}
            </div>
          </div>
          <div className="about-title">
            <p className="title-weight">Weight</p>
            <p className="title-height">Height</p>
            <p className="title-move">Moves</p>
          </div>
          <p className="description-pokemon">{description}</p>
          <h2
            className={`title-base-stats text-color-${infoCard.types[0].type.name} `}
          >
            Base Stats
          </h2>
          <div className="container-base-stats">
            <img className="barra-base-stats" src={barra} alt="" />
            <span className={`base-stats-name  `}>
              {infoCard.stats.map((stat) => (
                <p
                  key={stat.stat.name}
                  className={`stats-name ${stat.stat.name} text-color-${infoCard.types[0].type.name}`}
                >
                  {stat.stat.name}
                </p>
              ))}
            </span>
            <span className="base-stats-number">
              {infoCard.stats.map((stat) => (
                <p
                  key={stat.stat.name}
                  className={`stats-number ${stat.base_stat}`}
                >
                  {(stat.base_stat / 100).toFixed(2)}
                </p>
              ))}
            </span>
            <span className="power-bar">
              {infoCard.stats.map((stat) => (
                <meter
                  key={stat.stat.name}
                  className={`base-stats-bar ${stat.base_stat}`}
                  max="2"
                  value={(stat.base_stat / 100).toFixed(2)}
                ></meter>
              ))}
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CardInfo;
