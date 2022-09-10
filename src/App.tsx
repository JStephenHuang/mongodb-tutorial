import { Routes, Route } from "react-router-dom";
import { APIProvider } from "./context/APIContext";

import CreateExercise from "./pages/create_exercise";
import ExerciseList from "./pages/exercise_list";
import ExercisePage from "./pages/exercise";
import MainPage from "./pages/main";
import UserPage from "./pages/user";
import CreateUser from "./pages/create_user";
import UserList from "./pages/user_list";

function App() {
  return (
    <APIProvider>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/user/create" element={<CreateUser />}></Route>
        <Route path="/user/list" element={<UserList />}></Route>
        <Route path="/exercise" element={<ExercisePage />}></Route>
        <Route path="/exercise/create" element={<CreateExercise />}></Route>
        <Route path="/exercise/list" element={<ExerciseList />}></Route>
      </Routes>
    </APIProvider>
  );
}

export default App;
