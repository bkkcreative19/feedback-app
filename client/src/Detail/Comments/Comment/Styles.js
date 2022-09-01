import styled from "styled-components";

export const CommentStyles = styled.div`
  border-bottom: 2px solid #8c92b333;
  padding-bottom: 2.5em;
  margin-top: 3em;

  &:last-child {
    border-bottom: none;
  }
`;

export const CommentTop = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentUserImg = styled.img`
  src: url(${(props) => props.src});
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const CommentName = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.194444px;
  margin-left: 2em;
  color: #3a4374;
`;

export const CommentReply = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661e6;
  margin-left: auto;
`;

export const CommentText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #647196;
  margin-left: 4.6em;
  margin-top: 0.7em;
`;
