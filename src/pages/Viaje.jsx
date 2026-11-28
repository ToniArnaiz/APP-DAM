import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Viaje_Header from "../components/Viaje_Header.jsx";
import Viaje_Button from "../components/Viaje_Button.jsx";
import Viaje_Resum from "../components/Viaje_Resum.jsx";
import { fetch_viaje_by_id } from "../utils/api_fetch.js";

export function Viaje() {
    const { id } = useParams();
    const { state } = useLocation();
    const [viaje, setViaje] = useState();
    const actividades = state?.actividades ?? viaje?.actividades ?? [];

    useEffect(() => {
        let activo = true;

        fetch_viaje_by_id(id).then(
            resultado => {
                if (activo) setViaje(resultado);
            },
            () => {
                if (activo) setViaje(null);
            },
        );

        return () => {
            activo = false;
        };
    }, [id]);

    return (
        <>
            <Viaje_Header
                titulo={viaje?.titulo ?? "Viatge"}
                fecha_inicio={viaje?.fecha_inicio}
                fecha_final={viaje?.fecha_final}
            />
            <main>
                {viaje === undefined && <p>Carregant el viatge…</p>}
                {viaje === null && <p>No s'ha pogut carregar el viatge.</p>}
                {viaje && (
                    <>
                        <nav aria-label="Seccions del viatge">
                            <Viaje_Button
                                titulo="Activitats"
                                url="actividades"
                                state={{ actividades, destino: viaje.destino }}
                            />
                            <Viaje_Button titulo="Itinerari" url="itinerario" />
                            <Viaje_Button titulo="Despeses" url="gastos" />
                        </nav>
                        <Viaje_Resum
                            actividades={actividades}
                            gastos={viaje.gastos}
                            presupuesto={viaje.presupuesto}
                        />
                    </>
                )}
            </main>
        </>
    );
}
