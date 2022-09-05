import styled from "styled-components";
import { color } from "../../shared/utils/styles";
import { Button } from "../../shared/components/Button";

export const NavStyles = styled.nav`
  background: ${color.textPrimary};
  display: flex;
  padding: 2em;
  border-radius: 10px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavText = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */

  letter-spacing: -0.333333px;

  color: #ffffff;
`;

export const NavButton = styled(Button)`
  margin-left: auto;
`;
