import React from "react";
import { SelectionsStyle, Selection, SelectionRow } from "./Styles";

export const Selections = () => {
  const selections = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  return (
    <SelectionsStyle>
      <SelectionRow>
        {selections.splice(0, 3).map((selection, idx) => {
          return <Selection key={idx}>{selection}</Selection>;
        })}
      </SelectionRow>
      <SelectionRow>
        {selections.splice(0, 2).map((selection, idx) => {
          return <Selection key={idx}>{selection}</Selection>;
        })}
      </SelectionRow>
      <SelectionRow>
        {selections.splice(0, 3).map((selection, idx) => {
          return <Selection key={idx}>{selection}</Selection>;
        })}
      </SelectionRow>
    </SelectionsStyle>
  );
};
