import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import { Viaje } from "./pages/Viaje.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="viaje/:id" element={<Viaje />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
