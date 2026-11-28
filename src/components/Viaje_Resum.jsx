import { useEffect, useState } from "react";

const  formatoImporte = new Intl.NumberFormat("ca-ES", { style: "currency", currency: "EUR" });
const formatoFecha = new Intl.DateTimeFormat("ca-ES", { dateStyle: "medium", timeStyle: "short" });

export default function Viaje_Resum({ actividades, gastos, presupuesto }) {
    const [ahora, setAhora] = useState(() => Date.now());

    useEffect(() => {
        const intervalo = setInterval(() => setAhora(Date.now()), 60_000);
        return () => clearInterval(intervalo);
    }, []);

    let proximaActividad;
    let horaProxima = Infinity;

    for (const actividad of actividades ?? []) {
        if (!actividad.hora) continue;
        const hora = actividad.hora.includes("T")
            ? actividad.hora
            : `${actividad.fecha}T${actividad.hora}`;
        const inicio = Date.parse(hora);

        if (inicio >= ahora && inicio < horaProxima) {
            proximaActividad = actividad;
            horaProxima = inicio;
        }
    }

    const totalGastado = (gastos ?? []).reduce((total, gasto) => total + Number(gasto.precio), 0);

    return (
        <section>
            <h2>Resum</h2>
            <h3>Pròxima activitat</h3>
            {proximaActividad ? (
                <p>
                    {proximaActividad.nombre}{" · "}
                    <time dateTime={new Date(horaProxima).toISOString()}>{formatoFecha.format(horaProxima)}</time>
                </p>
            ) : <p>No hi ha cap activitat pendent.</p>}

            <h3>Despeses i pressupost</h3>
            <p> Gastat {formatoImporte.format(totalGastado)} de {formatoImporte.format(presupuesto)}</p>


        </section>
    );
}
