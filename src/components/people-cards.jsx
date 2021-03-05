import React, { useState, useEffect, useContext } from "react";
import peopleC from "../img/people.jpeg";
import { Link } from "react-router-dom";

import { Context } from "../store/appContex";

export function PeopleCard() {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <div>
        <h1 className="text-left ml-4">Characters</h1>
      </div>
      <div className="d-flex">
        {store.peoples.map((people, i) => {
          return (
            <div className="card mx-4 mb-3" style={{ width: "18rem" }} key={i}>
              <img src={peopleC} className="card-img-top" alt="People" />
              <div className="card-body">
                <h5 className="card-title">{people.name}</h5>
                <p className="card-text">
                  <strong>Gender: &nbsp;</strong>
                  {people.gender}
                  <br />
                  <strong>Hair Color: &nbsp;</strong>
                  {people.hair_color}
                  <br />
                  <strong>Eye-color: &nbsp;</strong>
                  {people.eye_color}
                </p>
                <div className="d-flex justify-content-between">
                  <Link to={"/people/" + i}>
                    <button type="button" className="btn btn-outline-primary">
                      Learn More!
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    onClick={() => actions.addFavorites(people.name)}
                  >
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
