import { Route, Routes } from "react-router-dom"; //Importamos las rutero
import Formulario from "./pages/page_formulario.js"; //Importamos la page de Formulario para rutarla

function App() {
  return (
        <Routes>
          <Route path="/formulario" Component={Formulario}/>
        </Routes>
  );
}
export default App