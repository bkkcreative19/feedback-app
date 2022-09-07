import { instance } from "../utils/axios";

export const createReply = async (input) => {
  console.log(input);
  const { data } = await instance.post(`/reply/${input.commentId}`, input);
  return data;
};
