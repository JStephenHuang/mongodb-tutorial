import { Router, Request, Response } from "express";
import { isAuthenticated } from "../middlewares/auth";

const router = Router();

router.post("/sell", isAuthenticated, async (req: Request, res: Response) => {
  await res.status(200).json("You selled an article.");
});

export { router };
