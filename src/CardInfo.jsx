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
import "./styles/type.css";

function CardInfo() {
  const { pokemon_id } = useParams();
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
    types: [
      {
        type: {
          name: `wireframe`,
        },
      },
    ],
    stats: [
      {
        base_stat: 0,
      },
    ],
    Weight: "9,9",
  });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
      .then((resp) => resp.json())
      .then((data) => setInfoCard(data));
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
          <a href={`http://localhost:3000/cardInfo/${infoCard.id - 1}`}>
            <img className="img-menor" src={imgmenor} alt="" />
          </a>
          <a href={`http://localhost:3000/cardInfo/${infoCard.id + 1}`}>
            <img className="img-mayor" src={imgmayor} alt="" />
          </a>
        </div>
      </section>
      <section className="card-info-dos">
        <div className="info-pokemon">
          <div className="type-pokemon">
            <p className="type-uno">{infoCard.types[0].type.name}</p>
            <p className="type-dos">Type</p>
          </div>
          <div>
            <h2 className="about">About</h2>
          </div>
          <div className="about-pokemon">
            <div className="about-weight">
              <img className="img-weight" src={weight} alt="" />
              <p> {infoCard.Weight}kg</p>
            </div>
            <hr />
            <div className="about-height">
              <img className="img-height" src={height} alt="" />
              <p>9,9m</p>
            </div>
            <hr />
            <div className="about-ability">
              <p>Ability 1</p>
              <p>Ability 2</p>
            </div>
          </div>
          <div className="about-title">
            <p className="title-weight">Weight</p>
            <p className="title-height">Height</p>
            <p className="title-move">Moves</p>
          </div>
          <p className="description-pokemon">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius beatae
            repellendus debitis, quo quidem animi! Similique debitis nemo
            nostrum, maiores aspernatur numquam soluta voluptate corporis vel
            dolorem totam ex eum.
          </p>
          <h2 className="title-base-stats">Base Stats</h2>
          <div className="container-base-stats">
            <img className="barra-base-stats" src={barra} alt="" />
            <span className="base-stats">
              <p className="base-stats-name">HP</p>
              <p className="base-stats-number">045</p>
              <meter className="base-stats-bar" max="100" value="45"></meter>
              <p className="base-stats-name">ATK</p>
              <p className="base-stats-number">049</p>
              <meter className="base-stats-bar" max="100" value="49"></meter>
              <p className="base-stats-name">DEF</p>
              <p className="base-stats-number">049</p>
              <meter className="base-stats-bar" max="100" value="49"></meter>
              <p className="base-stats-name">SATK</p>
              <p className="base-stats-number">065</p>
              <meter className="base-stats-bar" max="100" value="65"></meter>
              <p className="base-stats-name">SDEF</p>
              <p className="base-stats-number">065</p>
              <meter className="base-stats-bar" max="100" value="65"></meter>
              <p className="base-stats-name">SPD</p>
              <p className="base-stats-number">045</p>
              <meter className="base-stats-bar" max="100" value="45"></meter>
            </span>

            <div className="power-bar"></div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CardInfo;
