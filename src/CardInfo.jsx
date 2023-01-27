import arrowLeft from "./assets/arrow-left.png";
import imageGray from "./assets/Frame.png";
import imgmenor from "./assets/menor.png";
import imgmayor from "./assets/mayor.png";
import weight from "./assets/weight.png";
import height from "./assets/height.png";
import pokeball from "./assets/Pokeball.png";
import "./styles/CardInfo.css";

function CardInfo() {
  return (
    <section className="card-info">
      <img className="image-pokeball" src={pokeball} alt="" />
      <img className="image-pokemon" src={imageGray} alt="" />

      <section className="card-info-uno">
        <div className="contents-name">
          <img className="arrow-left" src={arrowLeft} alt="" />
          <h2 className="name-pokemon">Pokémon Name</h2>
          <h3 className="id-pokemon">#999</h3>
        </div>
        <div className="contents-image-pokemon">
          <img className="img-menor" src={imgmenor} alt="" />
          <img className="img-mayor" src={imgmayor} alt="" />
        </div>
      </section>
      <section className="card-info-dos">
        <div className="info-pokemon">
          <div className="type-pokemon">
            <p className="type-uno">Type</p>
            <p className="type-dos">Type</p>
          </div>
          <div>
            <h2 className="about">About</h2>
          </div>
          <div className="about-pokemon">
            <div className="about-weight">
              <img className="img-weight" src={weight} alt="" />
              <p>9,9kg</p>
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
          <div className="base-stats">
            <ul className="name-stats-list">
              <li>HP</li>
              <li>ATK</li>
              <li>DEF</li>
              <li>SATK</li>
              <li>SDEF</li>
              <li>SPD</li>
            </ul>
            <hr className="bar" />
            <ul className="power-stats-list">
              <li>045</li>
              <li>049</li>
              <li>049</li>
              <li>065</li>
              <li>065</li>
              <li>045</li>
            </ul>
            <div className="power-bar">
              <progress className="power-bar-hp" value="0.45"></progress>
              <progress value="0.49"></progress>
              <progress value="0.49"></progress>
              <progress value="0.65"></progress>
              <progress value="0.65"></progress>
              <progress value="0.45"></progress>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CardInfo;
