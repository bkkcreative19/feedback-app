import React from "react";
import {
  Comment,
  CommentNumber,
  ItemBackground,
  ItemBottom,
  ItemCategory,
  ItemDesc,
  ItemStatus,
  ItemStyles,
  ItemTitle,
  ItemUpvotes,
  UpvotesNum,
} from "./Styles";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

export const Item = ({ feedback, color }) => {
  return (
    <ItemBackground color={color}>
      <ItemStyles>
        <ItemStatus>{feedback.status}</ItemStatus>
        <ItemTitle>{feedback.title}</ItemTitle>
        <ItemDesc>{feedback.description}</ItemDesc>
        <ItemCategory>{feedback.category}</ItemCategory>
        <ItemBottom>
          <ItemUpvotes>
            <MdOutlineKeyboardArrowUp size="1.5em" />
            <UpvotesNum>{feedback.upvotes}</UpvotesNum>
          </ItemUpvotes>
          <Comment>
            <FaRegComment color="#CDD2EE" size="1.7em" />
            <CommentNumber>{feedback.comments.length}</CommentNumber>
          </Comment>
        </ItemBottom>
      </ItemStyles>
    </ItemBackground>
  );
};
