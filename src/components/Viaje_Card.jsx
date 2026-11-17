
import { rango_fechas } from "../utils/rango_fechas.js";
import styles from "./Viaje_Card.module.css";

export function Viaje_Card({ viaje, navigate_to, delete_viaje }) {

    return (
        <>
            <button
                type="button"
                onClick={navigate_to}
                className={styles.btnNavigate}
            >
                {viaje.titulo}
            </button>

            <div className={styles.containerInfoViaje}>

                <div className={styles.infoDates}>
                    {rango_fechas(viaje)}
                </div>

                <button
                    type="button"
                    onClick={delete_viaje}
                    className={styles.btnDeleteViaje}
                >
                    X
                </button>

            </div>
        </>
    );
}
