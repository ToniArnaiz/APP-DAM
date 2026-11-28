import { Link } from "react-router-dom";

export default function Viaje_Button({ titulo, url, state }) {
    return (
        <Link to={url} state={state}>
            {titulo}
        </Link>
    );
}
