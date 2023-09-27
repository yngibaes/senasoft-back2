import { Router } from "express";
import { postSignup } from "../controlador/controlador.js";

const router=Router();

router.post("/formulario",postSignup);//crea tarea

export default router