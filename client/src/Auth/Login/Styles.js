import styled from "styled-components";
import { Button } from "../../shared/components/Button";
import { Form } from "../../shared/components/Form";

export const FormElement = styled(Form.Element)`
  width: 540px;
  background: #fff;
  padding: 3.5em;
  margin-top: 8em;
  position: relative;
  border-radius: 10px;
`;

export const FormHeading = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */
  margin-top: 0.6em;
  margin-bottom: 1.5em;
  letter-spacing: -0.333333px;

  color: #3a4374;
`;

export const LoginButton = styled(Button)`
  margin-top: 2em;
  width: 100%;
  &:first-child {
    margin-right: 1.5em;
  }
`;

export const AlreadyUser = styled.div`
  display: flex;
  margin-top: 1.5em;
  font-size: 1.5rem;
`;
export const AlreadyUserText = styled.p``;
export const AlreadyUserLink = styled.span`
  margin-left: 0.3em;
`;
