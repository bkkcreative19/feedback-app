import { Router } from "express";
import {
  listFeedback,
  listFeedbacks,
} from "../controllers/feedback.controller";

const router = Router();

router.get("/", listFeedbacks);
router.get("/:feedbackId", listFeedback);

export default router;
