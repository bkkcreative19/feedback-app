import styled, { css } from "styled-components";

import { color } from "../../utils/styles";
// import Icon from "shared/components/Icon";

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  height: 45px;
  width: 100%;
  margin-top: 1.5em;
`;

export const InputElement = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 0.7em;
  border-radius: 10px;
  border: none;
  background: ${color.lightGrey};
  transition: background 0.1s;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #3a4374;

  &:hover {
  }
  &:focus {
    background: #fff;
  }
  ${(props) =>
    props.invalid &&
    css`
      &,
      &:focus {
        box-shadow: none;
      }
    `}
`;

// export const StyledIcon = styled(Icon)`
//   position: absolute;
//   top: 8px;
//   left: 8px;
//   pointer-events: none;
//   color: ${color.textMedium};
// `;
