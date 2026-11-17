
import { useState } from "react";
import styles from "./Viaje_Form.module.css";

function Viaje_Form({ add_viaje, setIsViaje_FormOpen }) {

    const [viaje, setViaje] = useState({
        id: -1,
        destino: "",
        titulo: "",
        presupuesto: 0,
        fecha_inicio: "",
        fecha_final: "",
    });

    return (
        <>
            <form className={styles.formAddViaje}>
                <label className={`${styles.formInput} ${styles.inputDestino}`}>
                    Destino
                    <input
                        value={viaje.destino}
                        onChange={e =>
                            setViaje({ ...viaje, destino: e.target.value })}
                    />
                </label>

                <label className={`${styles.formInput} ${styles.inputTitulo}`}>
                    Titulo
                    <input
                        value={viaje.titulo}
                        onChange={e =>
                            setViaje({ ...viaje, titulo: e.target.value })}
                    />
                </label>

                <label className={`${styles.formInput} ${styles.inputBudget}`}>
                    Presupuesto
                    <input
                        type="number"
                        value={viaje.presupuesto}
                        onChange={e =>
                            setViaje({ ...viaje, presupuesto: parseInt(e.target.value) })}
                    />
                </label>

                <label className={`${styles.formInput} ${styles.inputStart}`}>
                    Fecha Inicio
                    <input
                        type="date"
                        value={viaje.fecha_inicio}
                        onChange={e =>
                            setViaje({ ...viaje, fecha_inicio: e.target.value })}
                    />
                </label>

                <label className={`${styles.formInput} ${styles.inputEnd}`}>
                    Fecha Final
                    <input
                        type="date"
                        value={viaje.fecha_final}
                        onChange={e =>
                            setViaje({ ...viaje, fecha_final: e.target.value })}
                    />
                </label>
            </form>

            <div>
                <button
                    type="button"
                    onClick={() => setIsViaje_FormOpen(false)}
                    className={`${styles.btn} ${styles.btnCancel}`}
                >
                    cancelar
                </button>

                <button
                    type="button"
                    onClick={() => add_viaje(viaje)}
                    className={`${styles.btn} ${styles.btnCrear}`}
                >
                    crear
                </button>
            </div>
        </>
    );
}

export default Viaje_Form;
