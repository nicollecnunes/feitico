import { IsOverProvider } from "../context/RemainingTimeContext";
import { Grid, Typography } from "@mui/material";
import ListaDragNomes from "../components/ListaDragNomes";
import styled from "styled-components";
import { useState } from "react";
import "./App.css";

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
          Ordene os nomes
        </Typography>
        <ListaDragNomes setIsOrderCorrect={setIsOrderCorrect} />
      </IsOverProvider>
    </div>
  );
}

export default App;
