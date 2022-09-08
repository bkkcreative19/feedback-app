import { User } from "../entities";
import { Request, Response } from "express";
import { validate } from "class-validator";
import { AppDataSource } from "../database/connection";
import { findEntityOrThrow } from "utils/typeorm";
import jwt from "jsonwebtoken";

// import { createEntity } from "../utils/typeorm";

export const createUser = async (req: Request, res: Response) => {
  //Get parameters from the body
  let { username, name, password, userLogo } = req.body;
  let user = new User();
  user.username = username;
  user.name = name;
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

export const isAuth = (req: any, res: any) => {
  // console.log(req.user);
  return res.json({ isLoggedIn: true, username: req.user.username });
};

export const login = async (req: Request, res: Response) => {
  const userLoggingIn = req.body;
  console.log(userLoggingIn);

  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: {
        username: userLoggingIn.username,
      },
    });
    if (user) {
      const isValidPassword = user.checkIfUnencryptedPasswordIsValid(
        userLoggingIn.password
      );
      if (isValidPassword) {
        const payload = {
          id: user.id,
          username: user.username,
        };

        jwt.sign(
          payload,
          "gwae7ge9agawe",
          { expiresIn: 86400 },
          (err, token) => {
            if (err) return res.json({ message: err });
            return res.json({
              message: "Success",
              user: payload,
              token: "Bearer " + token,
            });
          }
        );
      }
    }
  } catch (error) {
    return res.json({
      message: "Invalid Username or Password",
    });
  }
};
