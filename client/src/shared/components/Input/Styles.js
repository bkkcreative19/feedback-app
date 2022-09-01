import styled, { css } from "styled-components";

// import { color, font } from "shared/utils/styles";
// import Icon from "shared/components/Icon";

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  height: 32px;
  width: 100%;
`;

export const InputElement = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 7px;
  border-radius: 3px;

  transition: background 0.1s;

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
