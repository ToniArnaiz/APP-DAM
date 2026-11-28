import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Actividades_Card from "../components/Actividades_Card.jsx";

export default function Actividades() {
    const { id } = useParams();
    const { state } = useLocation();
    const [actividades, setActividades] = useState(() => state?.actividades);

    function eliminarActividad(actividadId) {
        setActividades(lista => lista.filter(actividad => actividad.id !== actividadId));
    }

    return (
        <>
            <header>
                <Link to={`/viaje/${id}`} state={{ actividades }}>Tornar al viatge</Link>
                <h1>{state?.destino ? `Actividades - ${state.destino}` : "Actividades"}</h1>
            </header>
            <main>
                {actividades?.length ? actividades.map(actividad => (
                    <Actividades_Card
                        key={actividad.id}
                        actividad={actividad}
                        eliminarActividad={eliminarActividad}
                    />
                )) : <p>Aquest viatge encara no té activitats.</p>}
            </main>
        </>
    );
}
