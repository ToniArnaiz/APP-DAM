const opciones = ["Todos", "Pasados", "Futuros"];

export default function Home_Filtro({ filtro, onFiltroChange }) {
    return (
        <div role="group" aria-label="Filtrar viajes">
            {opciones.map(opcion => (
                <button
                    key={opcion}
                    type="button"
                    aria-pressed={filtro === opcion}
                    onClick={() => onFiltroChange(opcion)}
                >
                    {opcion}
                </button>
            ))}
        </div>
    );
}
