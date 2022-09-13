import styled from "styled-components";
import { Button } from "../shared/components/Button";
import { Form } from "../shared/components/Form";

export const EditFromContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 540px;

  @media screen and (max-width: 650px) {
    margin: 2em;
  }
`;

export const FormElement = styled(Form.Element)`
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
  margin-bottom: 2em;
  letter-spacing: -0.333333px;

  color: #3a4374;
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 3em;
  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 1.5em;
  }
`;

export const ActionButton = styled(Button)`
  &:first-child {
    margin-right: auto;
  }
  &:last-child {
    margin-left: 1.5em;

    @media screen and (max-width: 650px) {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
