import React from "react";
import { Form } from "../../shared/components/Form";
import { Link } from "react-router-dom";
import {
  AlreadyUser,
  AlreadyUserLink,
  AlreadyUserText,
  FormElement,
  FormHeading,
  LoginButton,
} from "./Styles";

export const Register = () => {
  return (
    <>
      <Form
        enableReinitialize
        initialValues={{
          email: "",
          password: "",
        }}
        validations={{
          email: [Form.is.email(), Form.is.required()],
          password: [Form.is.required(), Form.is.minLength(8)],
        }}
      >
        <FormElement>
          <FormHeading>Register</FormHeading>
          <Form.Field.Input name="email" label="Email" />
          <Form.Field.Input name="password" label="Password" />
          <LoginButton variant="textPrimary" type="submit">
            Register
          </LoginButton>
          <AlreadyUser>
            <AlreadyUserText>Already a user?</AlreadyUserText>
            <Link to="/login">
              <AlreadyUserLink>Login</AlreadyUserLink>
            </Link>
          </AlreadyUser>
        </FormElement>
      </Form>
    </>
  );
};
