import styled from "styled-components";

export const RoadmapStyles = styled.div`
  background: #ffffff;
  border-radius: 10px;
  margin-top: 2em;
  padding: 2em;
`;

export const RoadmapHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;

export const RoadmapHeadTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;

  letter-spacing: -0.25px;

  color: #3a4374;
`;
export const RoadmapHeadLink = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;

  text-decoration-line: underline;
  cursor: pointer;
  color: #4661e6;
`;

export const RoadmapOption = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: red;
  }
`;
export const RoadmapOptionText = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  margin-left: 1em;
  color: #647196;
`;
export const RoadmapOptionNumber = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  margin-left: auto;
  color: #647196;
`;
