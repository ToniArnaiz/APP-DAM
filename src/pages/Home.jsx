
import { datos_viajes } from "../data/viajes.js";
import { useState } from "react";
import { Viaje_Card } from "../components/Viaje_Card.jsx";
import Viaje_Form from "../components/Viaje_Form.jsx";
import profile from "../assets/profile.png";


function Home() {

    const [viajes, setViajes] = useState(datos_viajes);
    const [isViaje_Form_open, setIsViaje_FormOpen] = useState(false);

    function add_viaje(new_viaje) {
        setViajes([
            ...viajes,
            { ...new_viaje, id: viajes[viajes.length - 1].id + 1 }
        ]);
    }

    function deleteViaje(id) {
        const nuevos_viajes = viajes.filter(viaje => viaje.id !== id);
        setViajes(nuevos_viajes);
    }

    function navigate_to(id) {
        console.log(id);
    }

    return (
        <>
            <header className={styles.homeHeader}>

                <div className={styles.username}>
                    Username
                </div>

                <img
                    src={profile}
                    alt="profile picture"
                    className={styles.profileImage}
                />

            </header>

            <main className={styles.homeMain}>

                <h1 className={styles.homeTitle}>
                    Els meus viatges
                </h1>

                <button
                    type="button"
                    onClick={() => setIsViaje_FormOpen(true)}
                    className={styles.btnAddTravel}
                >
                    + Nou viatge
                </button>

                <div className={styles.homeContainerViajeDetail}>
                    {viajes.map(viaje => (
                        <Viaje_Card
                            key={viaje.id}
                            viaje={viaje}
                            navigate_to={() => navigate_to(viaje.id)}
                            delete_viaje={() => deleteViaje(viaje.id)}
                        />
                    ))}
                </div>

            </main>

            {isViaje_Form_open && (
                <Viaje_Form
                    add_viaje={add_viaje}
                    setIsViaje_FormOpen={setIsViaje_FormOpen}
                />
            )}
        </>
    );
}

export default Home;
