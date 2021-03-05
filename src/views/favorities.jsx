import React, { useContext } from "react";
import { Context } from "../store/appContex";
import { Link } from "react-router-dom";

export function Favorites() {
  const { store, actions } = useContext(Context);
  var loggedIn = store.login;
  if (loggedIn != "true") {
    return (
      <div className="ml-auto">
        <Link to="/log_in/">
          <button type="button" className="btn btn-outline-light mr-1">
            Log In
          </button>
        </Link>
        <Link to="/sign_up/">
          <button type="button" className="btn btn-outline-info ml-1 mr-2">
            Sign Up
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="d-flex">
        <div>
        <Link to="/">
          <button type="button" className="btn btn-outline-light mr-1" onClick={()=>{actions.logOut();}}>
            Log Out
          </button>
        </Link>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {"Favorites " + store.favorites.length}
          </button>
          <ul
            className="dropdown-menu mt-1 "
            aria-labelledby="dropdownMenuButton"
          >
            {store.favorites.length == 0 ? (
              <li className="dropdown-itemn ml-2 d-flex justify-content-between align-items-center">
                Vacio
              </li>
              
            ) : (
              store.favorites.map((item, i) => {
                return (
                  <li
                    className="dropdown-itemn ml-2 d-flex justify-content-between align-items-center"
                    key={i}
                  >
                    <span className="lead">{item}</span>
                    {
                      <i
                        className="far fa-trash-alt mr-1"
                        onClick={() => actions.deliteFavorite(item)}
                      ></i>
                    }
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    );
  }
}
