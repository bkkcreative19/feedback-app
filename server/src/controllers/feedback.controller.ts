import { Feedback } from "../entities";
import { Request, Response } from "express";
import { validate } from "class-validator";
import { AppDataSource } from "../database/connection";
import { findEntityOrThrow } from "../utils/typeorm";

export const listFeedbacks = async (_req: Request, res: Response) => {
  const feedbackRepository = AppDataSource.getRepository(Feedback);
  const feedbacks = await feedbackRepository.find();

  res.send(feedbacks);
};

export const listFeedback = async (req: Request, res: Response) => {
  const feedbackRepository = AppDataSource.getRepository(Feedback);
  // const feedback = await feedbackRepository.find({
  //   relations: ["comments.user"],
  //   where: {
  //     id: Number(req.params.feedbackId),
  //   },
  // });

  const feedback = await findEntityOrThrow(Feedback, {
    where: {
      id: Number(req.params.feedbackId),
    },
    relations: ["comments.user"],
  });

  res.send(feedback[0]);
};
