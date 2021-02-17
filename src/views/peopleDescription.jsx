import React, {useContext}from "react";
import people from "../img/pDatails.jpg";
import { Link, useParams } from "react-router-dom";

//Include Context
import { Context } from "../store/appContex";


export function PeopleDetail() {

  const { store, action } = useContext(Context);
  const params = useParams();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            className="rounded-lg"
            src={people}
            alt="People"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <div className="">
            <h1 className="text-center">{store.peoples[params.theid].name}</h1>
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
          <p className="text-center">{store.peoples[params.theid].name}</p>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Birth</h5>
          <p  className="text-center">{store.peoples[params.theid].birth_year}</p>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Gender</h5>
          <p  className="text-center">{store.peoples[params.theid].gender}</p>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Height</h5>
          <p  className="text-center">{store.peoples[params.theid].height}</p>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Skin color</h5>
          <p  className="text-center">{store.peoples[params.theid].skin_color}</p>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Eye color</h5>
          <p  className="text-center">{store.peoples[params.theid].eye_color}</p>
        </div>
      </div>
    </div>
  );
}
