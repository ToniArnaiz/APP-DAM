import { Link } from "react-router-dom";

export default function Viaje_Header() {
    return (
        <header>
            <Link to="/">Tornar a l'inici</Link>
            <h1>Viatge</h1>
            {/* Dates del viatge */}
        </header>
    );
}
