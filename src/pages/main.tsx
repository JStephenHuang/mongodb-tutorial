import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useAPIs } from "../context/APIContext";
import Navbar from "../components/nav_bar";
import Button from "../components/button";
import { fromJSON } from "postcss";

const MainPage = () => {
  const APIContext = useAPIs();
  const [data, setData] = useState<
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
      setData(value.data);
    });

    setData(data.slice().sort((a: any, b: any) => b.date - a.date));
  }, []);

  return (
    <div className="w-screen h-screen text-gray-600">
      <Navbar section="" />
      <div className="flex flex-col items-center font-semibold mt-5">
        <p className="text-[36px]">Welcome to the ExerciseTracker!</p>
        <div className="w-full flex justify-center mt-5">
          <LineChart
            width={1000}
            height={500}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line
              type="monotone"
              dataKey="duration"
              stroke="#8884d8"
              yAxisId={0}
            />
            <Line type="monotone" dataKey="date" stroke="#000000" yAxisId={1} />
            <Line
              type="monotone"
              dataKey="username"
              stroke="#000000"
              yAxisId={1}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
