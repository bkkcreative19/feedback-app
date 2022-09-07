import { Router } from "express";
import { createComment, getComments } from "../controllers/comment.controller";

const router = Router();

router.post("/:feedbackId", createComment);
router.get("/:feedbackId", getComments);

export default router;
