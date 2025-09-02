import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ParteFrenteButton = styled(Button)(({ theme }) => ({
  width: 190,
  height: 340,
  backgroundColor: "rgb(16, 1, 28)",
  margin: 5,
}));

const ParteTrasButton = styled(Button)(({ theme }) => ({
  width: 190,
  height: 337,
  margin: 5,
  color: "white",backgroundColor: "rgb(16, 1, 28)",
  textTransform: "lowercase",
  "&:hover": {
    backgroundColor: "rgb(16, 1, 28)",
  },
  "& .MuiButton-text": {
    textColor: "red",
    textTransform: "lowercase",
  },
}));

export default function QuadrinhoFixoHomenageado({ exaluna, mostrar }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <ParteFrenteButton onClick={handleClick}>
        {mostrar ? (
          <img src={exaluna.foto} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <Typography fontSize={28} fontFamily={"'Bohemian Soul', cursive"}>{exaluna.posicao}</Typography>
        )}
      </ParteFrenteButton>

      <ParteTrasButton onClick={handleClick}>
        <Typography fontSize={16} fontWeight={600} fontFamily={"'Bohemian Soul', cursive"}>
          {exaluna.nome} <br></br>
          <br></br>
          {exaluna.apelido ? "(" + exaluna.apelido + ")" : <>-</>}
          <br></br>
          <br></br>
          {exaluna.motivo}
          <br></br>
          <br></br>
          {exaluna.ano}
        </Typography>
      </ParteTrasButton>
    </ReactCardFlip>
  );
}
