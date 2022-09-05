import React from "react";
import { Left, NavButton, NavStyles, NavText } from "./Styles";
import { GoBack } from "../../shared/components/GoBack";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <NavStyles>
      <Left>
        <GoBack color="#fff" />
        <NavText>Roadmap</NavText>
      </Left>
      <NavButton onClick={() => navigate("/create-feedback")}>
        + Add Feedback
      </NavButton>
    </NavStyles>
  );
};
