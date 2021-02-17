import React from "react";
import galaxy from "../img/galaxy.jpg";

export function PlanetDetail() {
  return (
    <div className="container">
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
            <h1 className="text-center">Title</h1>
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
      <div className="row">
        <div className="col-md-2">
          <h5 className="text-center">Name</h5>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Climate</h5>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Population</h5>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Orbital period</h5>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Rotation period</h5>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Diamer</h5>
        </div>
      </div>
    </div>
  );
}
