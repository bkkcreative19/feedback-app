import { Router } from "express";
import {
  createUser,
  listUsers,
  login,
  isAuth,
} from "../controllers/user.controller";
import auth from "../middleware/auth";

const router = Router();

router.get("/", listUsers);
router.post("/", createUser);
router.post("/login", login);
router.get("/isUserAuth", auth, isAuth);

export default router;
