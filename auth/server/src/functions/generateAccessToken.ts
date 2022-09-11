import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateAccessToken = (user: { username: string; password: string }) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: "20s",
  });
};

export { generateAccessToken };
