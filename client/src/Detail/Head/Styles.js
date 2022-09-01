import styled from "styled-components";

export const HeadStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoBack = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #647196;
`;

export const GoBackIcon = styled.img`
  src: url(${(props) => props.src});
  margin-right: 0.8em;
`;

export const EditFeedback = styled.button`
  background: #4661e6;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  border: none;
  color: #f2f4fe;
  padding: 0.8em 1.5em;
  cursor: pointer;
`;
