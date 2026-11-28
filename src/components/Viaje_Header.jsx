import { Link } from "react-router-dom";
import { rango_fechas } from "../utils/rango_fechas.js";

export default function Viaje_Header({ titulo, fecha_inicio, fecha_final }) {
    return (
        <header>
            <Link to="/" >Tornar a l'inici</Link>
            <h1>{titulo}</h1>
            {fecha_inicio && fecha_final && <p>{rango_fechas({ fecha_inicio, fecha_final })}</p>}
        </header>
    );
}
