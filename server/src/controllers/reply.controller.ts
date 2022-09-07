import { Reply, Comment, User } from "../entities";
import { Request, Response } from "express";

import { createEntity, findEntityOrThrow } from "../utils/typeorm";

export const createReply = async (req: Request, res: Response) => {
  const comment = await findEntityOrThrow(Comment, {
    where: {
      id: Number(req.params.commentId),
    },
  });
  const user = await findEntityOrThrow(User, {
    where: {
      id: 3,
    },
  });

  const reply = await createEntity(Reply, {
    content: req.body.content,
    comment: comment[0].id,
    user: user[0].id,
  });

  res.send(reply);
};
