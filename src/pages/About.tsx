import React from "react";
import "../styles/About.css";
import natan from "../assets/natan-t.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="main-container">
      <div className="content-container">
        <div className="header-info">
          <div className="title-name-creator">
            <h2>Sobre o Autor</h2>
          </div>
        </div>
        <div className="main-info">
          <div className="img-creator-container">
            <img height={250} src={natan} alt="" />
          </div>
          <div className="description-container">
            <h3>Quem sou eu?</h3>
            <p>
              Olá visitante, me chamo Natan, um estudante de Sistemas de
              Informação na UNEX-Itabuna. Este site é um projeto pessoal, uma
              prova de conceito sobre a utilização de APIs e layout básico com o
              framework/library React. A API utilizada é disponbilizada pelo
              site{" "}
              <Link
                target="_blank"
                className="link-pokeapi"
                to="https://pokeapi.co/"
              >
                PokeAPI
              </Link>
              .
            </p>
            <div className="icons-technology-container">
              <i className="fa-brands fa-square-js"></i>
              <i className="fa-brands fa-react"></i>
              <i className="fa-brands fa-python"></i>
              <i className="fa-solid fa-database"></i>
            </div>
          </div>
        </div>
        <div className="bottom-info">
          <h3>Contatos</h3>
          <div className="icons-contact-container">
            <Link to="https://www.linkedin.com/in/natan-correia-5a4794246/">
              <LinkedInIcon className="linkedin-icon" />
            </Link>
            <Link to="https://github.com/prometheusAleph">
              <GitHubIcon className="github-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
