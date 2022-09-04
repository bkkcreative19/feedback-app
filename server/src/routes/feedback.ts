import { Router } from "express";
import {
  createFeedback,
  deleteFeedback,
  listFeedback,
  listFeedbacks,
  updateFeedback,
} from "../controllers/feedback.controller";

const router = Router();

router.get("/", listFeedbacks);
router.get("/:feedbackId", listFeedback);
router.post("/", createFeedback);
router.put("/:feedbackId", updateFeedback);
router.delete("/:feedbackId", deleteFeedback);

export default router;
