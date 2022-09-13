import { instance } from "../utils/axios";

export const getFeedbacks = async () => {
  const { data } = await instance.get("/feedbacks");
  return data;
};

export const getFeedback = async (info) => {
  const id = info.queryKey[1];
  const { data } = await instance.get(`/feedbacks/${id}`);
  return data;
};

export const updateFeedback = async (info) => {
  const id = info.feedbackId;
  const { data } = await instance.put(`/feedbacks/${id}`, info);
  return data;
};

export const createFeedback = async (input) => {
  const { data } = await instance.post("/feedbacks", input);
  return data;
};
