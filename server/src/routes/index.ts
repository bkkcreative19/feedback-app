import { Router } from "express";
import router from "./user";

import user from "./user";
import feedback from "./feedback";
import comment from "./comment";
import reply from "./reply";

const routes = Router();

routes.use("/user", user);
routes.use("/feedbacks", feedback);
routes.use("/comments", comment);
routes.use("/reply", reply);

export default routes;
