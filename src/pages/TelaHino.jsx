import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { ListaRepublicas } from "../util/ListaRepublicas";

function TelaHino() {
  let { id } = useParams();
  const classes = useStyles();

  const repAtual = ListaRepublicas.at(id);
  const hinoFormatado = repAtual.hino.split(/\r?\n/);

  return (
    <>
      <Grid container direction="column" className={classes.root}>
        <Typography>{repAtual.nome}</Typography>
        {hinoFormatado.map((parte) => {
          return <Typography>{parte}</Typography>;
        })}
      </Grid>
    </>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
    alignContent: "center",
  },
}));

export default TelaHino;
