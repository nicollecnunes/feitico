import React, { Component, useEffect, useState } from "react";
import { montarQA } from "../components/GeradorPerguntas";
import QAComponent from "../components/QAComponent";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const classes = useStyles();
  const numeroPerguntas = 3;
  const [qas, setQas] = useState([]);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [listaModal, setListaModal] = useState([]);

  var listaFinal = [];

  function montarTodaPerguntas(n) {
    var QAs = [];
    for (let i = 0; i < n; i++) {
      var QAatual = montarQA();
      listaFinal.push({ p: QAatual.pergunta, r: QAatual.respostaCorreta });
      QAs.push({
        id: i,
        pergunta: QAatual.pergunta,
        opcoes: QAatual.opcoes,
        respostaCorreta: QAatual.respostaCorreta,
      });
    }
    return QAs;
  }

  function handleOpcao(x) {
    if (x) {
      setAcertos(acertos + 1);
    } else {
      setErros(erros + 1);
    }
  }

  useEffect(() => {
    setQas(montarTodaPerguntas(numeroPerguntas));
    setListaModal(listaFinal);
  }, []);

  return (
    <>
      <Grid direction="column" className={classes.root} alignContent="center">
        {!!qas?.length &&
          qas?.map((qa) => {
            return (
              <QAComponent
                qa={qa}
                acertos={acertos}
                erros={erros}
                handleOpcao={handleOpcao}
                key={qa.id}
                listaFinal={listaModal}
              />
            );
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
    paddingTop: "25px",
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
