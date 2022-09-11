import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";

import { router as authRouter } from "./routes/auth";
import { router as articleRouter } from "./routes/article";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI as string;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/auth", authRouter);
app.use("/article", articleRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
