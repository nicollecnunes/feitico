import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSnackbar } from "notistack";

const QAComponent = ({ qa }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClickAnswer = (n) => {
    if (qa.respostaCorreta === qa.opcoes[n]) {
      enqueueSnackbar("Resposta Correta!", { variant: "success" });
    } else {
      enqueueSnackbar("Você errou :(", { variant: "error" });
    }
  };

  return (
    <Grid className={classes.root}>
      <Typography fontWeight={600} fontSize={26}>
        {qa.pergunta}
      </Typography>
      <Button
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
