import {meses} from "../data/meses.js";


export function Viaje_Detail({viaje,navigate_to,delete_viaje}) {

    function rango_fechas(viaje){
        const inicio = new Date(viaje.fecha_inicio);
        const final = new Date(viaje.fecha_final);
        if(inicio.getMonth()===final.getMonth()){
            return `${inicio.getDay()} al ${final.getDate()} de ${meses[inicio.getMonth()]}`;
        }else{
            return `${inicio.getDay()} de ${meses[inicio.getMonth()]} al ${final.getDate()} de ${meses[final.getMonth()]}`
        }
    }

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