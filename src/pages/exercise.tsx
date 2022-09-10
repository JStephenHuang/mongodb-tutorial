import { Link } from "react-router-dom";
import Navbar from "../components/nav_bar";
import Button from "../components/button";

const ExercisePage = () => {
  return (
    <div className="w-screen h-screen text-gray-600">
      <Navbar section="exercise" />
      <div className="flex flex-col items-center font-semibold mt-5">
        <p className="text-[36px]">Welcome to the Exercise Page!</p>
        <div className="flex justify-center mt-5">
          <Button link="/exercise/create">
            <p className="text-[20px] font-normal">Create an Exercise</p>
            <p className="text-gray-500">
              Create an exercise, with your name, a description, the duration
              and the date.
            </p>
            <Link
              className="button-link"
              to="/exercise/create"
              target={"_blank"}
            >
              Fill exercise form
            </Link>
          </Button>
          <Button link="/exercise/list">
            <p className="text-[20px] font-normal">View Exercise Log</p>
            <p className="text-gray-500">
              View all exercises you have created and monitor them.
            </p>
            <Link
              className="button-link"
              to="/exercise/list"
              target="_blank"
              rel="noopener noreferrer"
            >
              View exercise list
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
