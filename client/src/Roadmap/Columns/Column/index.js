import React from "react";
import { Item } from "./Item";
import {
  ColumnHead,
  ColumnHeadDesc,
  ColumnHeadName,
  ColumnStyles,
} from "./Styles";

export const Column = ({ column, feedbacks }) => {
  const rightFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === column.status
  );

  return (
    <ColumnStyles>
      <ColumnHead>
        <ColumnHeadName>
          {column.status} ({rightFeedbacks.length})
        </ColumnHeadName>
        <ColumnHeadDesc>{column.desc}</ColumnHeadDesc>
      </ColumnHead>
      {rightFeedbacks.map((feedback, id) => {
        return <Item color={column.color} key={id} feedback={feedback} />;
      })}
    </ColumnStyles>
  );
};
