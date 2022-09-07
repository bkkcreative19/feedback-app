import React from "react";
import { PostReplyButton, PostReplyInput, PostReplyStyles } from "./Styles";

export const PostReply = ({ setReply, reply, handleCreate, commentId }) => {
  return (
    <PostReplyStyles>
      <PostReplyInput
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      />
      <PostReplyButton
        onClick={() => handleCreate({ content: reply, commentId })}
      >
        Post Reply
      </PostReplyButton>
    </PostReplyStyles>
  );
};
