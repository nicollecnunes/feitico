import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import { styled } from "@mui/system";
import { useSnackbar } from "notistack";
import ModalFimDeJogo from "./ModalFimDeJogo";

const StyledGrid = styled(Grid)(({ theme }) => ({
  borderRadius: "20px",
  backgroundColor: "rgb(35, 6, 61)",
  marginLeft: "20px",
  padding: "20px 20px 20px 20px",
  margin: "5px 0px 60px 0px",
  width: "70%",
  textAlign: "center",
}));

const QuemEComponent = ({ qa, acertos, erros, handleOpcao, listaFinal }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(false);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  const handleClickAnswer = (n) => {
    if (qa.respostaCorreta === qa.opcoes[n]) {
      enqueueSnackbar("Resposta Correta!", { variant: "success" });
      handleOpcao(true);
    } else {
      enqueueSnackbar("Você errou :(", { variant: "error" });
      handleOpcao(false);
    }
    if (erros + acertos === 2) {
      setJogoFinalizado(true);
    }
    setBotaoDesabilitado(true);
  };

  return (
    <StyledGrid>
      <ModalFimDeJogo
        jogoFinalizado={jogoFinalizado}
        acertos={acertos}
        listaFinal={listaFinal}
      />
      <Typography fontWeight={600} fontSize={26} sx={{ mb: 2 }}>
        {qa.pergunta}
      </Typography>
      {qa.opcoes.map((x, index) => {
        return (
          <Button
            disabled={botaoDesabilitado}
            color="secondary"
            variant="contained"
            sx={{ color: "white", mr: 2 }}
            onClick={() => handleClickAnswer(index)}
          >
            {x}
          </Button>
        );
      })}
    </StyledGrid>
  );
};

export default QuemEComponent;
