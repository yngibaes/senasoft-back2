import express from "express";
app=express();



/*app.post("/formulario",(req,res)=>{
    const {nombre, apellido, tipo_documento, documento, email, contraseña,ciudad, direccion, ocupacion} = req.body

    database.query("SELECT email_mujer FROM mujeres WHERE email = ?", [email], (err, result) => {
        if (result.length > 0) {
            console.log("Ya existe el email");
        } else {
            database.query("INSERT INTO mujeres(idDoc, tipo_documento, nom_mujer, apell_mujer, tel_mujer, email_mujer, passw_mujer, ciu_mujer, dir_mujer, ocu_mujer) VALUES (?,?,?,?,?,?,?,?,?,?)",[documento, tipo_documento, nombre, apellido,  email, contraseña, ciudad, direccion, ocupacion], (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send(result);
                }
              });
          }
        });
        });  */

        
app.post("/formulario",(req,res)=>{
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
)});