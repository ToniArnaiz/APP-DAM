import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
    const navigate = useNavigate();

    return (
        <div className="app-shell">
            <Outlet />
            <nav>
                <button type="button" onClick={() => navigate("/")}>Inici</button>
            </nav>
        </div>
    );
}
