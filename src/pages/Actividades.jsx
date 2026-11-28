import { useLocation } from "react-router-dom";

export default function Actividades() {
    const { state } = useLocation();
    const actividades = state?.actividades;
    console.log(actividades);
    return (
        <></>
    );
}
