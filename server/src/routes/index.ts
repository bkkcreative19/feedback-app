import { Router } from "express";

import user from "./user";
import feedback from "./feedback";
import comment from "./comment";
import reply from "./reply";

import auth from "../middleware/auth";

const routes = Router();

routes.use("/user", user);
routes.use("/feedbacks", feedback);
routes.use("/comments", auth, comment);
routes.use("/reply", auth, reply);

export default routes;
