import {rango_fechas} from "../utils/rango_fechas.js";


export function Viaje_Detail({viaje,navigate_to,delete_viaje}) {



    return (
        <>
            <button
                onClick={ navigate_to }
            >
                {viaje.titulo}
            </button>
            <div>
                <p>{rango_fechas(viaje)}</p>

                <button
                    onClick={ delete_viaje }
                >
                    X
                </button>
            </div>
        </>
    )
}