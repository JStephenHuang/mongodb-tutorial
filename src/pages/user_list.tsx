import { useEffect, useState } from "react";
import { useAPIs } from "../context/APIContext";

import UserLog from "../components/user_log";
import Navbar from "../components/nav_bar";

const UserList = () => {
  const APIContext = useAPIs();
  const [user, setUser] = useState<
    Array<{
      _id: string;
      username: string;
      password: string;
    }>
  >([]);

  useEffect(() => {
    APIContext.getUsers().then((value) => {
      setUser(value.data);
    });
  }, []);

  const frontEndUser: JSX.Element[] = user.map((user, key) => {
    return (
      <UserLog
        key={key}
        id={user._id}
        name={user.username}
        password={user.password}
      />
    );
  });

  return (
    <div className="w-screen h-screen text-gray-600">
      <Navbar section="user" />
      <div className="flex flex-col items-center font-semibold mt-5 h-[80%]">
        <p className="text-[36px]">Check all Users</p>
        <div className="flex flex-col mt-5 w-[90%] h-[90%] rounded-md items-center border p-5 overflow-y-auto">
          {frontEndUser.length === 0 ? (
            <p className="font-light text-[20px]">User List Empty</p>
          ) : (
            frontEndUser
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
