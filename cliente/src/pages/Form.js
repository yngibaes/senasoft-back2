import { Form,Formik } from "formik";
import { useTare } from "../Context/TareasContext";
function Formu(){
const {createTarea}=useTare() //La variable createTarea es defina y asignada del valor 
    return(
    <div>
       <Formik
            initialValues={{
            Nombre:"",
            Identificacion:"",
            Rol:""
       }}
       onSubmit={async (values,actions)=>{
        console.log(values)
        createTarea(values)
        actions.resetForm()
       }}
       >
       {({handleChange,handleSubmit,values,isSubmitting})=>(
         <Form onSubmit={handleSubmit}>
         <label >Nombre
         <input required type="text" name="nombre" onChange={handleChange} value={values.Nombre}/></label>

         <label>Apellido
         <input type="text" name="apellido" onChange={handleChange} value={values.Identificacion}/></label>

         <label>Tipo de Documento
         <input type="text" name="tipo_documento" onChange={handleChange} value={values.Identificacion}/></label>

         <label>Documento
         <input type="text" name="documento" onChange={handleChange} value={values.Identificacion}/></label>

         <label>Email
         <input type="text" name="email" onChange={handleChange} value={values.Identificacion}/></label>

         <label>Contraseña
         <input type="text" name="contraseña" onChange={handleChange} value={values.Identificacion}/></label>

         <label>Ciudad
         <input type="text" name="ciudad" onChange={handleChange} value={values.Identificacion}/></label>

         <label>Dirección
         <input type="text" name="dirrecion" onChange={handleChange} value={values.Identificacion}/></label>

         <label>Ocupación
         <input type="text" name="ocupacion" onChange={handleChange} value={values.Identificacion}/></label>

         <label>Telefono
         <input type="text" name="telefono" onChange={handleChange} value={values.Identificacion}/></label>

         <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando...": "Enviar"}</button>
     </Form>
       )}
       </Formik>
    </div> 
    )
}
export default Formu