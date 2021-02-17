import React from "react";
import { PlanetCard } from "../components/planet-cards.jsx";
import { PeopleCard } from "../components/people-cards.jsx";

export function Home() {
  return (
    <div className="container">
      <PeopleCard/>
      <PlanetCard/>
    </div>
  );
}

 
