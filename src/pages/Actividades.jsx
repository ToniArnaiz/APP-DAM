import { Link, useLocation, useParams } from "react-router-dom";

export default function Actividades() {
    const { id } = useParams();
    const { state } = useLocation();
    const actividades = state?.actividades;
    console.log(actividades);
    return (
        <header>
            <Link to={`/viaje/${id}`} >Tornar al viatge</Link>
            <h1>{state?.destino ? `Itinerari - ${state.destino}` : "Itinerari"}</h1>
        </header>
    );
}
