import { Form, Formik } from "formik"; //Llamamos la API Formik, para hacer un formulario sin props y hacerlo más dinámico con el código.
import { useTare } from "../contexto/TareasContext"; //

function Formu(){ //Le damos nombre a la variable
const {createTarea}=useTare() //La variable createTarea es defina y asignada del valor 
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
            validate={(values) => {
                const errors = {};
                if (!values.fullname) {
                  errors.fullname = "Required";
                }
     
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "Required";
                }
                return errors;
              }}
            >
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