import { rango_fechas } from "../utils/rango_fechas.js";

export function Home_Card({ viaje, navigate_to, delete_viaje }) {
    return (
        <article className="travel-card" data-destination={viaje.destino}>
            <button
                type="button"
                onClick={navigate_to}
                className="travel-card__link"
                aria-label={`Veure el viatge: ${viaje.titulo}`}
            >
                <span className="travel-card__image">
                    <span className="travel-card__photo-caption" aria-hidden="true">{viaje.destino}</span>
                </span>
                <span className="travel-card__details">
                    <span className="travel-card__title">{viaje.titulo}</span>
                    <span className="travel-card__dates">{rango_fechas(viaje)}</span>
                </span>
            </button>
            <button
                type="button"
                onClick={delete_viaje}
                className="travel-card__delete"
                aria-label={`Eliminar el viatge ${viaje.titulo}`}
                title="Eliminar viatge"
            >
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v6m4-6v6"/></svg>
            </button>
        </article>
    );
}
