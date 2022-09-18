import styled from "styled-components";

export const MobileListContainer = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const ListContainer = styled.div`
  padding: 2em;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */

  letter-spacing: -0.25px;

  color: #3a4374;
`;
