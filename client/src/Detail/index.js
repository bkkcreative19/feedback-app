import axios from "axios";
import React, { useState, useEffect } from "react";

export const Details = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5001/feedback");
      setFeedback(data);
    };

    fetchData();
  }, []);

  return <h1>{feedback.title}</h1>;
};
