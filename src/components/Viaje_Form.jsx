import {useState} from "react";


function Viaje_Form(add_viaje) {

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
            <form>
                <label>
                    Destino
                    <input
                        value={viaje.destino}
                        onChange={e =>
                            setViaje({...viaje, destino:e.target.value})}
                    />
                </label>

                <label>
                    Titulo
                    <input
                        value={viaje.titulo}
                        onChange={e =>
                            setViaje({...viaje, titulo:e.target.value})}
                    />
                </label>

                <label>
                    Presupuesto
                    <input
                        type="number"
                        value={viaje.presupuesto}
                        onChange={e =>
                            setViaje({...viaje, presupuesto:parseInt(e.target.value)})}
                    />
                </label>

                <label>
                    Fecha Inicio
                    <input
                        type="date"
                        value={viaje.fecha_inicio}
                        onChange={e =>
                            setViaje({...viaje, fecha_inicio:e.target.value})}
                    />
                </label>

                <label>
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
                <buton>
                    cancelar
                </buton>
                <button
                    onClick={() => add_viaje(viaje)}
                >
                    crear
                </button>
            </div>
        </>
    )
}
export default Viaje_Form;