import express from "express";
import cors from "cors";
import insertData from "./database/seed";
import { AppDataSource } from "./database/connection";
import { Feedback } from "./entities";

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
  // app.use(morgan("tiny"));

  app.get("/", async (_req, res) => {
    const feedbacks = await insertData();

    res.json(feedbacks);
  });

  app.get("/feedbacks", async (_req, res) => {
    const repository = AppDataSource.getRepository(Feedback);

    const feedbacks = await repository.find();
    res.json(feedbacks);
  });

  app.get("/feedback", async (_req, res) => {
    const repository = AppDataSource.getRepository(Feedback);

    const feedback = await repository.find({
      where: {
        id: 1,
      },
    });
    res.json(feedback[0]);
  });

  const PORT = process.env.PORT || 5001;

  app.listen(PORT);
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
