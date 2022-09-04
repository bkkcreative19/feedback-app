import React from "react";
import { Link } from "react-router-dom";
import { EditFeedback, GoBack, GoBackIcon, HeadStyles } from "./Styles";
import BackIcon from "../../assets/shared/icon-arrow-left.svg";

export const Head = ({ feedback }) => {
  return (
    <HeadStyles>
      <Link to="/">
        <GoBack>
          <GoBackIcon src={BackIcon} />
          Go Back
        </GoBack>
      </Link>
      <Link to="/edit-feedback" state={{ data: { feedback } }}>
        <EditFeedback>Edit Feedback</EditFeedback>
      </Link>
    </HeadStyles>
  );
};
