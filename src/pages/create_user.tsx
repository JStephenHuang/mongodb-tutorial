import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAPIs } from "../context/APIContext";

import ExercisesBubbles from "../components/bubbles";
import Navbar from "../components/nav_bar";
import SectionContainer from "../components/section_container";

const CreateUser = () => {
  const APIContext = useAPIs();
  const navigate = useNavigate();
  const [users, setUsers] = useState<Array<{ id: string; username: string }>>();
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    APIContext.getUsers().then((value) => {
      setUsers(value.data);
    });
  }, []);

  const createUser = () => {
    if (usernameInputRef.current && passwordInputRef.current) {
      const username: string = usernameInputRef.current.value;
      const password: string = passwordInputRef.current.value;

      APIContext.createUser(username, password)
        .then(() => {
          console.log("Created User Successfully");
          navigate("/user/list");
        })
        .catch((err) => console.log(err));
    }
  };

  console.log(users);

  return (
    <div className="w-screen h-screen text-gray-600">
      <Navbar section="user" />
      <div className="w-full flex flex-col items-center mt-5 pb-10">
        <p className="text-[36px]">Create a User</p>
        <div className="w-[30%] flex flex-col justify-center mt-5 text-[20px]">
          <SectionContainer>
            <p>Username</p>

            <input
              className="border-2 rounded-md w-full mt-2 p-1"
              ref={usernameInputRef}
            />
          </SectionContainer>
          <SectionContainer>
            <p>Password</p>

            <input
              className="border-2 rounded-md w-full mt-2 p-1"
              type="password"
              ref={passwordInputRef}
            />
          </SectionContainer>
          <SectionContainer>
            <button
              className="bg-blue-600 rounded-lg text-white text-[16px] w-full p-2 mt-3"
              onClick={createUser}
            >
              Create User
            </button>
          </SectionContainer>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
