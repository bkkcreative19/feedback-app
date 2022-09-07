import { useParams } from "react-router-dom";
import { Feedback } from "../shared/components/Feedback";
import { AddComment } from "./AddComment";
import { Comments } from "./Comments";
import { Head } from "./Head";
import { DetailsStyles } from "./Styles";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../shared/services/comments";
import { getFeedback } from "../shared/services/feedbacks";

export const Details = () => {
  const params = useParams();

  const queryClient = useQueryClient();

  const { data: feedback, isLoading } = useQuery(
    ["feedback", params.feedbackId],
    getFeedback
  );

  const mutation = useMutation(createComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["feedback"]);
    },
  });

  const handleCreateComment = (input) => {
    mutation.mutate(input, feedback.id);
  };

  if (isLoading) return "...loading";

  return (
    <DetailsStyles>
      <Head feedback={feedback} />
      <Feedback feedback={feedback} />
      <Comments comments={feedback.comments} />
      <AddComment feedbackId={feedback.id} handleCreate={handleCreateComment} />
    </DetailsStyles>
  );
};
