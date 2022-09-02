import styled from "styled-components";
import { Button } from "../shared/components/Button";
import { Form } from "../shared/components/Form";

export const FormElement = styled(Form.Element)`
  width: 540px;
  background: #fff;
  padding: 3.5em;
  margin-top: 4em;
  position: relative;
  border-radius: 10px;
`;

export const FormLogo = styled.div`
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 1em;
  position: absolute;
  top: -3em;
`;
export const FormHeading = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */
  margin-top: 0.6em;
  letter-spacing: -0.333333px;

  color: #3a4374;
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 3em;
  justify-content: end;
`;

export const ActionButton = styled(Button)`
  &:first-child {
    margin-right: 1.5em;
  }
`;
