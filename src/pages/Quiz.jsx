import React, { Component, useEffect, useState } from "react";
import RespostaQuiz from "../components/RespostaQuiz";
import PerguntaQuiz from "../components/PerguntaQuiz";
import { montarQA } from "../components/GeradorPerguntas";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import QAComponent from "../components/QAComponent";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const classes = useStyles();
  const numeroPerguntas = 3;
  const [qas, setQas] = useState([]);

  function montarTodaPerguntas(n) {
    var QAs = [];
    for (let i = 0; i < n; i++) {
      var QAatual = montarQA();
      console.log(QAatual.opcoesResposta);
      QAs.push({
        id: i,
        pergunta: QAatual.pergunta,
        opcoes: QAatual.opcoes,
        respostaCorreta: QAatual.respostaCorreta,
      });
    }
    return QAs;
  }

  useEffect(() => {
    setQas(montarTodaPerguntas(numeroPerguntas));
  }, []);

  return (
    <>
      <Grid className={classes.root} alignContent="center">
        {!!qas?.length &&
          qas?.map((qa) => {
            return <QAComponent qa={qa} key={qa.id} />;
          })}
      </Grid>
    </>
  );
}

const useStyles = makeStyles(() => ({
    root: {
     display: "flex",
     flexDirection: "column",
     justifyContent: "space-between",
     alignItems: "center",
     alignContent: "space-between",
     paddingTop: '25px',
    },
    link: {
      color: "rgb(107, 62, 149)",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "30px 30px 30px 30px",
    },
  }));
