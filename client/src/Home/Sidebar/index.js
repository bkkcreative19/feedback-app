import React from "react";
import { Head } from "./Head";
import { Roadmap } from "./Roadmap";
import { Selections } from "./Selections";

export const Sidebar = () => {
  return (
    <div>
      <Head />
      <Selections />
      <Roadmap />
    </div>
  );
};
