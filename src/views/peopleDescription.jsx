import React from "react";
import people from "../img/pDatails.jpg";

export function PeopleDetail() {
  return (
    <div className="container">
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
          <h5 className="text-center">Birth</h5>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Gender</h5>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Height</h5>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Skin color</h5>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Eye color</h5>
        </div>
      </div>
    </div>
  );
}
