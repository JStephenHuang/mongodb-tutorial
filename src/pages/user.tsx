import { Link } from "react-router-dom";

import Navbar from "../components/nav_bar";
import Button from "../components/button";

const UserPage = () => {
  return (
    <div className="w-screen h-screen text-gray-600">
      <Navbar section="user" />
      <div className="flex flex-col items-center font-semibold mt-5">
        <p className="text-[36px]">Welcome to the User Page!</p>
        <div className="flex justify-center mt-5">
          <Button link="/user/create">
            <p className="text-[20px] font-normal">Create a User</p>
            <p className="text-gray-500">
              Create a User, with a name to be monitor in our program.
            </p>
            <Link className="button-link" to="/user/create">
              Fill user credentials
            </Link>
          </Button>
          <Button link="/user/list">
            <p className="text-[20px] font-normal">View all Users</p>
            <p className="text-gray-500">
              View all users you have created and monitor them.
            </p>
            <Link className="button-link" to="/user/list">
              View user list
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
