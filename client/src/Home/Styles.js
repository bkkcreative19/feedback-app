import styled from "styled-components";

export const HomeStyle = styled.section`
  display: flex;
  // min-width: 1280px;
  width: 70%;
  gap: 2rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    gap: 0;
  }
`;
