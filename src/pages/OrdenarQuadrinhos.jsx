import { IsOverProvider } from "../context/RemainingTimeContext";
import { Grid, Typography } from "@mui/material";
import ListaDrag from "../components/ListaDrag";
import { useState } from "react";

function App() {
  const [isOrderCorrect, setIsOrderCorrect] = useState(false);

  return (
    <div className="app">
      <IsOverProvider>
        <Typography
          fontSize={48}
          fontWeight={800}
          sx={{ mb: "50px", textAlign: "center", color: "rgb(107, 62, 149)" }}
        >
          Ordene os quadrinhos
        </Typography>
        <ListaDrag
          setIsOrderCorrect={setIsOrderCorrect}
          tipo={"quadrinho"}
        />
      </IsOverProvider>
    </div>
  );
}

export default App;
