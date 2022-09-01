import React from "react";
import { Comment } from "./Comment";
import { CommentsHead, CommentsStyles } from "./Styles";

export const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <CommentsStyles>
      <CommentsHead>{comments && comments.length} Comments</CommentsHead>
      {comments &&
        comments.map((comment, idx) => {
          return <Comment key={idx} comment={comment} />;
        })}
    </CommentsStyles>
  );
};
