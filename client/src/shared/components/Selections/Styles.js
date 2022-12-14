import styled from "styled-components";
import { color } from "../../../shared/utils/styles";

export const SelectionsStyle = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 2em;
  margin-top: 2em;
  border-radius: 10px;
`;

export const SelectionRow = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 1200px) {
    width: fit-content;
  }

  &:not(:first-child) {
    margin-top: 1.5em;
  }
`;

export const Selection = styled.div`
  background: ${(props) => (props.isCurrent === true ? color.blue : "#f2f4ff")};
  border-radius: 10px;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  padding: 0.5em 1.5em;
  color: ${(props) => (props.isCurrent === true ? "#ffffff" : " #4661e6")};
  cursor: pointer;

  &:hover {
    background: #cfd7ff;
  }
`;
