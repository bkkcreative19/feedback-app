import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Feedback } from "../shared/components/Feedback";
import { AddComment } from "./AddComment";
import { Comments } from "./Comments";
import { Head } from "./Head";
import { DetailsStyles } from "./Styles";

export const Details = () => {
  const params = useParams();
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:5001/api/feedbacks/${Number(params.feedbackId)}`
      );
      // console.log(data);
      setFeedback(data);
    };

    fetchData();
  }, [params.feedbackId]);
  // console.log(params);

  return (
    <DetailsStyles>
      <Head />
      <Feedback feedback={feedback} />
      <Comments comments={feedback.comments} />
      <AddComment />
    </DetailsStyles>
  );
};
