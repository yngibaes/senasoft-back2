import {  useContext, useState } from "react";
import { getTareas,getBorrar,crea } from "../Api/Apirutas.js";
import { contexto } from "./contexto.js";

export const useTare=()=>{ //Creamos una constante para comprabar si el error esta
    const contexto=useContext(Mcontext)
    if(!contexto){
        throw new Error("Falla en el contexto")
    }
    return contexto
}
/*export const createTarea=async(taks)=>{
    try{
        const respuest= await crea (taks)
        console.log(respuest)
        
    }
    catch(error){
        console.error(error)
    }
}

export const Tcontext=({children})=>{
    const [taks,setTask]=useState([])
    async function Load(){
        const respuesta=await getTareas()
        setTask(respuesta.data)
    } 
    const handleDelete=async(Id)=>{
        try{
            const respuesta=await getBorrar(Id)
            setTask(taks.filter(t1=>t1.Id!==Id));
            console.log(respuesta)
        }
        catch(error){
            console.error(error);
        }
     
    }
     return <Mcontext.Provider value={{taks,Load,handleDelete,createTarea}}> 
        {children}
    </Mcontext.Provider>
}*/