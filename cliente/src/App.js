import { Route, Routes } from "react-router-dom"; //Importamos las rutero
import Formulario from "./pages/formulario.js"; //Importamos la page de Formulario para rutarla
import { Context } from "./contexto/contexto.js"; //Importamos el contexto para darselo a toda la App

function App() {
  return (
    <Context>
        <Routes>
          <Route path="/" element={Formulario}/>
        </Routes>
    </Context>
  );
}
export default App