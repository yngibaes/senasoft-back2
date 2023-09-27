import { Form, Formik } from "formik"; //Llamamos la API Formik, para hacer un formulario sin props y hacerlo más dinámico con el código.
import { Confirmacion } from "../contexto/tareascontexto"; //

function Formu(){ //Le damos nombre a la variable
const {datoRegistrarse}=Confirmacion() //La variable createTarea es defina y asignada del valor 
    return(
    <div>
       <Formik //Aquí ya se ponen los estados iniciales, aquí se ponen 
          initialValues={{
          nombre:"",
          apellido:"",
          tipo_documento:"",
          documento:"",
          email:"",
          contraseña:"",
          ciudad:"",
          direccion:"",
          ocupacion:""}}
            
          onSubmit={async (values,actions)=>{ //Este función enviará los datos al darle click al boton
            console.log(values)
            datoRegistrarse(values)
            alert("Estos son tu datos", values)
            actions.resetForm() //Resetea la información del form cuando se envíen los datos
          }}
        >

          {({handleChange,handleSubmit,values,isSubmitting})=>( //handleChange actualiza el value, en este caso se toma del name. handleSummit es una ayuda a la función onSubmit en el caso de validar la data, actualizando los estados de los input. Values ayuda a darle valor a los input. isSubmitting es el estado del formulario, si es verdadero lo envía, si no error.
            <Form onSubmit={handleSubmit}>
              <label >Nombre
              <input required type="text" name="nombre" onChange={handleChange} value={values.nombre}/></label>

              <label>Apellido
              <input type="text" name="apellido" onChange={handleChange} value={values.apellido}/></label>


              <label>Tipo de Documento
              <select name="tipo_documento" onChange={handleChange} value={values.tipo_documento}>
                  <option value="Cédula de Ciudadanía" onChange={handleChange} selected>CC</option>
                  <option value="Documento de identidad" onChange={handleChange}>TI</option>
                  <option value="Cédula de extranjería" onChange={handleChange}>CE</option>
                  <option value="Pasaporte" onChange={handleChange}>PB</option>
              </select></label>

              <label>Documento
              <input type="text" name="documento" onChange={handleChange} value={values.documento}/></label>

              <label>Email
              <input type="email" name="email" onChange={handleChange} value={values.email}/></label>

              <label>Contraseña
              <input type="password" name="contraseña" onChange={handleChange} value={values.contraseña}/></label>

              <label>Ciudad
              <input type="text" name="ciudad" onChange={handleChange} value={values.ciudad}/></label>

              <label>Dirección
              <input type="text" name="dirrecion" onChange={handleChange} value={values.dirrecion}/></label>

              <label>Ocupación
              <input type="text" name="ocupacion" onChange={handleChange} value={values.ocupacion}/></label>

              <label>Telefono
              <input type="text" name="telefono" onChange={handleChange} value={values.telefono}/></label>

              <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando...": "Enviar"}</button> {/*El "disbaled" deshabilita condicionalmente el botón el valor de la variable isSubmitting. Ya en "isSubmmit" si es verdadero, el botón se desactivará, impidiendo más envíos hasta que el proceso de envío haya finalizado. Va a mostrar "Enviando..." indicando que el envío del formulario esta en curso, cuando ya este listo para enviar mostrará "Enviar".*/}
            </Form>
          )}
        </Formik>
    </div> 
  )
}
export default Formu