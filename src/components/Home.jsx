
import {datos_viajes} from"./../data/viajes.js"
import {useState} from "react";
import {Viaje_Detail} from "./Viaje_Detail.jsx";

function Home() {


    const [viajes,setViajes] = useState(datos_viajes)

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

            <body>
                <h1>Els meus viatges</h1>
                <button>
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
            </body>
        </>
    )

}

export default Home;