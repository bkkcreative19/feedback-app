import React from "react";
import {
  ReplyStyles,
  Reply,
  ReplyTop,
  ReplyUserImg,
  ReplyName,
  ReplyReply,
  ReplyText,
} from "./Styles";

export const Replies = ({ replies, replyingTo }) => {
  return (
    <ReplyStyles>
      {replies.map((reply, id) => {
        return (
          <Reply key={id}>
            <ReplyTop>
              <ReplyUserImg src={reply.user.userLogo} />
              <ReplyName>
                {reply.user.username}
                <span style={{ display: "block" }}>@hi</span>
              </ReplyName>
              {/* <ReplyReply>Reply</ReplyReply> */}
            </ReplyTop>
            <ReplyText>
              <span> @{replyingTo.username}</span>
              {reply.content}
            </ReplyText>
          </Reply>
        );
      })}
    </ReplyStyles>
  );
};
