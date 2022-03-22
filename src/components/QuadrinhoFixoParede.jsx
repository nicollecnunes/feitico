import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function QuadrinhoFixoParede(obj) {
  const [isFlipped, setIsFlipped] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Button onClick={handleClick} className={classes.parteFrente}>
        <img src={obj.exaluna.foto} width={190} />
      </Button>

      <Button
        onClick={handleClick}
        className={classes.parteTras}
        sx={{
          color: "white",
          backgroundColor: "purple",
          "&:hover": {
            color: "purple",
            backgroundColor: "rgb(234, 209, 238)",
          },
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

const useStyles = makeStyles(() => ({
  parteTras: {
    width: 190,
    height: 337,
    margin: 5,
    texTransform: "lowercase",
    ".MuiButton‑text": {
      textColor: "red",
      texTransform: "lowercase",
    },
  },
  parteFrente: {
    width: 190,
    backgroundColor: "rgb(234, 209, 238)",
    margin: 5,
  },
}));
