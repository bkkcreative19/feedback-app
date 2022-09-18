import React from "react";
import { FilterContainer, FilterItem } from "./Styles";

export const Filter = ({ selected, setSelected }) => {
  const list = ["Planned", "In-Progress", "Live"];
  return (
    <FilterContainer>
      {list.map((item, id) => {
        return (
          <FilterItem
            onClick={() => setSelected(item)}
            active={selected === item && true}
            key={id}
          >
            {item}
          </FilterItem>
        );
      })}
    </FilterContainer>
  );
};
