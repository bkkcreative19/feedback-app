import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  padding: 2em 2.5em;
  //   justify-content: space-between;
  border-bottom: 1px solid #8c92b334;
`;

export const FilterItem = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  /* identical to box height */
  //   padding: 0 0.5em;
  position: relative;
  text-align: center;
  letter-spacing: -0.180556px;
  flex: 1;
  color: #3a4374;

  &::after {
    content: "";
    position: absolute;
    display: ${(props) => (props.active ? "visible" : "none")};
    left: 0;
    top: -0.5em;
    height: 40px;
    width: 100%;
    border-bottom: solid 4px #ad1fea;
  }
`;
