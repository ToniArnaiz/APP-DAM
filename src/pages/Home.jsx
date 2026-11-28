import { Home_Card } from "../components/Home_Card.jsx";
import Home_Form from "../components/Home_Form.jsx";
import profile from "../assets/profile.png";
import useHome from "../hooks/useHome.js";
import Home_Filtro from "../components/Home_Filtro.jsx";

function Home() {
    const {
        viajesFiltrados,
        filtro,
        setFiltro,
        isViaje_Form_open,
        setIsViaje_FormOpen,
        add_viaje,
        deleteViaje,
    } = useHome();

    return (
        <>
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

                <Home_Filtro filtro={filtro} onFiltroChange={setFiltro} />

                <div
                    className="home-container-viaje-detail"
                    role="region"
                    aria-label="Llista dels meus viatges, desplaçable verticalment"
                    tabIndex={0}
                >
                    {viajesFiltrados.length > 0
                        ?
                            viajesFiltrados.map(viaje => (
                                <Home_Card
                                    key={viaje.id}
                                    viaje={viaje}
                                    delete_viaje={() => deleteViaje(viaje.id)}
                                />
                            ))
                        :
                            <p>No hay viajes</p>
                    }
                </div>
            </main>

            {isViaje_Form_open && (
                <Home_Form
                    add_viaje={add_viaje}
                    setIsViaje_FormOpen={setIsViaje_FormOpen}
                />
            )}
        </>
    );
}

export default Home;
