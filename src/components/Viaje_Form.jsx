import {useState} from "react";


function Viaje_Form({add_viaje, setIsViaje_FormOpen}) {

    const [viaje, setViaje] = useState({
        id:-1,
        destino:"",
        titulo:"",
        presupuesto:0,
        fecha_inicio:"",
        fecha_final:"",
    })
    return (
        <>
            <form className={"form-add-viaje"}>
                <label className={"form-input input-destino"}>
                    Destino
                    <input
                        value={viaje.destino}
                        onChange={e =>
                            setViaje({...viaje, destino:e.target.value})}
                    />
                </label>

                <label className={"form-input input-titulo"}>
                    Titulo
                    <input
                        value={viaje.titulo}
                        onChange={e =>
                            setViaje({...viaje, titulo:e.target.value})}
                    />
                </label>

                <label className={"form-input input-budget"}>
                    Presupuesto
                    <input
                        type="number"
                        value={viaje.presupuesto}
                        onChange={e =>
                            setViaje({...viaje, presupuesto:parseInt(e.target.value)})}
                    />
                </label>

                <label className={"form-input input-start"}>
                    Fecha Inicio
                    <input
                        type="date"
                        value={viaje.fecha_inicio}
                        onChange={e =>
                            setViaje({...viaje, fecha_inicio:e.target.value})}
                    />
                </label>

                <label className={"form-input input-end"}>
                    Fecha Final
                    <input
                        type="date"
                        value={viaje.fecha_final}
                        onChange={e =>
                            setViaje({...viaje, fecha_final:e.target.value})}
                    />
                </label>

            </form>

            <div>

                <button
                    type="button"
                    onClick={()=>setIsViaje_FormOpen(false)}
                    className="btn btn-cancel"
                >
                    cancelar
                </button>

                <button
                    type="button"
                    onClick={() => add_viaje(viaje)}
                    className="btn btn-crear"
                >
                    crear
                </button>

            </div>
        </>
    )
}
export default Viaje_Form;