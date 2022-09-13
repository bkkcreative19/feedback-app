import React, { useEffect } from "react";
import axios from "axios";
import { Form } from "../../shared/components/Form";
import { Link, useNavigate } from "react-router-dom";
import {
  AlreadyUser,
  AlreadyUserLink,
  AlreadyUserText,
  FormElement,
  FormHeading,
  LoginButton,
} from "./Styles";

export const Login = () => {
  const navigate = useNavigate();

  // const handleLogin = async (data) => {

  //   console.log(res);
  // };

  useEffect(() => {
    console.log("hi");
    axios
      .get("http://localhost:5001/api/user/isUserAuth", {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("data"))?.token,
        },
      })
      .then(({ data }) => (data.isLoggedIn ? navigate("/") : null));
  }, []);

  return (
    <>
      <Form
        // enableReinitialize
        initialValues={{
          username: "",
          password: "",
        }}
        validations={{
          username: [Form.is.required()],
          password: [Form.is.required(), Form.is.minLength(5)],
        }}
        onSubmit={async (values, form) => {
          // console.log(values);
          const { data } = await axios.post(
            "http://localhost:5001/api/user/login",
            {
              username: values.username,
              password: values.password,
            }
          );
          localStorage.setItem("data", JSON.stringify(data));

          navigate("/");
        }}
      >
        {({ values }) => (
          <FormElement>
            <FormHeading>Login</FormHeading>
            <Form.Field.Input name="username" label="Username" />
            <Form.Field.Input name="password" label="Password" />
            <LoginButton variant="textPrimary" type="submit">
              Login
            </LoginButton>
            <AlreadyUser>
              <AlreadyUserText>Need an account?</AlreadyUserText>
              <Link to="/register">
                <AlreadyUserLink>Register</AlreadyUserLink>
              </Link>
            </AlreadyUser>
          </FormElement>
        )}
      </Form>
    </>
  );
};
