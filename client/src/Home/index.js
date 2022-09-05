import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { lowerCaseFirstLetter } from "../shared/utils/javascript";
import { Main } from "./Main";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Sidebar } from "./Sidebar";
import { HomeStyle } from "./Styles";
import Skeleton from "react-loading-skeleton";
import { getFeedbacks } from "../shared/services/feedbacks";

export const Home = () => {
  // const [feedbacks, setFeedbacks] = useState([]);
  const [sortSelected, setSortSelected] = useState("Most Upvotes");
  const [filter, setFilter] = useState("All");

  const {
    isLoading,
    error,
    data: feedbacks,
  } = useQuery(["feedbacks"], getFeedbacks);

  const filteredFeedbacks = filterFeedbacks(feedbacks, filter);
  const sortedFilteredFeedbacks = sortFeedbacks(
    filteredFeedbacks,
    sortSelected
  );

  if (isLoading) return <Skeleton height={100} />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <HomeStyle>
      <Sidebar currentFilter={filter} setFilter={setFilter} />
      <Main
        setSortSelected={setSortSelected}
        sortSelected={sortSelected}
        feedbacks={sortedFilteredFeedbacks}
      />
      {/* {feedbacks.map((feedback) => {
        return <h1>{feedback.title}</h1>;
      })} */}
    </HomeStyle>
  );
};

const filterFeedbacks = (feedbacks, filter) => {
  if (!filter) {
    return feedbacks;
  }

  filter = lowerCaseFirstLetter(filter);

  if (filter === "all") {
    return feedbacks;
  }

  let newFeedbacks = feedbacks.filter(
    (feedback) => feedback.category === filter
  );

  return newFeedbacks;
};

const sortFeedbacks = (feedbacks, sortSelected) => {
  if (!feedbacks) return;
  let sorted = feedbacks;

  if (sortSelected === "Most Comments") {
    sorted = sorted.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });
  }
  if (sortSelected === "Least Comments") {
    sorted = sorted.sort(function (a, b) {
      return a.comments.length - b.comments.length;
    });
  }
  if (sortSelected === "Most Upvotes") {
    sorted = sorted.sort(function (a, b) {
      return b.upvotes - a.upvotes;
    });
  }
  if (sortSelected === "Least Upvotes") {
    sorted = sorted.sort(function (a, b) {
      return a.upvotes - b.upvotes;
    });
  }

  return sorted;
};
