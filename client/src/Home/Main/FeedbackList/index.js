import React from "react";
import { Feedback } from "../../../shared/components/Feedback";
import { FeedbackListStyles } from "./Styles";
import { Link } from "react-router-dom";

export const FeedbackList = ({ feedbacks }) => {
  return (
    <FeedbackListStyles>
      {feedbacks.map((feedback) => {
        return (
          <Link key={feedback.id} to={`/feedbacks/${feedback.id}`}>
            <Feedback feedback={feedback} />
          </Link>
        );
      })}
    </FeedbackListStyles>
  );
};
