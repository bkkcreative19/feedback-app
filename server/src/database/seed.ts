import { Feedback } from "../entities";

import { createEntity } from "../utils/typeorm";

import fs from "fs";

const rawData = fs.readFileSync("data.json").toString();
const data = JSON.parse(rawData);

const seedFeedbacks = (): Promise<Feedback[]> => {
  const feedbacks = [
    createEntity(Feedback, {
      title: "Add tags for solutions",
      category: "enhancement",
      upvotes: 112,
      status: "suggestion",
      description: "Easier to search for solutions based on a specific stack.",
    }),
    createEntity(Feedback, {
      title: "Add a dark theme option",
      category: "feature",
      upvotes: 99,
      status: "suggestion",
      description:
        "It would help people with light sensitivities and who prefer dark mode.",
    }),
    createEntity(Feedback, {
      title: "Q&A within the challenge hubs",
      category: "feature",
      upvotes: 65,
      status: "suggestion",
      description: "Challenge-specific Q&A would make for easy reference.",
    }),
  ];
  return Promise.all(feedbacks);
};

const insertData = async (): Promise<any> => {
  const feedbacks = await seedFeedbacks();

  return feedbacks;
};

export default insertData;
