import { Link } from "react-router-dom";

export default function Viaje_Button({ titulo, url }) {
    return (
        <Link to={url}>
            {titulo}
        </Link>
    );
}
