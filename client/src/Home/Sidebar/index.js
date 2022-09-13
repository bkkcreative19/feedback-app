import React from "react";
import { Head } from "./Head";
import { Roadmap } from "../../shared/components/Roadmap";
import { Selections } from "../../shared/components/Selections";
import { SidebarStyles } from "./Styles";

export const Sidebar = ({ setFilter, currentFilter }) => {
  return (
    <SidebarStyles>
      <Head />
      <Selections currentFilter={currentFilter} setFilter={setFilter} />
      <Roadmap />
    </SidebarStyles>
  );
};
