import React from "react";
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
    },
    {
      status: "In-Progress",
      number: 3,
    },
    {
      status: "Live",
      number: 1,
    },
  ];
  return (
    <RoadmapStyles>
      <RoadmapHead>
        <RoadmapHeadTitle>Roadmap</RoadmapHeadTitle>
        <RoadmapHeadLink>View</RoadmapHeadLink>
      </RoadmapHead>
      {options.map((option, idx) => {
        return (
          <RoadmapOption key={idx}>
            <RoadmapOptionText>{option.status}</RoadmapOptionText>
            <RoadmapOptionNumber>{option.number}</RoadmapOptionNumber>
          </RoadmapOption>
        );
      })}
    </RoadmapStyles>
  );
};
