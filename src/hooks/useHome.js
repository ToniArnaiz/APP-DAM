import { useEffect, useState } from "react";
import { fetch_viajes_detail } from "../utils/api_fetch.js";

export default function useHome() {
    const [viajes, setViajes] = useState([]);
    const [filtro, setFiltro] = useState("Todos");
    const [isViaje_Form_open, setIsViaje_FormOpen] = useState(false);


    useEffect(() => {

        async function cargarViajes() {
            try {
                const data = await fetch_viajes_detail();
                setViajes(data);
            } catch (e) {
                console.error(e);
            }
        }

        cargarViajes();

    }, []);

    function add_viaje(new_viaje) {
        setViajes(viajes_actuals => {
            const siguienteId = viajes_actuals.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
            return [...viajes_actuals, { ...new_viaje, id: siguienteId }];
        });
        setIsViaje_FormOpen(false);
    }

    function deleteViaje(id) {
        const nuevos_viajes = viajes.filter(viaje => viaje.id !== id);
        setViajes(nuevos_viajes);
    }

    function navigate_to(id) {
        console.log(id);
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const viajesFiltrados = (viajes ?? []).filter(viaje => {
        if (filtro === "Todos") return true;
        if (!viaje.fecha_final) return false;

        const fechaFinal = new Date(`${viaje.fecha_final.slice(0, 10)}T00:00:00`);
        return filtro === "Futuros" ? fechaFinal > hoy : fechaFinal <= hoy;
    });

    return {
        viajesFiltrados,
        filtro,
        setFiltro,
        isViaje_Form_open,
        setIsViaje_FormOpen,
        add_viaje,
        deleteViaje,
        navigate_to,
    };
}
