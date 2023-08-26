import React, { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import Axios from "axios";
import IPokemon from "../interfaces/IPokemon";

function Home() {
  // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data.height);
  //   });

  useEffect(() => {});

  const searchPokemon = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonNameText)
      .then((response) => {
        // Formatting the data
        const data: IPokemon = response.data;
        setPokemonName(data.name);
        setPokemonImg(data.sprites.front_default);
        setPokemonHP(data.stats[0].base_stat.toString());
        setPokemonAttack(data.stats[1].base_stat.toString());
        setPokemonDefense(data.stats[2].base_stat.toString());
        setPokemonSpecialAttack(data.stats[3].base_stat.toString());
        setPokemonSpeed(data.stats[5].base_stat.toString());
        setPokemonType(data.types[0].type.name);
        if (data.types[1] !== undefined) {
          setPokemonType(
            data.types[0].type.name + ", " + data.types[1].type.name
          );
        }

        // console.log(data.name);
        // console.log(data.sprites.front_default);
        // console.log(data.stats[0].base_stat);
        // console.log(data.stats[1].base_stat);
        // console.log(data.stats[2].base_stat);
        // console.log(data.stats[3].base_stat);
        // console.log(data.stats[5].base_stat);
        // console.log(data.types[0].type.name);
        // if (data.types[1] !== undefined) {
        //   console.log(data.types[1].type.name);
        // }
      })
      .catch((error) => {
        alert(
          "Pokemon não encontrado! Verifique se digitou o nome correto em minúsculo!"
        );
      });
  };

  // Setting the mutability for fetching data
  const [pokemonName, setPokemonName] = React.useState("");
  const [pokemonType, setPokemonType] = React.useState("");
  const [pokemonImg, setPokemonImg] = React.useState("");
  const [pokemonHP, setPokemonHP] = React.useState("");
  const [pokemonAttack, setPokemonAttack] = React.useState("");
  const [pokemonDefense, setPokemonDefense] = React.useState("");
  const [pokemonSpecialAttack, setPokemonSpecialAttack] = React.useState("");
  const [pokemonSpeed, setPokemonSpeed] = React.useState("");

  // Slide container mechanism
  const [slideContainer, setSlideContainer] = React.useState(false);

  // Input setter
  const [pokemonNameText, setPokemonNameText] = React.useState("");

  // Handle the input change
  const handlePokemonNameText = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemonNameText(event.target.value);
  };

  const handleSlideContainer = () => {
    setSlideContainer(!slideContainer);
  };

  return (
    <main>
      <div
        onClick={handleSlideContainer}
        className={
          slideContainer
            ? "button-slide-container disabled"
            : "button-slide-container active"
        }
      >
        <button onClick={handleSlideContainer}>
          <MenuOpenIcon className="button-slide" />
        </button>
      </div>
      <div
        className={
          slideContainer ? "slide-container active" : "slide-container disabled"
        }
      >
        <div className="basic-container">
          <div className="exit-button-container">
            <button className="exit-button" onClick={handleSlideContainer}>
              <CloseIcon style={{ fontSize: "1.5rem" }} className="exit-icon" />
            </button>
          </div>
          <div className="search-container">
            <div className="pokemon-name-container">
              <label htmlFor="pokemonName">Digite o nome do Pokemon</label>
              <input
                placeholder="Digite em minúsculo!"
                type="text"
                value={pokemonNameText}
                onChange={handlePokemonNameText}
                name="pokemonName"
                id="pokemonName"
              />
            </div>
            <button onClick={searchPokemon} className="button-search">
              Pesquisar na Pokedex
            </button>
          </div>
        </div>
      </div>
      <section className="title-main">
        <h2>
          <span>API Pokemon </span>- v0.2
        </h2>
      </section>
      <section className="pokemon-container">
        <div className="pokemon-name">
          <h3>{pokemonName.toUpperCase()}</h3>
        </div>
        <div className="pokemon-main-information">
          <div className="pokemon-img">
            <img height={250} src={pokemonImg} alt="" />
          </div>
          <div className="pokemon-description">
            <div className="pokemon-type">Tipo: {pokemonType}</div>
            <div className="pokemon-hp">Vida-base: {pokemonHP}</div>
            <div className="pokemon-attack">
              Ataque-base: {pokemonAttack && pokemonAttack}
            </div>
            <div className="pokemon-defense">Defesa-base: {pokemonDefense}</div>
            <div className="pokemon-special-attack">
              Ataque Especial-base: {pokemonSpecialAttack}
            </div>
            <div className="pokemon-speed">Velocidade-base: {pokemonSpeed}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
