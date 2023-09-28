import { Route, Routes } from "react-router-dom"; //Importamos las rutero
import LogIn from "./components/login.js";
import Signup from "./components/signup.js";

function App() {
  return (
        <Routes>
          <Route path="/login" Component={LogIn}/>
          <Route path="/signup" Component={Signup}/>
        </Routes>
  );
}
export default App