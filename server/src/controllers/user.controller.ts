import { User } from "../entities";
import { Request, Response } from "express";
import { validate } from "class-validator";
import { AppDataSource } from "../database/connection";

// import { createEntity } from "../utils/typeorm";

export const createUser = async (req: Request, res: Response) => {
  //Get parameters from the body
  let { username, password, userLogo } = req.body;
  let user = new User();
  user.username = username;
  user.password = password;
  user.userLogo = userLogo;

  //Validade if the parameters are ok
  const errors = await validate(user);
  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }

  //Hash the password, to securely store on DB
  user.hashPassword();

  //Try to save. If fails, the username is already in use
  const userRepository = AppDataSource.getRepository(User);
  try {
    await userRepository.save(user);
  } catch (e) {
    res.status(409).send("username already in use");
    return;
  }

  //If all ok, send 201 response
  res.status(201).send("User created");
};

export const listUsers = async (_req: Request, res: Response) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  res.send(users);
};
