import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAPIs } from "../context/APIContext";

import ExercisesBubbles from "../components/bubbles";
import Button from "../components/button";
import Navbar from "../components/nav_bar";
import SectionContainer from "../components/section_container";

const CreateExercise = () => {
  const APIContext = useAPIs();
  const navigate = useNavigate();
  const [users, setUsers] = useState<Array<{ id: string; username: string }>>();
  const [selectedExercise, setSelectedExercise] = useState<string>("");
  const usernameSelectRef = useRef<HTMLSelectElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const durationInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const suggestedExercises: string[] = [
    "Run",
    "Badminton",
    "Bike",
    "Basketball",
    "Tennis",
    "Soccer",
    "Gym",
  ];

  const exercisesBubbles: JSX.Element[] = suggestedExercises.map(
    (exercise, key) => {
      return (
        <ExercisesBubbles
          selectedExercise={selectedExercise}
          setSelectedExercise={setSelectedExercise}
          exercise={exercise}
        />
      );
    }
  );

  useEffect(() => {
    APIContext.getUsers().then((value) => {
      setUsers(value.data);
    });
  }, []);

  const createExercise = () => {
    if (
      usernameSelectRef.current &&
      descriptionInputRef.current &&
      durationInputRef.current &&
      dateInputRef.current
    ) {
      const username: string = usernameSelectRef.current.value;
      const duration: number = Number(durationInputRef.current.value);
      const date: Date = new Date(dateInputRef.current.value);
      console.log(date);
      let description;
      if (selectedExercise !== "") {
        description = selectedExercise;
      } else {
        description = descriptionInputRef.current.value;
      }

      if (
        username !== "" &&
        duration > 0 &&
        date.toDateString() !== "" &&
        description !== ""
      ) {
        APIContext.createExercise(username, description, duration, date)
          .then(() => {
            console.log("Created Exercise Successfully");
            navigate("/exercise/list");
          })
          .catch((err) => console.log(err));
      } else {
        console.log("Invalid Information");
      }
    }
  };

  console.log(users);

  return (
    <div className="w-screen h-screen text-gray-600">
      <Navbar section="exercise" />
      <div className="w-full flex flex-col items-center mt-5 pb-10">
        <p className="text-[36px]">Create an Exercise</p>
        <div className="w-[30%] flex flex-col justify-center mt-5 text-[20px]">
          <SectionContainer>
            <p>Username</p>
            <select
              className="border-2 rounded-md w-full mt-2 p-1"
              ref={usernameSelectRef}
            >
              {users?.map((user, key) => {
                return (
                  <option key={key} value={user.username}>
                    {user.username}
                  </option>
                );
              })}
            </select>
          </SectionContainer>
          <SectionContainer>
            <p>Description</p>
            <div className="flex overflow-x-auto mt-2 p-2 border rounded-lg">
              {exercisesBubbles}
            </div>
          </SectionContainer>
          <SectionContainer>
            <p>Other</p>
            <textarea
              className="rounded-md border-2 w-full mt-2 p-2"
              ref={descriptionInputRef}
              rows={2}
              onFocus={() => setSelectedExercise("")}
            ></textarea>
          </SectionContainer>

          <SectionContainer>
            <p>Duration (min)</p>
            <input
              className="border-2 rounded-md w-full mt-2 p-1"
              ref={durationInputRef}
              type="number"
              defaultValue={0}
            />
          </SectionContainer>
          <SectionContainer>
            <p>Date</p>
            <input
              className="border-2 rounded-md w-full mt-2 p-1"
              ref={dateInputRef}
              type="date"
              defaultValue="yyyy/mm/dd"
            />
          </SectionContainer>
          <SectionContainer>
            <button
              className="bg-blue-600 rounded-lg text-white text-[16px] w-full p-2 mt-3"
              onClick={createExercise}
            >
              Create Exercise
            </button>
          </SectionContainer>
        </div>
      </div>
    </div>
  );
};

export default CreateExercise;
