import React from "react";
import { SelectionsStyle, Selection, SelectionRow } from "./Styles";

export const Selections = ({ setFilter, currentFilter }) => {
  const selections = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const isCurrent = (option) => {
    return option === currentFilter ? true : false;
  };
  return (
    <SelectionsStyle>
      <SelectionRow>
        {selections.splice(0, 3).map((selection, idx) => {
          return (
            <Selection
              isCurrent={isCurrent(selection)}
              onClick={() => setFilter(selection)}
              key={idx}
            >
              {selection}
            </Selection>
          );
        })}
      </SelectionRow>
      <SelectionRow>
        {selections.splice(0, 2).map((selection, idx) => {
          return (
            <Selection
              isCurrent={isCurrent(selection)}
              onClick={() => setFilter(selection)}
              key={idx}
            >
              {selection}
            </Selection>
          );
        })}
      </SelectionRow>
      <SelectionRow>
        {selections.splice(0, 3).map((selection, idx) => {
          return (
            <Selection
              isCurrent={isCurrent(selection)}
              onClick={() => setFilter(selection)}
              key={idx}
            >
              {selection}
            </Selection>
          );
        })}
      </SelectionRow>
    </SelectionsStyle>
  );
};
