import { Router } from "express";
import router from "./user";

import user from "./user";
import feedback from "./feedback";
import comment from "./comment";
import reply from "./reply";

import auth from "../middleware/auth";

const routes = Router();

routes.use("/user", user);
routes.use("/feedbacks", auth, feedback);
routes.use("/comments", auth, comment);
routes.use("/reply", auth, reply);

export default routes;
