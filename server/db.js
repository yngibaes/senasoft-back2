import { createPool } from "mysql";

export const database = createPool({
    host:"localhost",
    port:3006,
    user:"root",
    password:"",
    database:"bbdd_manzanas"
})