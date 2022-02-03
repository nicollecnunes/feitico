import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import CardJogo from "../components/CardJogo";
import imagemDrag from "../images/drag.png";
import imagemQuiz from "../images/quiz.png";

const jogos = [
  {
    id: 0,
    nome: "Ordenar Quadrinhos",
    rota: "/ordenar",
    imagem: imagemDrag,
    descricao:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 1,
    nome: "Quiz",
    rota: "/quiz",
    imagem: imagemQuiz,
    descricao:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

function MenuJogos() {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid className={classes.divTitulo}>
        <Typography fontSize={45} fontWeight={800}>
          Jogos
        </Typography>
      </Grid>
      <Grid className={classes.menuJogos}>
        {!!jogos?.length &&
          jogos?.map((jogo) => {
            return <CardJogo key={jogo.id} jogo={jogo} />;
          })}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    margin: "0px",
    backgroundColor: "rgb(234, 209, 238)",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  divTitulo: {
    color: "rgb(107, 62, 149)",
    padding: "70px 0px 110px 0px",
  },
  menuJogos: {
    display: "flex",
    flexDirection: "row",
    width: "40%",
  },
}));

export default MenuJogos;
