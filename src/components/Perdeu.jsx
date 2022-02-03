import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { useNavigate } from 'react-router-dom';
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

export default function Perdeu({ reset }) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClickPlayagain = () => {
    reset();
  };
  const handleClickQuit = () => {
    navigate('/');
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
              O tempo acabou
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 0.5 }}>
              Você Perdeu!
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
