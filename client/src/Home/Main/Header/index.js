import React from "react";
import {
  ActionButton,
  HeaderStyles,
  SortBy,
  Span1,
  Span2,
  Suggestions,
} from "./Styles";
import { Icon } from "./Icon";
import { useNavigate } from "react-router-dom";

export const Header = ({ feedbackLength }) => {
  const navigate = useNavigate();
  return (
    <HeaderStyles>
      <Icon />
      <Suggestions>{feedbackLength} Suggestions</Suggestions>
      <SortBy>
        <Span1>Sort by :</Span1>
        <Span2>Most Upvotes</Span2>
      </SortBy>
      <ActionButton
        onClick={() => navigate("/create-feedback")}
        variant="purple"
      >
        + Add Feedback
      </ActionButton>
    </HeaderStyles>
  );
};
