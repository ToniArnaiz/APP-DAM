import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function Actividades() {
    const { id } = useParams();
    const { state } = useLocation();
    const [actividades, setActividades] = useState(() => state?.actividades ?? []);

    function agregarActividad(event) {
        event.preventDefault();
        const formulario = event.currentTarget;
        const datos = new FormData(formulario);
        const nombre = datos.get("nombre").trim();
        if (!nombre) return;

        const fecha = datos.get("fecha");
        const actividad = {
            nombre,
            fecha,
            hora: `${fecha}T${datos.get("hora")}:00`,
            descripcion: datos.get("descripcion").trim(),
        };

        setActividades(lista => {
            const ultimoId = lista.reduce((maximo, item) => Math.max(maximo, Number(item.id) || 0), 0);
            return [...lista, { ...actividad, id: ultimoId + 1 }];
        });
        formulario.reset();
    }

    return (
        <>
            <header>
                <Link to={`/viaje/${id}`} state={{ actividades }}>Tornar al viatge</Link>
                <h1>{state?.destino ? `Actividades - ${state.destino}` : "Actividades"}</h1>
            </header>
            <main>
                {actividades.length ? (
                    <ul>
                        {actividades.map(actividad => (
                            <li key={actividad.id}>
                                {actividad.nombre}
                                <button
                                    type="button"
                                    aria-label={`Eliminar ${actividad.nombre}`}
                                    onClick={() => setActividades(lista => lista.filter(item => item.id !== actividad.id))}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : <p>Aquest viatge encara no té activitats.</p>}
                <form className="form-add-viaje" onSubmit={agregarActividad}>
                    <label className="form-input">Nom<input name="nombre" required /></label>
                    <label className="form-input">Data<input name="fecha" type="date" required /></label>
                    <label className="form-input">Hora<input name="hora" type="time" required /></label>
                    <label className="form-input">Descripció<textarea name="descripcion" /></label>
                    <button type="submit">Afegir activitat</button>
                </form>
            </main>
        </>
    );
}
