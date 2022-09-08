import { Comment, Feedback, User } from "../entities";
import { Request, Response } from "express";

import { createEntity, findEntityOrThrow } from "../utils/typeorm";
import { AppDataSource } from "../database/connection";

export const createComment = async (req: any, res: Response) => {
  const feedback = await findEntityOrThrow(Feedback, {
    where: {
      id: Number(req.params.feedbackId),
    },
  });

  const comment = await createEntity(Comment, {
    content: req.body.content,
    feedback: feedback[0].id,
    user: req.user.id,
  });

  res.send(comment);
};

export const getComments = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Comment);

  const comments = await repo
    .createQueryBuilder("comment")
    .leftJoin("comment.feedback", "feedback")
    .leftJoinAndSelect("comment.user", "user")
    .where("comment.feedback = :feedbackId", {
      feedbackId: req.params.feedbackId,
    })
    .getMany();

  // const comments = await findEntityOrThrow(Comment, {
  //   where: {
  //     id: 8,
  //   },
  // });
  console.log(comments);
  res.send(comments);
};
