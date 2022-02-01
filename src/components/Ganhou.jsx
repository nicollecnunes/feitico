import { useAcabou } from "../context/TempoRestanteContext";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Ganhou = ({ reset }) => {
  const handleClickJogarNovamente = () => {
    reset();
  };
  const handleClose = () => {
    setAbrirModal(false);
  };

  const [abrirModal, setAbrirModal] = useState(true);
  return (
    <Modal open={abrirModal} onClose={handleClose}>
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <div>
          <Button onClick={handleClickJogarNovamente}>Tentar Novamente</Button>
          <Button onClick={handleClose}>Sair</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Ganhou;
