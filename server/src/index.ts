import express from "express";
import cors from "cors";
import insertData from "./database/seed";
import { AppDataSource } from "./database/connection";
import morgan from "morgan";
import { Feedback } from "./entities";
import routes from "./routes";

const app = express();

const establishDatabaseConnection = async () => {
  // console.log(flatten(tasks));

  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.log(error);
  }
};

const initializeExpress = (): void => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use(morgan("tiny"));
  app.use("/api", routes);

  // app.get("/", async (_req, res) => {
  //   const data = await insertData();
  //   res.send(data);
  // });

  const PORT = process.env.PORT || 5001;

  app.listen(PORT);
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
