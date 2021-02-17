import React from "react";
import { Link } from "react-router-dom";

import starWarsLogo from "../img/star-wars-logo.png";

export function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src={starWarsLogo} alt="Star Wars" />
          </span>
        </Link>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Favorites
          </button>
           <ul  className="dropdown-menu mt-1 " aria-labelledby="dropdownMenuButton">
               <li className="dropdown-itemn ml-2 d-flex justify-content-between align-items-center" >
               <span className="lead">Hola dfgd</span>
               {<i className="far fa-trash-alt mr-1"></i>}
               </li>
           </ul>
        </div>
      </div>
    </nav>
  );
}
