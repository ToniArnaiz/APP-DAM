
import {useEffect,useState} from "react";
import { Viaje_Card } from "../components/Viaje_Card.jsx";
import Viaje_Form from "../components/Viaje_Form.jsx";
import profile from "../assets/profile.png";
import {fetch_viajes_detail} from "../utils/api_fetch.js";

function Home() {
    const [viajes, setViajes] = useState([]);
    const [isViaje_Form_open, setIsViaje_FormOpen] = useState(false);


    useEffect(() => {

        async function cargarViajes() {
            try {
                const data = await fetch_viajes_detail();
                setViajes(data);
            } catch (e) {
                console.error(e);
            }
        }

        cargarViajes();

    }, []);

    function add_viaje(new_viaje) {
        setViajes(viajes_actuals => {
            const siguienteId = viajes_actuals.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
            return [...viajes_actuals, { ...new_viaje, id: siguienteId }];
        });
        setIsViaje_FormOpen(false);
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

                <div
                    className="home-container-viaje-detail"
                    role="region"
                    aria-label="Llista dels meus viatges, desplaçable verticalment"
                    tabIndex={0}
                >
                    {viajes && viajes.length > 0
                        ?
                            viajes.map(viaje => (
                                <Viaje_Card
                                    key={viaje.id}
                                    viaje={viaje}
                                    navigate_to={() => navigate_to(viaje.id)}
                                    delete_viaje={() => deleteViaje(viaje.id)}
                                />
                            ))
                        :
                            <p>No hay viajes</p>
                    }
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
