import React from "react";
import { Link } from "react-router-dom";
import { EditFeedback, GoBack, GoBackIcon, HeadStyles } from "./Styles";
import BackIcon from "../../assets/shared/icon-arrow-left.svg";

export const Head = () => {
  return (
    <HeadStyles>
      <Link to="/">
        <GoBack>
          <GoBackIcon src={BackIcon} />
          Go Back
        </GoBack>
      </Link>
      <EditFeedback>Edit Feedback</EditFeedback>
    </HeadStyles>
  );
};
