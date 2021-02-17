import React, { useContext, useEffect, useState } from "react";
import planetP from "../img/planet.jpg";
import { Link } from "react-router-dom";

import { Context } from "../store/appContex";

export function PlanetCard() {
  const { store, action } = useContext(Context);

  return (
    <div className="mt-3">
      <div>
        <h1 className="text-left ml-4">Planets</h1>
      </div>
      <div className="d-flex">
        {store.planets.map((planet, i) =>{
          return(
            <div className="card mx-4 mb-3" style={{ width: "18rem" }} key={i}>
            <img src={planetP} className="card-img-top" alt="People" />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">
                <strong>Population: &nbsp;</strong>
                {planet.population}
                <br/>
                <strong>Terrain: &nbsp;</strong>
                {planet.terrain}
              </p>
              <div className="d-flex justify-content-between">
                <Link to="/planet">
                  <button type="button" className="btn btn-outline-primary">
                    Learn More!
                  </button>
                </Link>
                <button type="button" className="btn btn-outline-warning">
                  {<i className="fas fa-heart"></i>}
                </button>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
