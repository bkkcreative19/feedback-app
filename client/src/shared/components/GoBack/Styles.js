import styled from "styled-components";

export const GoBackStyles = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const GoBackText = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.color};
  margin-left: 0.5em;
`;
