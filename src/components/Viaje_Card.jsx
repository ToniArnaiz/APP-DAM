import {rango_fechas} from "../utils/rango_fechas.js";


export function Viaje_Card({viaje,navigate_to,delete_viaje}) {



    return (
        <>
            <button
                type="button"
                onClick={ navigate_to }
                className="btn-navigate"
            >
                {viaje.titulo}
            </button>

            <div className="container-info-viaje">

                <div className={"info-dates"}>{rango_fechas(viaje)}</div>

                <button
                    type="button"
                    onClick={ delete_viaje }
                    className="btn-delete-viaje"
                >
                    X
                </button>
            </div>
        </>
    )
}