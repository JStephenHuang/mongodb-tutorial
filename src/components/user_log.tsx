import { FaTrash, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAPIs } from "../context/APIContext";

interface ExerciseLogProperties {
  key: number;
  id: string;
  name: string;
  password: string;
}

const UserLog = (props: ExerciseLogProperties) => {
  const APIContext = useAPIs();
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload();
  };

  const deleteUser = () => {
    APIContext.deleteUser(props.id).then(() => {
      console.log("User Successfully Deleted");
      refreshPage();
    });
  };

  return (
    <div className="w-[50%] h-[6rem] p-3 border rounded-md flex text-[20px] justify-between font-light">
      <div className="flex flex-col justify-between">
        <p className="font-medium">Username</p>
        <p>{props.name}</p>
      </div>
      <div className="flex flex-col justify-between text-[16px]">
        <button className="border-2 p-1 rounded-md hover:text-white hover:bg-gray-700">
          <FaEdit />
        </button>
        <button
          className="border-2 p-1 rounded-md text-red-500 hover:text-white hover:bg-red-500"
          onClick={deleteUser}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default UserLog;
