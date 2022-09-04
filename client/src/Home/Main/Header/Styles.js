import styled from "styled-components";
import { Button } from "../../../shared/components/Button";
import { DropDown } from "../../../shared/components/Select/Dropdown";

export const HeaderStyles = styled.div`
  background: #373f68;
  border-radius: 10px;
  width: 100%;
  padding: 2em;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Suggestions = styled.h4`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  margin-left: 1.2em;
  color: #ffffff;
`;

export const SortBy = styled.div`
  margin-left: 4.2em;
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #f2f4fe;
`;
export const Sort = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin-left: 0.5em;
  color: #f2f4fe;
  display: flex;
  align-items: center;
  cursor: pointer;
  & svg {
    margin-left: 0.7em;
  }
`;

export const SortDropdown = styled(DropDown)`
  background: red;
`;

export const ActionButton = styled(Button)`
  margin-left: auto;
`;
