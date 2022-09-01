import { Router } from "express";
import { listFeedbacks } from "../controllers/feedback.controller";

const router = Router();

router.get("/", listFeedbacks);

export default router;
