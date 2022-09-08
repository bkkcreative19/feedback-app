import { Feedback, Comment, User } from "../entities";

import { createEntity, findEntityOrThrow } from "../utils/typeorm";

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

const seedComments = async (feedbackId: any): Promise<any> => {
  const user = await findEntityOrThrow(User, {});
  const comments = data.productRequests
    .map((product: any) => product.comments)
    .flat();
  const filteredComments = comments.filter(
    (comment: any) => comment !== undefined
  );

  const arr: any[] = [];

  filteredComments.map((comment: any) => {
    arr.push(
      createEntity(Comment, {
        content: comment.content,
        feedback: feedbackId,
        user: user[0].id,
      })
    );
  });

  return Promise.all(arr);
};

const insertData = async (): Promise<any> => {
  const feedbacks = await seedFeedbacks();

  // console.log(comments.flat());
  return feedbacks;
};

export default insertData;
