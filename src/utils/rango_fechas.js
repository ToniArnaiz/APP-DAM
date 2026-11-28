import {meses} from "../data/meses.js";

export function rango_fechas(viaje){
    const inicio = new Date(viaje.fecha_inicio);
    const final = new Date(viaje.fecha_final);
    if(inicio.getMonth()===final.getMonth()){
        return `${inicio.getDate()} al ${final.getDate()} de ${meses[inicio.getMonth()]}`;
    }else{
        return `${inicio.getDate()} de ${meses[inicio.getMonth()]} al ${final.getDate()} de ${meses[final.getMonth()]}`
    }
}
