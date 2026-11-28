export default function Actividades_Form({ agregarActividad, cerrarFormulario }) {
    function enviarFormulario(event) {
        event.preventDefault();
        const datos = new FormData(event.currentTarget);
        const nombre = datos.get("nombre").trim();
        if (!nombre) return;

        const fecha = datos.get("fecha");
        agregarActividad({
            nombre,
            fecha,
            hora: `${fecha}T${datos.get("hora")}:00`,
            descripcion: datos.get("descripcion").trim(),
        });
    }

    return (
        <div className="modal-backdrop">
            <section className="modal-card" role="dialog" aria-modal="true" aria-labelledby="form-actividad-title">
                <div className="modal-heading">
                    <h2 id="form-actividad-title">Nova activitat</h2>
                    <button type="button" className="modal-close" onClick={cerrarFormulario} aria-label="Tancar formulari">×</button>
                </div>
                <form className="form-add-viaje" onSubmit={enviarFormulario}>
                    <label className="form-input">
                        Nom
                        <input name="nombre" required />
                    </label>
                    <div className="form-date-grid">
                        <label className="form-input">
                            Data
                            <input name="fecha" type="date" required />
                        </label>
                        <label className="form-input">
                            Hora
                            <input name="hora" type="time" required />
                        </label>
                    </div>
                    <label className="form-input">
                        Descripció
                        <input name="descripcion" />
                    </label>
                    <div className="modal-actions">
                        <button type="button" className="btn btn-cancel" onClick={cerrarFormulario}>Cancel·lar</button>
                        <button type="submit" className="btn btn-create">Afegir activitat</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
