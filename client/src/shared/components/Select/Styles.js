import styled, { css } from "styled-components";

import { color, font, mixin, zIndexValues } from "../../utils/styles";

export const StyledSelect = styled.div`
  background: ${color.lightGrey};
  padding: 1.5em;
  border-radius: 10px;
  margin-top: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const SelectedInput = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #3a4374;
`;

export const DropdownStyles = styled.div`
  position: absolute;
  top: 6em;
  left: 0;
  background: #fff;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;
`;

export const Option = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  padding: 0.8em;
  color: #647196;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 2px solid ${color.lightGrey};
  }
`;
