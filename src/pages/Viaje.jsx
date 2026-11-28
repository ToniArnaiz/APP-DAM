import Viaje_Header from "../components/Viaje_Header.jsx";
import Viaje_Button from "../components/Viaje_Button.jsx";
import Viaje_Resum from "../components/Viaje_Resum.jsx";
import useViaje from "../hooks/useViaje.js";

export function Viaje() {
    const detalle = useViaje();
    const viaje = detalle?.viaje;

    return (
        <>
            <Viaje_Header
                titulo={viaje?.titulo ?? "Viatge"}
                fecha_inicio={viaje?.fecha_inicio}
                fecha_final={viaje?.fecha_final}
            />
            <main>
                {!detalle && <p>Carregant el viatge…</p>}
                {detalle?.error && <p>No s'ha pogut carregar el viatge.</p>}
                {viaje && (
                    <>
                        <nav aria-label="Seccions del viatge">
                            <Viaje_Button
                                titulo="Activitats"
                                url="actividades"
                                state={{ actividades: viaje.actividades, destino: viaje.destino }}
                            />
                            <Viaje_Button titulo="Itinerari" url="itinerario" />
                            <Viaje_Button titulo="Despeses" url="gastos" />
                        </nav>
                        <Viaje_Resum
                            actividades={viaje.actividades}
                            gastos={viaje.gastos}
                            presupuesto={viaje.presupuesto}
                        />
                    </>
                )}
            </main>
        </>
    );
}
