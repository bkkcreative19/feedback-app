import { Feedback } from "../entities";
import { Request, Response } from "express";
import { validate } from "class-validator";
import { AppDataSource } from "../database/connection";
import {
  createEntity,
  deleteEntity,
  findEntityOrThrow,
  updateEntity,
} from "../utils/typeorm";
import console from "console";

export const listFeedbacks = async (_req: any, res: Response) => {
  const feedbackRepository = AppDataSource.getRepository(Feedback);
  const feedbacks = await feedbackRepository.find();

  res.send(feedbacks);
};

export const listFeedback = async (req: any, res: Response) => {
  const feedback = await findEntityOrThrow(Feedback, {
    where: {
      id: Number(req.params.feedbackId),
    },
    relations: ["comments.user", "comments.replies.user"],
  });

  res.send(feedback[0]);
};

export const createFeedback = async (req: Request, res: Response) => {
  const feedback = await createEntity(Feedback, req.body);
  res.send(feedback);
};

export const updateFeedback = async (req: Request, res: Response) => {
  const feedback = await updateEntity(
    Feedback,
    req.params.feedbackId,
    req.body
  );
  res.send(feedback);
};

export const deleteFeedback = async (req: Request, res: Response) => {
  await deleteEntity(Feedback, req.params.feedbackId);
  res.send("Deleted");
};
