import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Nav } from "./Nav";
import { RoadmapStyles } from "./Styles";
import { getFeedbacks } from "../shared/services/feedbacks";
import { Columns } from "./Columns";

export const Roadmap = () => {
  const {
    isLoading,
    error,
    data: feedbacks,
  } = useQuery(["feedbacks"], getFeedbacks);

  return (
    <RoadmapStyles>
      <Nav />
      <Columns feedbacks={feedbacks} />
    </RoadmapStyles>
  );
};
