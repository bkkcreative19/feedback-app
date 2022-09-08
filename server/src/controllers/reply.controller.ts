import { Reply, Comment, User } from "../entities";
import { Request, Response } from "express";

import { createEntity, findEntityOrThrow } from "../utils/typeorm";

export const createReply = async (req: any, res: Response) => {
  const comment = await findEntityOrThrow(Comment, {
    where: {
      id: Number(req.params.commentId),
    },
  });

  const reply = await createEntity(Reply, {
    content: req.body.content,
    comment: comment[0].id,
    user: req.user.id,
  });

  res.send(reply);
};
