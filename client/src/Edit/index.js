import React from "react";
import { Form } from "../shared/components/Form";
import { GoBack } from "../shared/components/GoBack";
import { FaPenFancy } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { categoryList, statusList } from "../shared/constants/selectOptions";
import {
  ActionButton,
  Actions,
  EditFromContainer,
  FormElement,
  FormHeading,
  FormLogo,
} from "./Styles";
import { capitalizeFirstLetter } from "../shared/utils/javascript";
import { useMutation } from "@tanstack/react-query";
import { updateFeedback } from "../shared/services/feedbacks";

export const EditFeedback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { feedback } = location.state.data;

  const updateFeedbackMutation = useMutation(updateFeedback, {
    // onSuccess: () => {
    //   queryClient.invalidateQueries(["feedback"]);
    // },
  });

  const handleUpdateFeedback = (input) => {
    updateFeedbackMutation.mutate(input);
  };

  return (
    <EditFromContainer>
      <GoBack color="#4661E6" />
      <Form
        enableReinitialize
        initialValues={{
          title: feedback.title,
          category: capitalizeFirstLetter(feedback.category),
          status: capitalizeFirstLetter(feedback.status),
          detail: feedback.description,
        }}
        validations={{
          title: [Form.is.required(), Form.is.maxLength(200)],
          category: Form.is.required(),
          detail: Form.is.required(),
        }}
        onSubmit={async (values, form) => {
          handleUpdateFeedback({
            title: values.title,
            category: values.category,
            status: values.status,
            description: values.detail,
            feedbackId: feedback.id,
          });

          navigate("/");
        }}
      >
        <FormElement>
          <FormLogo>
            <FaPenFancy color="#fff" size="3em" />
          </FormLogo>
          <FormHeading>Editing ‘${feedback.title}’</FormHeading>
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
          <Form.Field.Select
            name="status"
            label="Update Status"
            subLabel="Change feedback state"
            options={statusList}
          />
          <Form.Field.Textarea
            label="Feedback Detail"
            name="detail"
            subLabel="Include any specific comments on what should be improved, added, etc."
          />
          <Actions>
            <ActionButton
              onClick={async () => {
                const { data } = await axios.delete(
                  `http://localhost:5001/api/feedbacks/${feedback.id}`
                );

                navigate("/");
              }}
              type="button"
              variant="red"
            >
              Delete
            </ActionButton>
            <ActionButton
              onClick={() => navigate(-1)}
              type="button"
              variant="textPrimary"
            >
              Cancel
            </ActionButton>
            <ActionButton type="submit">Save Changes</ActionButton>
          </Actions>
        </FormElement>
      </Form>
    </EditFromContainer>
  );
};
