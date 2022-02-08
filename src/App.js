import { Routes, Route } from "react-router-dom";
import MenuJogos from "./pages/MenuJogos";
import Ordenar from "./pages/Ordenar";
import Parede from "./pages/Parede";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Hino from "./pages/Hino";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="parede" element={<Parede />} />
        <Route path="menu-jogos" element={<MenuJogos />} />
        <Route path="ordenar" element={<Ordenar />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="hinos/:id" element={<Hino />} />
      </Routes>
    </>
  );
}

export default App;
