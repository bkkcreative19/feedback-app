import React from "react";
import {
  Comment,
  CommentImage,
  CommentNumber,
  Description,
  Status,
  FeedbackStyles,
  FeedbackTop,
  TextContent,
  Title,
  Upvotes,
  UpvotesImg,
  UpvotesNum,
} from "./Styles";
import UpArrow from "../../../assets/shared/icon-arrow-up.svg";
import CommentLogo from "../../../assets/shared/icon-comments.svg";
export const Feedback = ({ feedback }) => {
  return (
    <FeedbackStyles>
      <Upvotes>
        <UpvotesImg src={UpArrow} />
        <UpvotesNum>{feedback.upvotes}</UpvotesNum>
      </Upvotes>
      <TextContent>
        <Title>{feedback.title}</Title>
        <Description>{feedback.description}</Description>
        <Status>{feedback.status}</Status>
      </TextContent>
      <Comment>
        <CommentImage src={CommentLogo} />
        {feedback.comments && (
          <CommentNumber>{feedback.comments.length}</CommentNumber>
        )}
      </Comment>
    </FeedbackStyles>
  );
};
