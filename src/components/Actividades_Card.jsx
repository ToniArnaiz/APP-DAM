const formatoPrecio = new Intl.NumberFormat("ca-ES", { style: "currency", currency: "EUR" });

export default function Actividades_Card({ actividad, eliminarActividad }) {
    const { id, nombre, fecha, hora, descripcion, precio } = actividad;
    const horaVisible = hora?.split("T").at(-1)?.slice(0, 5);

    return (
        <article>
            <h2>{nombre}</h2>
            {(fecha || horaVisible) && (
                <p>
                    {fecha && <time dateTime={fecha}>{fecha}</time>}
                    {fecha && horaVisible && " · "}
                    {horaVisible && <time dateTime={horaVisible}>{horaVisible}</time>}
                </p>
            )}
            {descripcion && <p>{descripcion}</p>}
            {precio != null && <p>{formatoPrecio.format(precio)}</p>}
            <button type="button" onClick={() => eliminarActividad(id)} aria-label={`Eliminar ${nombre}`}>
                Eliminar
            </button>
        </article>
    );
}
