import React from "react";
import {
  CommentName,
  CommentReply,
  CommentStyles,
  CommentText,
  CommentTop,
  CommentUserImg,
} from "./Styles";

export const Comment = ({ comment }) => {
  return (
    <CommentStyles>
      <CommentTop>
        <CommentUserImg src={comment.user.userLogo} />
        <CommentName>
          {comment.user.username}
          <span style={{ display: "block" }}>@hi</span>
        </CommentName>
        <CommentReply>Reply</CommentReply>
      </CommentTop>
      <CommentText>{comment.content}</CommentText>
    </CommentStyles>
  );
};
