import React, { useContext } from "react";
import { Context } from "../store/appContex";

export function Favorites(){
    const { store, actions } = useContext(Context);
    
    return(
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {"Favorites "+store.favorites.length}
          </button>
          <ul
            className="dropdown-menu mt-1 "
            aria-labelledby="dropdownMenuButton"
          >
            {store.favorites.length == 0 ? (
            <li className="dropdown-itemn ml-2 d-flex justify-content-between align-items-center">Vacio</li>
          ) : (
            store.favorites.map((item, i) => {
              return (
                <li className="dropdown-itemn ml-2 d-flex justify-content-between align-items-center" key={i}>
                  <span className="lead">{item.name}</span>
                  {<i className="far fa-trash-alt mr-1" onClick={() => actions.deliteFavorite(i)}></i>}
                </li>
              );
            })
            )}
          </ul>
        </div>
    );
}