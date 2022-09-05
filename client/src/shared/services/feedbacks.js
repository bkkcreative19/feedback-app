import axios from "axios";

export const getFeedbacks = async () => {
  const { data } = await axios.get("http://localhost:5001/api/feedbacks");
  return data;
};
