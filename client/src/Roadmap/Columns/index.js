import React from "react";
import { Column } from "./Column";
import { ColumnsStyles } from "./Styles";

export const Columns = ({ feedbacks }) => {
  //   console.log(feedbacks);
  const options = [
    {
      status: "Planned",
      number: 2,
      color: "#F49F85",
      desc: "Ideas prioritized for research",
    },
    {
      status: "In-Progress",
      number: 3,
      color: "#AD1FEA",
      desc: "Currently being developed",
    },
    {
      status: "Live",
      number: 1,
      color: "#62BCFA",
      desc: "Released features",
    },
  ];

  return (
    <ColumnsStyles>
      {feedbacks &&
        options.map((option, id) => {
          return <Column feedbacks={feedbacks} key={id} column={option} />;
        })}
    </ColumnsStyles>
  );
};
