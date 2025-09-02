import React from "react";
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

const ModalFimDeJogo = ({ jogoFinalizado, acertos, listaFinal }) => {
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
            <Typography
              fontWeight={600}
              id="transition-modal-description"
              sx={{ mt: 2.5 }}
            >
              Respostas:
            </Typography>

            {listaFinal.map((x, index) => {
              return (
                <Typography key={index} id="transition-modal-description" sx={{ mb: 1 }}>
                  {x.p}
                  <br></br>
                  {x.r}
                </Typography>
              );
            })}

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

export default ModalFimDeJogo;
