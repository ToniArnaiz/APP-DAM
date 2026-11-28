import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Actividades from "./pages/Actividades.jsx";
import Gastos from "./pages/Gastos.jsx";
import Itinerario from "./pages/Itinerario.jsx";
import { Viaje } from "./pages/Viaje.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="viaje/:id" element={<Viaje />} />
          <Route path="viaje/:id/actividades" element={<Actividades />} />
          <Route path="viaje/:id/itinerario" element={<Itinerario />} />
          <Route path="viaje/:id/gastos" element={<Gastos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
