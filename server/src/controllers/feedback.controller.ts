import { Feedback } from "../entities";
import { Request, Response } from "express";
import { validate } from "class-validator";
import { AppDataSource } from "../database/connection";

export const listFeedbacks = async (_req: Request, res: Response) => {
  const feedbackRepository = AppDataSource.getRepository(Feedback);
  const feedbacks = await feedbackRepository.find();
  console.log(feedbacks);
  res.send(feedbacks);
};
