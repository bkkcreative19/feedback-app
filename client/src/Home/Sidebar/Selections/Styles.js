import styled from "styled-components";

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

  &:not(:first-child) {
    margin-top: 1.5em;
  }
`;

export const Selection = styled.div`
  background: #f2f4ff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  padding: 0.5em 1.5em;
  color: #4661e6;
  cursor: pointer;
`;
