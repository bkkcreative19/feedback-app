import styled from "styled-components";

export const SidebarStyles = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    gap: 2em;

    & div {
      flex: 1;
      margin-top: 0;
    }
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
