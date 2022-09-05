import React from "react";
import { Head } from "./Head";
import { Roadmap } from "./Roadmap";
import { Selections } from "./Selections";

export const Sidebar = ({ setFilter, currentFilter }) => {
  return (
    <div>
      <Head />
      <Selections currentFilter={currentFilter} setFilter={setFilter} />
      <Roadmap />
    </div>
  );
};
