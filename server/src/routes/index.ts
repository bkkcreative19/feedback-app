import { Router } from "express";
import router from "./user";

import user from "./user";
import feedback from "./feedback";

const routes = Router();

routes.use("/user", user);
routes.use("/feedbacks", feedback);

export default routes;
