import styled from "styled-components";
import { Button } from "../../../../shared/components/Button";

export const PostReplyStyles = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 1.5em;
`;
export const PostReplyInput = styled.input`
  width: 73%;
  padding: 2em 1em;
  //   height: 80px;
  margin-left: auto;
  border: none;
  background: #f7f8fd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid #4661e6;
  }
`;
export const PostReplyButton = styled(Button)`
  height: fit-content;
  padding: 1em;
  font-weight: 700;
  font-size: 11px;
  line-height: 20px;
  margin-left: 1.5em;
  color: #f2f4fe;
`;
