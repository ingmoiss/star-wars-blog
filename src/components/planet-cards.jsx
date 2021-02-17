import React from "react";
import planet from "../img/planet.jpg";
import { Link } from "react-router-dom";

export function PlanetCard() {
  return (
    <div className="my-3">
      <div>
        <h1>Planets</h1>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={planet} className="card-img-top" alt="People" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
    </div>
  );
}
