import styled from "styled-components";

export const DetailsStyles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 730px;

  @media screen and (max-width: 750px) {
    margin: 0 4em;
  }
  @media screen and (max-width: 650px) {
    margin: 2em;
  }
`;
