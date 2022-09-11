import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateRefreshToken = (user: { username: string; password: string }) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET as string);
};

export { generateRefreshToken };
