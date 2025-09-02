import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Box
} from "@mui/material";
import { styled } from "@mui/system";
import { useSnackbar } from "notistack";
import ModalFimDeJogo from "./ModalFimDeJogo";

const StyledQuizCard = styled(Grid)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  backgroundColor: "white", // Changed to white for a cleaner look
  padding: theme.spacing(4),
  margin: theme.spacing(3, 0),
  width: "80%", // Adjusted width
  maxWidth: 700,
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
}));

const StyledQuestionTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: "rgb(35, 6, 61)",
  fontFamily: "'Bohemian Soul', cursive",
  fontWeight: "bold",
}));

const StyledOptionButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "rgb(35, 6, 61)",
  margin: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
  "&:hover": {
    backgroundColor: "rgb(35, 6, 61)",
  },
  "&.Mui-disabled": {
    backgroundColor: "#cccccc",
    color: "#666666",
  },
}));

const QAComponent = ({ qa, acertos, erros, handleOpcao, listaFinal }) => {
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
    <StyledQuizCard>
      <ModalFimDeJogo
        jogoFinalizado={jogoFinalizado}
        acertos={acertos}
        listaFinal={listaFinal}
      />
      <StyledQuestionTypography variant="h5">
        {qa.pergunta}
      </StyledQuestionTypography>
      <Box sx={{ mt: 2 }}>
        {qa.opcoes.map((x, index) => {
          return (
            <StyledOptionButton
              disabled={botaoDesabilitado}
              onClick={() => handleClickAnswer(index)}
              key={index}
            >
              {x}
            </StyledOptionButton>
          );
        })}
      </Box>
    </StyledQuizCard>
  );
};

export default QAComponent;
