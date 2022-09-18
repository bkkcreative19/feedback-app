import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Nav } from "./Nav";
import { RoadmapStyles } from "./Styles";
import { getFeedbacks } from "../shared/services/feedbacks";
import { Columns } from "./Columns";
import { MobileList } from "./MobileList";

export const Roadmap = () => {
  const [selected, setSelected] = useState("In-Progress");

  const {
    isLoading,
    error,
    data: feedbacks,
  } = useQuery(["feedbacks"], getFeedbacks);

  const filteredFeedbacks = filterFeedbacks(selected, feedbacks);

  return (
    <RoadmapStyles>
      <Nav />
      <Columns feedbacks={feedbacks} />
      <MobileList
        filteredFeedbacks={filteredFeedbacks}
        setSelected={setSelected}
        selected={selected}
      />
    </RoadmapStyles>
  );
};

const filterFeedbacks = (selected, feedbacks) => {
  return feedbacks?.filter((item) => item.status === selected);
};
