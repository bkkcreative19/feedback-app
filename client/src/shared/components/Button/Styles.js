import styled from "styled-components";
import { color } from "../../utils/styles";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.1em 1.8em;
  border-radius: 10px;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  background: ${(props) => color[props.variant]};
  color: #fff;
`;

export const Text = styled.span`
  font-size: 1.3em;
`;
