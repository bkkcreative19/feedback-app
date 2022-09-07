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
