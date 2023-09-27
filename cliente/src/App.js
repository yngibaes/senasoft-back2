import { Route, Routes } from "react-router-dom";
import Formu from "./pages/Form.js";
import { Tcontext } from "./Context/TareasContext.js";
function App() {
  return (
  <Tcontext>
  <Navegar/>
    <Routes>
      <Route path="/" element={<Formu/>} />
    </Routes>
  </Tcontext>
  );
}

export default App;
