import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyJWT = (req: any, res: any, next: any) => {
  if (req.headers) {
    const header: any = req.headers["x-access-token"];
    const token = header?.split(" ")[1];

    if (token) {
      jwt.verify(token, "gwae7ge9agawe", (err: any, decoded: any) => {
        if (err)
          return res.json({
            isLoggedIn: false,
            message: "Failed to Authenticate",
          });

        req.user = {};
        req.user.id = decoded.id;
        req.user.username = decoded.username;
        next();
      });
    } else {
      res.json({ message: "Not Authorized", isLoggedIn: false });
    }
  }
};

export default verifyJWT;
