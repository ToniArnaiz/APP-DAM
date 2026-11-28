import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Viaje_Header from "../components/Viaje_Header.jsx";
import Viaje_Button from "../components/Viaje_Button.jsx";
import Viaje_Resum from "../components/Viaje_Resum.jsx";
import { fetch_viaje_by_id } from "../utils/api_fetch.js";

export function Viaje() {
    const { id } = useParams();
    const [resultado, setResultado] = useState(null);

    useEffect(() => {
        let activo = true;

        fetch_viaje_by_id(id).then(
            viaje => {
                if (activo) setResultado({ id, viaje });
            },
            () => {
                if (activo) setResultado({ id, error: true });
            },
        );

        return () => {
            activo = false;
        };
    }, [id]);

    const detalle = resultado?.id === id ? resultado : null;
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
                {viaje && <Viaje_Button />}
                {viaje && <Viaje_Resum />}
            </main>
        </>
    );
}
