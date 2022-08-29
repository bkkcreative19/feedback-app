import React from "react";
import { Feedback } from "./Feedback";
import { FeedbackListStyles } from "./Styles";

export const FeedbackList = ({ feedbacks }) => {
  return (
    <FeedbackListStyles>
      {feedbacks.map((feedback) => {
        return <Feedback key={feedback.id} feedback={feedback} />;
      })}
    </FeedbackListStyles>
  );
};
