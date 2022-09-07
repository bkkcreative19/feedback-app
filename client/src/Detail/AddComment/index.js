import React from "react";
import { useState } from "react";
import {
  AddCommentBottom,
  AddCommentHead,
  AddCommentStyles,
  ChractersLeft,
  PostComment,
  TextInput,
} from "./Styles";

export const AddComment = ({ handleCreate, feedbackId }) => {
  const [comment, setComment] = useState("");
  const handleSubmit = () => {
    handleCreate({
      content: comment,
      feedbackId,
    });

    setComment("");
  };
  return (
    <AddCommentStyles>
      <AddCommentHead>Add Comment</AddCommentHead>
      <TextInput
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Type your comment here"
      />
      <AddCommentBottom>
        <ChractersLeft>250 Characters Left</ChractersLeft>
        <PostComment onClick={handleSubmit}>Post Comment</PostComment>
      </AddCommentBottom>
    </AddCommentStyles>
  );
};
