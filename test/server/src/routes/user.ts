import { createHmac } from "crypto";
import { Router, Request, Response } from "express";
import { User } from "../models/user";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  User.find()
    .then((users) => {
      return res.json(users);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req: Request, res: Response) => {
  const username = req.body.username;
  const password = createHmac("sha256", req.body.username)
    .update("I love cupcakes")
    .digest("hex");

  const newUser = new User({ username, password });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req: Request, res: Response) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

export { router };
