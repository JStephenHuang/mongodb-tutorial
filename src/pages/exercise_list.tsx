import { useEffect, useState } from "react";
import { useAPIs } from "../context/APIContext";

import ExerciseLog from "../components/exercise_log";
import Button from "../components/button";
import Navbar from "../components/nav_bar";

const ExerciseList = () => {
  const APIContext = useAPIs();
  const [exercise, setExercise] = useState<
    Array<{
      _id: string;
      username: string;
      description: string;
      duration: number;
      date: string;
    }>
  >([]);

  useEffect(() => {
    APIContext.getExercise().then((value) => {
      setExercise(value.data);
    });
  }, []);

  const reverseArr = (
    input: {
      _id: string;
      username: string;
      description: string;
      duration: number;
      date: string;
    }[]
  ) => {
    var ret = new Array();
    for (var i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  };

  const frontEndExercise: JSX.Element[] = reverseArr(exercise).map(
    (exercise, key) => {
      return (
        <ExerciseLog
          key={key}
          id={exercise._id}
          name={exercise.username}
          description={exercise.description}
          duration={exercise.duration}
          date={exercise.date}
        ></ExerciseLog>
      );
    }
  );

  return (
    <div className="w-screen h-screen text-gray-600">
      <Navbar section="exercise" />
      <div className="flex flex-col items-center font-semibold mt-5 h-[80%]">
        <p className="text-[36px]">Check all Exercises</p>
        <div className="flex flex-col mt-5 w-[90%] h-[90%] rounded-md items-center border p-5 overflow-y-auto">
          {frontEndExercise.length === 0 ? (
            <p className="font-light text-[20px]">Exercise List Empty</p>
          ) : (
            frontEndExercise
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
