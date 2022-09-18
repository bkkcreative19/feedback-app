import React from "react";
import { RoadmapItem } from "../../../shared/components/RoadmapItem";
import {
  ColumnFeedbacks,
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

      <ColumnFeedbacks>
        {rightFeedbacks.map((feedback, id) => {
          return (
            <RoadmapItem color={column.color} key={id} feedback={feedback} />
          );
        })}
      </ColumnFeedbacks>
    </ColumnStyles>
  );
};
