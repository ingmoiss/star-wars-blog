import React, { useContext }from "react";
import galaxy from "../img/galaxy.jpg";

import { Link, useParams } from "react-router-dom";

//include contex
import { Context } from "../store/appContex";

export function PlanetDetail() {

  const {store, action} = useContext(Context);
  const params = useParams();

  return (
    <div className="container  mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            className="rounded-lg"
            src={galaxy}
            alt="Galaxy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <div className="">
            <h1 className="text-center">{store.planets[params.theid].name}</h1>
          </div>
          <div className="">
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              omnis voluptate, recusandae velit ipsa quisquam blanditiis,
              possimus ducimus accusantium asperiores saepe repellat aperiam
              sapiente harum natus quis? Magni, nulla eveniet?
            </p>
          </div>
        </div>
      </div>
      <hr className="separator" />
      <div className="row mb-4">
        <div className="col-md-2">
          <h5 className="text-center">Name</h5>
          <p className="text-center">{store.planets[params.theid].name}</p>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Climate</h5>
          <p className="text-center">{store.planets[params.theid].climate}</p>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Population</h5>
          <p className="text-center">{store.planets[params.theid].population}</p>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Orbital period</h5>
          <p className="text-center">{store.planets[params.theid].orbital_period}</p>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Rotation period</h5>
          <p className="text-center">{store.planets[params.theid].rotation_period}</p>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Diamer</h5>
          <p className="text-center">{store.planets[params.theid].diameter}</p>
        </div>
      </div>
    </div>
  );
}
