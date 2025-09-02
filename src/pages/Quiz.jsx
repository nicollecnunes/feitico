import React, { useEffect, useState } from "react";
import { montarQA } from "../util/GeradorPerguntas";
import QAComponent from "../components/QAComponent";
import { Grid, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledQuizContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center", 
  background: "rgb(35, 6, 61)"
}));

export default function Quiz() {
  const numeroPerguntas = 3;

  const [qas, setQas] = useState([]);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [listaModal, setListaModal] = useState([]);

  function montarTodaPerguntas(n) {
    var QAs = [];
    var tempListaFinal = [];
    for (let i = 0; i < n; i++) {
      var QAatual = montarQA();
      tempListaFinal.push({ p: QAatual.pergunta, r: QAatual.respostaCorreta });
      QAs.push({
        id: i,
        pergunta: QAatual.pergunta,
        opcoes: QAatual.opcoes,
        respostaCorreta: QAatual.respostaCorreta,
      });
    }
    return { QAs, tempListaFinal };
  }

  function handleOpcao(x) {
    if (x) {
      setAcertos(acertos + 1);
    } else {
      setErros(erros + 1);
    }
  }

  useEffect(() => {
    const { QAs, tempListaFinal } = montarTodaPerguntas(numeroPerguntas);
    setQas(QAs);
    setListaModal(tempListaFinal);
  }, []);

  return (
    <StyledQuizContainer>
      <Grid direction="column" alignContent="center">
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
    </StyledQuizContainer>
  );
}
