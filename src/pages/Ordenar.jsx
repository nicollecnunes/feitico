import "./App.css";
import ListaDrag from "../components/ListaDrag";
import styled from "styled-components";
import { IsOverProvider } from "../context/RemainingTimeContext";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";

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
        <ListaDrag setIsOrderCorrect={setIsOrderCorrect} />
      </IsOverProvider>
    </div>
  );
}

export default App;
