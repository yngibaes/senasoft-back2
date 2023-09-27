import { Link } from "react-router-dom";

function Navegar(){
    return(
        <div>
            <h1>
                Mi pagina
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>                    
                    <Link to="/new">Crear usuario</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navegar