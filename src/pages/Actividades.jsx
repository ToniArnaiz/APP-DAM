import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Actividades_Card from "../components/Actividades_Card.jsx";
import Actividades_Form from "../components/Actividades_Form.jsx";

export default function Actividades() {
    const { id } = useParams();
    const { state } = useLocation();
    const [actividades, setActividades] = useState(() => state?.actividades);
    const [is_form_open, setIsFormOpen] = useState(false);

    function agregarActividad(actividad) {
        setActividades(lista => {
            const actuales = lista ?? [];
            const ultimoId = actuales.reduce((maximo, item) => Math.max(maximo, Number(item.id) || 0), 0);
            return [...actuales, { ...actividad, id: ultimoId + 1 }];
        });
        setIsFormOpen(false);
    }

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
                <button type="button" className="btn-add-travel" onClick={() => setIsFormOpen(true)}>
                    Nova activitat
                </button>
                {actividades?.length ? actividades.map(actividad => (
                    <Actividades_Card
                        key={actividad.id}
                        actividad={actividad}
                        eliminarActividad={eliminarActividad}
                    />
                )) : <p>Aquest viatge encara no té activitats.</p>}
            </main>
            {is_form_open && (
                <Actividades_Form
                    agregarActividad={agregarActividad}
                    cerrarFormulario={() => setIsFormOpen(false)}
                />
            )}
        </>
    );
}
