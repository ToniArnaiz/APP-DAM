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
        <div className="app-shell">
            <header className="home-header">
                <span className="brand-name">Vianda<span className="brand-dot">.</span></span>
                <img src={profile} alt="Imatge de perfil" className="profile-image" />
            </header>

            <main className="home-main">
                <div className="home-heading">
                    <p className="eyebrow">Organitza la teva pròxima aventura</p>
                    <h1 className="home-title">Els meus viatges</h1>
                </div>

                <button
                    type="button"
                    onClick={() => setIsViaje_FormOpen(true)}
                    className="btn-add-travel"
                >
                    <span className="btn-add-travel__plus" aria-hidden="true">+</span>
                    Nou viatge
                </button>

                <div className="home-container-viaje-detail" aria-label="Llista dels meus viatges">
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
        </div>
    );
}

export default Home;
