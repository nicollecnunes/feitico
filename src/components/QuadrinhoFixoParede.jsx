import ReactDOM from "react-dom";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button, Typography } from "@mui/material";

export default function QuadrinhoFixoParede(obj) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Button
        onClick={handleClick}
        style={{ width: 190, backgroundColor: "rgb(234, 209, 238)", margin: 5 }}
      >
        <img src={obj.exaluna.foto} width={190} className="imagemquadrinho" />
      </Button>

      <Button
        onClick={handleClick}
        style={{
          width: 190,
          height: 337,
          backgroundColor: "rgb(234, 209, 238)",
          margin: 5,
        }}
      >
        <Typography fontSize={20} fontWeight={600}>
          {obj.exaluna.nome} <br></br>
          <br></br>
          {obj.exaluna.curso}
          <br></br>
          <br></br>
          {obj.exaluna.ano}
          <br></br>
          <br></br>
          {obj.exaluna.cidade}
        </Typography>
      </Button>
    </ReactCardFlip>
  );
}
