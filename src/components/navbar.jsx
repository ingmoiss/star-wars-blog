import React from "react";
import { Link } from "react-router-dom";


import starWarsLogo from "../img/star-wars-logo.png";
import { Favorites } from "../views/favorities";

export function Navbar() {

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src={starWarsLogo} alt="Star Wars" />
          </span>
        </Link>
        <Favorites/>
      </div>
    </nav>
  );
}
