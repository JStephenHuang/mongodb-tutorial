import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import { router as exerciseRouter } from "./routes/exercise";
import { router as userRouter } from "./routes/user";

dotenv.config();

const corsConfig = {
  origin: ["http://localhost:3000", "http://192.168.2.38:3000"],
  credentials: true,
};

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(corsConfig));
app.use(express.json());

const uri = process.env.MONGO_URI as string;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

console.log(connection);

app.use("/user", userRouter);
app.use("/exercise", exerciseRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
