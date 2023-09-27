


import { useEffect } from "react"
import TareaTarjeta from "../components/task.js"
import {useTare} from "../Context/TareasContext.js"
function Tarea(){
    const {taks,Load} =useTare()
    useEffect(()=>{//Apenas se carge inicia esta parte 
       Load()
    })
    function renderMin(){
        if (taks.length=== 0)return <h1>No hay registros</h1>
     
      return taks.map((t1)=>(<TareaTarjeta t1={t1} key={t1.id}/>) )
            
      
    }
return(
    <div>
        <h1> Los registros son</h1>
        {renderMin()}
    </div>
)
}
export default Tarea