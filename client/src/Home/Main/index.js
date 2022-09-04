import React from "react";
import { FeedbackList } from "./FeedbackList";
import { Header } from "./Header";
import { MainStyles } from "./Styles";

export const Main = ({ feedbacks, sortSelected, setSortSelected }) => {
  return (
    <MainStyles>
      <Header
        setSortSelected={setSortSelected}
        sortSelected={sortSelected}
        feedbackLength={feedbacks.length}
      />
      <FeedbackList feedbacks={feedbacks} />
    </MainStyles>
  );
};
