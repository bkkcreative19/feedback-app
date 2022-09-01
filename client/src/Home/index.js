import axios from "axios";
import React, { useEffect, useState } from "react";
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";
import { HomeStyle } from "./Styles";

export const Home = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5001/api/feedbacks");
      setFeedbacks(data);
    };

    fetchData();
  }, []);

  return (
    <HomeStyle>
      <Sidebar />
      <Main feedbacks={feedbacks} />
      {/* {feedbacks.map((feedback) => {
        return <h1>{feedback.title}</h1>;
      })} */}
    </HomeStyle>
  );
};
