import React from "react";
import { useState } from "react";
import { PostReply } from "./PostReply";
import { Replies } from "./Replies";
import {
  CommentName,
  CommentReply,
  CommentStyles,
  CommentText,
  CommentTop,
  CommentUserImg,
} from "./Styles";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createReply } from "../../../shared/services/replies";

export const Comment = ({ comment }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [reply, setReply] = useState("");
  const queryClient = useQueryClient();

  const user = JSON.parse(localStorage.getItem("data"));

  const mutation = useMutation(createReply, {
    onSuccess: () => {
      queryClient.invalidateQueries(["feedback"]);
    },
  });

  const handleCreateReply = (input) => {
    mutation.mutate(input);
    setReply("");
    setIsReplying(false);
  };
  const handleChange = () => {
    setIsReplying(!isReplying);
  };
  return (
    <CommentStyles>
      <CommentTop>
        <CommentUserImg src={comment.user.userLogo} />
        <CommentName>
          {comment.user.username}
          <span style={{ display: "block" }}>@hi</span>
        </CommentName>
        {user.user.id !== comment.user.id && (
          <CommentReply onClick={handleChange}>Reply</CommentReply>
        )}
      </CommentTop>
      <CommentText>{comment.content}</CommentText>
      <div
        style={{
          borderLeft: "1px solid #64719618",
          margin: "4em 2em",
        }}
      >
        {isReplying && (
          <PostReply
            setReply={setReply}
            reply={reply}
            handleCreate={handleCreateReply}
            commentId={comment.id}
          />
        )}
        <Replies replyingTo={comment.user} replies={comment.replies} />
      </div>
    </CommentStyles>
  );
};
