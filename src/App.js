import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MenuJogos from "./pages/MenuJogos";
import Ordenar from "./pages/Ordenar";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu-jogos" element={<MenuJogos />} />
        <Route path="ordenar" element={<Ordenar />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
