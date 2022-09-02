import React from "react";
import { Form } from "../shared/components/Form";
import { GoBack } from "../shared/components/GoBack";
import {
  ActionButton,
  Actions,
  FormElement,
  FormHeading,
  FormLogo,
} from "./Styles";
import { TiPlus } from "react-icons/ti";

export const CreateFeedback = () => {
  return (
    <>
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
          console.log(values);
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
            options={[
              { value: 1, label: "1" },
              { value: 2, label: "2" },
            ]}
          />
          {/* <Form.Field.Input
            label="Feedback Detail"
            name="detail"
            subLabel="Include any specific comments on what should be improved, added, etc."
          /> */}
          <Form.Field.Textarea
            label="Feedback Detail"
            name="detail"
            subLabel="Include any specific comments on what should be improved, added, etc."
          />
          <Actions>
            <ActionButton variant="textPrimary" type="submit">
              Cancel
            </ActionButton>
            <ActionButton type="submit">Add Feedback</ActionButton>
          </Actions>
        </FormElement>
      </Form>
    </>
  );
};
