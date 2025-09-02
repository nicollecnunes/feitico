import { Routes, Route } from "react-router-dom";
import ParedeQuadrinhosFixos from "./pages/ParedeQuadrinhosFixos";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import TelaHino from "./pages/TelaHino";
import ParedeHomenageados from "./pages/ParedeHomenageados";
import Header from "./components/Header";
import Moradoras from "./pages/Moradoras";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, overflow: "auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="parede" element={<ParedeQuadrinhosFixos />} />
          <Route path="parede-homenageados" element={<ParedeHomenageados />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="hinos/:id" element={<TelaHino />} />
          <Route path="moradoras" element={<Moradoras />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
