import styled from "styled-components";

export const ReplyStyles = styled.div`
  padding-left: 3.5em;
  margin-top: 3em;
  //   border-left: 1px solid red;
`;

export const Reply = styled.div`
  margin-top: 3em;
`;

export const ReplyTop = styled.div`
  display: flex;
  align-items: center;
`;

export const ReplyUserImg = styled.img`
  src: url(${(props) => props.src});
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const ReplyName = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.194444px;
  margin-left: 2em;
  color: #3a4374;
`;

export const ReplyReply = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661e6;
  margin-left: auto;
  cursor: pointer;
`;

export const ReplyText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #647196;
  margin-left: 4.6em;
  margin-top: 0.7em;

  & span {
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    margin-right: 0.5em;
    color: #ad1fea;
  }
`;
