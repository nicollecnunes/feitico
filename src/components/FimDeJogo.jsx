import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button, Modal, Grid } from "@mui/material";

const FimDeJogo = ({ reset, ganhou }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const classes = useStyles();

  const handleClickPlayagain = () => {
    reset();
  };
  const handleClickQuit = () => {
    navigate("/");
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Grid className={classes.modal}>
          <Typography variant="h6" component="h2">
            Fim de Jogo
          </Typography>
          <Typography sx={{ mt: 0.5 }}>
            {ganhou ? "Você venceu!" : "Você perdeu!"}
          </Typography>
          <Grid className={classes.botaoContainer}>
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
        </Grid>
      </Modal>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "rgb(234, 209, 238)",
    padding: "30px 30px 30px 30px",
  },
  botaoContainer: {
    display: "flex",
    margin: "30px 0px 0px 0px",
    justifyContent: "flex-end",
  },
}));

export default FimDeJogo;
