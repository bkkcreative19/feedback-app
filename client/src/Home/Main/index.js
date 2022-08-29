import React from "react";
import { FeedbackList } from "./FeedbackList";
import { Header } from "./Header";
import { MainStyles } from "./Styles";

export const Main = ({ feedbacks }) => {
  return (
    <MainStyles>
      <Header />
      <FeedbackList feedbacks={feedbacks} />
    </MainStyles>
  );
};
