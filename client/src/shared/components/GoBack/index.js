import React from "react";
import { GoBackStyles, GoBackText } from "./Styles";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const GoBack = ({ color }) => {
  const navigate = useNavigate();
  return (
    <GoBackStyles onClick={() => navigate(-1)}>
      <IoIosArrowBack color={color} size="1.4em" />
      <GoBackText>Go Back</GoBackText>
    </GoBackStyles>
  );
};
