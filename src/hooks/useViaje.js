import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetch_viaje_by_id } from "../utils/api_fetch.js";

export default function useViaje() {
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

    return resultado?.id === id ? resultado : null;
}
