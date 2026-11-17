
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
            <header className="home-header">

                <div className={"username"}>
                    Username
                </div>

                <img
                    src="src/assets/profile.png"
                    alt={"profile picture"}
                    className="profile-image"
                />

            </header>

            <main className="home-main">

                <h1 className={"home-title"}>
                    Els meus viatges
                </h1>

                <button
                    onClick={()=>setIsViaje_FormOpen(true)}
                    className={"btn-add-travel"}
                >
                    + Nou viatge
                </button>

                <div className={"home-container-viaje-detail"}>
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

            { isViaje_Form_open && <Viaje_Form add_viaje={add_viaje} setIsViaje_FormOpen = {setIsViaje_FormOpen}/>}
        </>
    )

}

export default Home;