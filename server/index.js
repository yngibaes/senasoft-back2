
const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const database = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"presentar"
}) //Conexión a la base de datos, siempre va el password vacío, los primeros tres siempre iguales, y lo que cambia es el nombre de la base de datos.

app.post("/login",(req,res)=>{
    const email = req.body.email;
    console.log(email);
    const password = req.body.password;
//SELECT email, ?, CURRENT_TIMESTAMP() FROM signup WHERE email = ?
    database.query("INSERT INTO login(email, passw, f_ingreso) VALUES(?,?, CURRENT_TIMESTAMP())", [email, password],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }   
)});//Esto es la ruta el de registrarse.

app.post("/signup",(req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const password = req.body.password;
    const tele = req.body.tele;
    const pais = req.body.pais;

    database.query("SELECT email FROM signup WHERE email = ?", [email], (err, result) => {
        if (result.length > 0) {
            console.log("Ya existe el email");
        } else {
            database.query("INSERT INTO signup(nombre, apellido, email, passw, tele, pais) VALUES(?,?,?,?,?,?)", [nombre, apellido, email, password, tele, pais], (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send(result);
                }
              });
          }
        });
        });  
      
      app.listen(3001, () => {
        console.log("corre");
      });