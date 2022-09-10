import { Router, Request, Response } from "express";
import { Exercise } from "../models/exercise";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  Exercise.find()
    .then((exercises) => {
      return res.json(exercises);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req: Request, res: Response) => {
  const username = req.body.username as string;
  const description = req.body.description as string;
  const duration = Number(req.body.duration);
  const date = new Date(Date.parse(req.body.date));

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req: Request, res: Response) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      return res.json(exercise);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req: Request, res: Response) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/update/:id", (req: Request, res: Response) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      if (!exercise) return;
      exercise.username = req.body.username as string;
      exercise.description = req.body.description as string;
      exercise.duration = Number(req.body.duration);
      exercise.date = new Date(Date.parse(req.body.date));

      exercise
        .save()
        .then(() => {
          res.json("Exercise updated!");
        })
        .catch((err) => res.status(400).json("Error: " + err));
    })

    .catch((err) => res.status(400).json("Error: " + err));
});

export { router };
