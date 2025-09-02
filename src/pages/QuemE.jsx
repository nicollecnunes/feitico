import React, { useEffect, useState } from "react";
import { montarQuemE } from "../util/GeradorPerguntas";
import QuemEComponent from "../components/QuemEComponent";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function Quiz() {
  const numeroPerguntas = 3;

  const classes = useStyles();
  const [qas, setQas] = useState([]);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [listaModal, setListaModal] = useState([]);

  var listaFinal = [];

  function montarTodaPerguntas(n) {
    var QAs = [];
    for (let i = 0; i < n; i++) {
      var QAatual = montarQuemE();
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
              <QuemEComponent
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
