import React from "react";
import reactJSLogo from "../assets/react-js-icon.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header>
      <div onClick={handleLogoClick} className="logo-container">
        <h1>React</h1>
        <img src={reactJSLogo} alt="React JS Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
