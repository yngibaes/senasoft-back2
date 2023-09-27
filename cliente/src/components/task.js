import { useNavigate } from "react-router-dom"
import { useTare } from "../Context/TareasContext"

function TareaTarjeta({t1}){
const {handleDelete}=useTare()
const navigate=useNavigate()
    
return(
        <div>
        <h2>{t1.Nombre}</h2>
        <p>{t1.Identificacion}</p>
        <p>{t1.Rol}</p>
        <button onClick={()=>handleDelete(t1.Id)}>Borrar</button>
        <button onClick={()=>navigate(`/edit/${t1.Id}`)}>Editar</button>
        </div>
    )
}
export default TareaTarjeta