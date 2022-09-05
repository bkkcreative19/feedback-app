import React from "react";
import { Link } from "react-router-dom";
import {
  RoadmapHead,
  RoadmapHeadLink,
  RoadmapHeadTitle,
  RoadmapOption,
  RoadmapOptionNumber,
  RoadmapOptionText,
  RoadmapStyles,
} from "./Styles";

export const Roadmap = () => {
  const options = [
    {
      status: "Planned",
      number: 2,
      color: "#F49F85",
    },
    {
      status: "In-Progress",
      number: 3,
      color: "#AD1FEA",
    },
    {
      status: "Live",
      number: 1,
      color: "#62BCFA",
    },
  ];
  return (
    <RoadmapStyles>
      <RoadmapHead>
        <RoadmapHeadTitle>Roadmap</RoadmapHeadTitle>
        <Link to="/roadmap">
          <RoadmapHeadLink>View</RoadmapHeadLink>
        </Link>
      </RoadmapHead>
      {options.map((option, idx) => {
        return (
          <RoadmapOption color={option.color} key={idx}>
            <RoadmapOptionText>{option.status}</RoadmapOptionText>
            <RoadmapOptionNumber>{option.number}</RoadmapOptionNumber>
          </RoadmapOption>
        );
      })}
    </RoadmapStyles>
  );
};
