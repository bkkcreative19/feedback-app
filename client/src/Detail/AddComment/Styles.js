import styled from "styled-components";

export const AddCommentStyles = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 3em;
`;

export const AddCommentHead = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
`;

export const TextInput = styled.input`
  width: 100%;
  border: none;
  background: #f7f8fd;
  border-radius: 5px;
  margin: 1.5em 0;
  padding: 2em;
  padding-bottom: 4em;

  &::placeholder {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    /* identical to box height */

    color: #8c92b3;
  }
`;

export const AddCommentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5em;
`;

export const ChractersLeft = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #647196;
`;

export const PostComment = styled.button`
  background: #ad1fea;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  border: none;
  color: #f2f4fe;
  padding: 0.8em 1.5em;
  cursor: pointer;
`;
