import React from "react";
import { PlanetCard } from "../components/planet-cards.jsx";
import { PeopleCard } from "../components/people-cards.jsx";

export function Home() {
  return (
    <div className="container">

      <div className="align-items-center text-center mt5">
        <div style={{ overflow: "auto" }}>
          <div className="row">
            <PeopleCard />
          </div>
        </div>
      </div>
      <div className="align-items-center text-center mt5">
        <div style={{ overflow: "auto" }}>
          <div className="row">
            <PlanetCard />
          </div>
        </div>
      </div>

    </div>
  );
}
