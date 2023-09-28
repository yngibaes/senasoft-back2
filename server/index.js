
const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const database = mysql.createConnection({
    host:"localhost",
    port:3006,
    user:"root",
    password:"",
    database:"bbdd_manzanas"
}) //Conexión a la base de datos, siempre va el password vacío, los primeros tres siempre iguales, y lo que cambia es el nombre de la base de datos.

app.post("/login",(req,res)=>{
    const email = req.body.email;
    console.log(email);
    const password = req.body.password;
//SELECT email, ?, CURRENT_TIMESTAMP() FROM signup WHERE email = ?
    database.query("Select email_mujer from mujeres WHERE email_mujer = ?"), [email], (err,result)=>{
      if (result.length > 0){
        window.alert('Este email ya existe.');
      }
    else{
    database.query("INSERT INTO mujeres(email_mujer, passw_mujer) VALUES(?,?)", [email, password],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })};  
  }});//Esto es la ruta el de registrarse.

app.post("/signup",(req,res)=>{
  const {nombre, apellido, tipo_documento, documento, email, contraseña,ciudad, direccion, ocupacion} = req.body

    database.query("SELECT email_mujer FROM mujeres WHERE email_mujer = ?", [email], (err, result) => {
        if (result.length > 0) {
            console.log("Ya existe el email");
        } else {
          database.query('INSERT INTO mujeres(idDoc, tipo_documento, nom_mujer, apell_mujer, tel_mujer, email_mujer, passw_mujer, ciu_mujer, dir_mujer, ocu_mujer) VALUES (?,?,?,?,?,?,?,?,?,?)'),[documento, tipo_documento, nombre, apellido,  email, contraseña, ciudad, direccion, ocupacion],(err,result)=>{
                if (err) {
                  console.log(err);
                } else {
                  res.send(result);
                }
              };
            });
          });
      
      app.listen(3001, () => {
        console.log("corre");
      });