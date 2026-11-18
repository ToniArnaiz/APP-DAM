import { useState } from "react";

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
        <div className="modal-backdrop">
            <section className="modal-card" role="dialog" aria-modal="true" aria-labelledby="form-travel-title">
                <div className="modal-heading">
                    <div>
                        <p className="modal-eyebrow">PLANIFICA EL TEU VIATGE</p>
                        <h2 id="form-travel-title">Nou viatge</h2>
                    </div>
                    <button
                        type="button"
                        className="modal-close"
                        onClick={() => setIsViaje_FormOpen(false)}
                        aria-label="Tancar formulari"
                    >×</button>
                </div>
                <form className="form-add-viaje" onSubmit={(event) => event.preventDefault()}>
                    <label className="form-input input-destino">
                        Destinació
                        <input
                            value={viaje.destino}
                            onChange={e => setViaje({ ...viaje, destino: e.target.value })}
                            placeholder="P. ex. Japó"
                        />
                    </label>
                    <label className="form-input input-titulo">
                        Títol del viatge
                        <input
                            value={viaje.titulo}
                            onChange={e => setViaje({ ...viaje, titulo: e.target.value })}
                            placeholder="P. ex. Japó - Tardor 2026"
                        />
                    </label>
                    <label className="form-input input-budget">
                        Pressupost (€)
                        <input
                            type="number"
                            value={viaje.presupuesto}
                            onChange={e => setViaje({ ...viaje, presupuesto: parseInt(e.target.value) })}
                        />
                    </label>
                    <div className="form-date-grid">
                        <label className="form-input input-start">
                            Data d'inici
                            <input
                                type="date"
                                value={viaje.fecha_inicio}
                                onChange={e => setViaje({ ...viaje, fecha_inicio: e.target.value })}
                            />
                        </label>
                        <label className="form-input input-end">
                            Data final
                            <input
                                type="date"
                                value={viaje.fecha_final}
                                onChange={e => setViaje({ ...viaje, fecha_final: e.target.value })}
                            />
                        </label>
                    </div>
                </form>
                <div className="modal-actions">
                    <button
                        type="button"
                        onClick={() => setIsViaje_FormOpen(false)}
                        className="btn btn-cancel"
                    >Cancel·lar</button>
                    <button
                        type="button"
                        onClick={() => add_viaje(viaje)}
                        className="btn btn-create"
                    >Crear viatge</button>
                </div>
            </section>
        </div>
    );
}

export default Viaje_Form;
