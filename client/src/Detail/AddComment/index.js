import React from "react";
import {
  AddCommentBottom,
  AddCommentHead,
  AddCommentStyles,
  ChractersLeft,
  PostComment,
  TextInput,
} from "./Styles";

export const AddComment = () => {
  return (
    <AddCommentStyles>
      <AddCommentHead>Add Comment</AddCommentHead>
      <TextInput placeholder="Type your comment here" />
      <AddCommentBottom>
        <ChractersLeft>250 Characters Left</ChractersLeft>
        <PostComment>Post Comment</PostComment>
      </AddCommentBottom>
    </AddCommentStyles>
  );
};
