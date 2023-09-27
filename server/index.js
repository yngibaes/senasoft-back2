import express  from "express";
import cors from 'cors';
import router from "./rutas/rutas.js"

const app=express();
app.use(express.json())
app.use(cors());
app.use(router)
app.listen(8000)
console.log("Escuchando en el puerto 8000");