import { Router, Request, Response } from "express";
import { User } from "../models/user";
import { generateAccessToken } from "../functions/generateAccessToken";
import { generateRefreshToken } from "../functions/generateRefreshToken";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

let refreshTokens = <Array<any>>[];

router.post("/token", async (req: Request, res: Response) => {
  const refreshToken = req.body.token;
  if (!refreshToken) return res.status(404).send("No refresh token");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(404).send("Refresh token invalid");
  }
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET as string,
    (err: any, user: any) => {
      if (err) return res.status(404).send(err);
      const accessToken = generateAccessToken(user);
      res.status(200).json("Token refreshed");
    }
  );
});

router.post("/login", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username: username }).then((user) => {
    if (!user) return res.status(404).json({ error: "UserNotFound" });
    const passwordInDb = user.password;
    if (passwordInDb === password) {
      const user = { username: username, password: password };
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      refreshTokens.push(refreshToken);
      // res.status(200).json("CorrectPassword");
      res
        .status(200)
        .json({ accessToken: accessToken, refreshToken: refreshToken });
    } else return res.status(404).json({ error: "IncorrectPassword" });
  });
});

router.post("/register", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const newUser = await new User({ username, password });
  await newUser
    .save()
    .then(() => res.status(200).json("User Registered!"))
    .catch((err) => res.status(404).json("Error: " + err));
});

export { router };
