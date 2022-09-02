import styled, { css } from "styled-components";

import { color, font } from "../../utils/styles";

export const StyledTextarea = styled.textarea`
  display: inline-block;
  background: ${color.lightGrey};
  border: none;
  height: 96px;
  width: 100%;
  margin-top: 1.5em;
`;
