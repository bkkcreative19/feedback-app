import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";
import { HomeStyle } from "./Styles";

export const Home = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [sortSelected, setSortSelected] = useState("Least Upvotes");
  const [sortedFeedbacks, setSortedFeedbacks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5001/api/feedbacks");
      setFeedbacks(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sorted = [...feedbacks];

    if (sortSelected === "Most Comments") {
      sorted = feedbacks.sort(function (a, b) {
        return a.comments.length - b.comments.length;
      });
    }
    if (sortSelected === "Least Comments") {
      sorted = feedbacks.sort(function (a, b) {
        return b.comments.length - a.comments.length;
      });
    }
    if (sortSelected === "Most Upvotes") {
      sorted = feedbacks.sort(function (a, b) {
        return a.upvotes - b.upvotes;
      });
    }
    if (sortSelected === "Least Upvotes") {
      sorted = feedbacks.sort(function (a, b) {
        return b.upvotes - a.upvotes;
      });
    }

    setFeedbacks(sorted);
  }, [sortSelected]);

  return (
    <HomeStyle>
      <Sidebar />
      <Main
        setSortSelected={setSortSelected}
        sortSelected={sortSelected}
        feedbacks={feedbacks}
      />
      {/* {feedbacks.map((feedback) => {
        return <h1>{feedback.title}</h1>;
      })} */}
    </HomeStyle>
  );
};
