import { instance } from "../utils/axios";

export const createReply = async (input) => {
  const { data } = await instance.post(`/reply/${input.commentId}`, input);
  return data;
};
