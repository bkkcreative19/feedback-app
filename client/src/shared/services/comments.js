import { instance } from "../utils/axios";

export const createComment = async (input) => {
  const { data } = await instance.post(`/comments/${input.feedbackId}`, input);
  return data;
};

export const getComments = async (queryData) => {
  const feedbackId = Number(queryData.queryKey[1]);

  const { data } = await instance.get(`/comments/${feedbackId}`);

  return data;
};
