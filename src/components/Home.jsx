
import {datos_viajes} from"./../data/viajes.js"
import {useState} from "react";
import {Viaje_Detail} from "./Viaje_Detail.jsx";
import Viaje_Form from "./Viaje_Form.jsx";

function Home() {


    const [viajes,setViajes] = useState(datos_viajes)
    const [isViaje_Form_open, setIsViaje_FormOpen] = useState(false);

    function add_viaje(new_viaje){
        setViajes([
            ...viajes,
            {...new_viaje,id:viajes[viajes.length - 1].id+1}
        ]);
    }

    function deleteViaje(id) {
        const nuevos_viajes = viajes.filter(viaje => viaje.id !== id)
        setViajes(nuevos_viajes)
    }
    function navigate_to(id) {
        console.log(id)
    }

    return (
        <>
            <header>

            </header>

            <main>
                <h1>Els meus viatges</h1>
                <button
                    onClick={()=>setIsViaje_FormOpen(true)}
                >
                    + Nou viatge
                </button>
                <div>
                    {viajes.map(viaje => (
                        <Viaje_Detail
                            key={viaje.id}
                            viaje={viaje}
                            navigate_to={()=>navigate_to(viaje.id)}
                            delete_viaje={()=>deleteViaje(viaje.id)}
                        />
                    ))}
                </div>
            </main>
            {isViaje_Form_open && <Viaje_Form add_viaje={add_viaje} setIsViaje_FormOpen = {setIsViaje_FormOpen}/>}
        </>
    )

}

export default Home;