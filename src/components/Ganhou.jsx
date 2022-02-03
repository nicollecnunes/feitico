import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Backdrop, Button, Modal, Fade, Grid, Box } from "@mui/material";

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

export default function Ganhou({ reset }) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClickPlayagain = () => {
    reset();
  };
  const handleClickQuit = () => {
    navigate("/");
  };
  
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Parabéns
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 0.5 }}>
              Você venceu!
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
}
