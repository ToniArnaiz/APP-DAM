import Viaje_Header from "../components/Viaje_Header.jsx";
import Viaje_Button from "../components/Viaje_Button.jsx";
import Viaje_Resum from "../components/Viaje_Resum.jsx";

export function Viaje() {
    return (
        <>
            <Viaje_Header />
            <main>
                <Viaje_Button />
                <Viaje_Resum />
            </main>
        </>
    );
}
