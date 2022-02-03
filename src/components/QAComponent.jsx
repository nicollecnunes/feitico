import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  Typography,
  Box,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSnackbar } from "notistack";

const QAComponent = ({ qa, acertos, erros, handleOpcao }) => {

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "rgb(234, 209, 238)",
    boxShadow: 24,
    p: 4,
  };
  const ModalFimDeJogo = ({}) => {
    const navigate = useNavigate();

    const handleClickPlayagain = () => {
      window.location.reload();
    };
    const handleClickQuit = () => {
      navigate("/");
    };

    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={jogoFinalizado}
          onClose={handleClickQuit}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={jogoFinalizado}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Fim de jogo
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 0.5 }}>
                Você acertou {acertos} perguntas!
              </Typography>
              <Grid sx={{ ml: 17, mt: 5 }}>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ color: "white" }}
                  onClick={handleClickPlayagain}
                >
                  Jogar Novamente
                </Button>
                <Button
                  color="secondary"
                  variant="outlined"
                  sx={{ color: "secondary", ml: 2 }}
                  onClick={handleClickQuit}
                >
                  Sair
                </Button>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  };
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  var x = 0;
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
    <Grid className={classes.root}>
      <ModalFimDeJogo />
      <Typography fontWeight={600} fontSize={26} sx={{ mb: 2 }}>
        {qa.pergunta}
      </Typography>
      <Button
        disabled={botaoDesabilitado}
        color="secondary"
        variant="contained"
        sx={{ color: "white", mr: 2 }}
        onClick={() => {
          {
            handleClickAnswer(0);
          }
        }}
      >
        {qa.opcoes[0]}
      </Button>
      <Button
        disabled={botaoDesabilitado}
        color="secondary"
        variant="contained"
        sx={{ color: "white", mr: 2 }}
        onClick={() => {
          {
            handleClickAnswer(1);
          }
        }}
      >
        {qa.opcoes[1]}
      </Button>
      <Button
        disabled={botaoDesabilitado}
        color="secondary"
        variant="contained"
        sx={{ color: "white" }}
        onClick={() => {
          {
            handleClickAnswer(2);
          }
        }}
      >
        {qa.opcoes[2]}
      </Button>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "20px",
    backgroundColor: "rgb(234, 209, 238)",
    marginLeft: "20px",
    padding: "20px 20px 20px 20px",
    margin: "5px 0px 60px 0px",
    width: "70%",
    textAlign: "center",
  },
}));

export default QAComponent;
