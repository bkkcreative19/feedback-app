import React from "react";
import { RoadmapItem } from "../../shared/components/RoadmapItem";
import { Filter } from "./Filter";
import { ListContainer, MobileListContainer, Title } from "./Styles";

export const MobileList = ({ selected, setSelected, filteredFeedbacks }) => {
  return (
    <MobileListContainer>
      <Filter setSelected={setSelected} selected={selected} />
      <ListContainer>
        <Title>
          {selected} ({filteredFeedbacks?.length})
        </Title>
        {filteredFeedbacks?.map((feedback, id) => {
          return <RoadmapItem key={id} feedback={feedback} />;
        })}
      </ListContainer>
    </MobileListContainer>
  );
};
