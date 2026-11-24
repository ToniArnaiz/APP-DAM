import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
//import Viaje_Detail from "./pages/Viaje_Detail.jsx";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/*<Route path="/viaje/:id" element={<Viaje_Detail />} />*/}


        </Routes>
      </BrowserRouter>
  );
}

export default App;