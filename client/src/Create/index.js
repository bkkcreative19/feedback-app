import React from "react";
import { Form } from "../shared/components/Form";
import { GoBack } from "../shared/components/GoBack";
import {
  ActionButton,
  Actions,
  CreateFromContainer,
  FormElement,
  FormHeading,
  FormLogo,
} from "./Styles";
import { TiPlus } from "react-icons/ti";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { categoryList } from "../shared/constants/selectOptions";
import { useMutation } from "@tanstack/react-query";
import { createFeedback } from "../shared/services/feedbacks";

export const CreateFeedback = () => {
  const navigate = useNavigate();

  const createFeedbackMutation = useMutation(createFeedback);

  const handleSubmit = (input) => {
    createFeedbackMutation.mutate(input);
  };

  return (
    <CreateFromContainer>
      <GoBack color="#4661E6" />
      <Form
        enableReinitialize
        initialValues={{
          title: "",
          category: "",
          detail: "",
        }}
        validations={{
          title: [Form.is.required(), Form.is.maxLength(200)],
          category: Form.is.required(),
          detail: Form.is.required(),
        }}
        onSubmit={async (values, form) => {
          handleSubmit({
            title: values.title,
            category: values.category.toLowerCase(),
            upvotes: 0,
            status: "bug",
            description: values.detail,
          });

          navigate("/");
        }}
      >
        <FormElement>
          <FormLogo>
            <TiPlus color="#fff" size="3em" />
          </FormLogo>
          <FormHeading>Create New Feedback</FormHeading>
          <Form.Field.Input
            subLabel="Add a short, descriptive headline"
            name="title"
            label="Feedback Title"
          />
          <Form.Field.Select
            name="category"
            label="Category"
            subLabel="Choose a category for your feedback"
            options={categoryList}
          />
          <Form.Field.Textarea
            label="Feedback Detail"
            name="detail"
            subLabel="Include any specific comments on what should be improved, added, etc."
          />
          <Actions>
            <ActionButton variant="textPrimary" type="button">
              Cancel
            </ActionButton>
            <ActionButton type="submit">Add Feedback</ActionButton>
          </Actions>
        </FormElement>
      </Form>
    </CreateFromContainer>
  );
};
