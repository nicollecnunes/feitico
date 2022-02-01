import ListaDrag from "../components/ListaDrag";
import React from "react";
import { AcabouProvider } from "../context/TempoRestanteContext";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";

function Ordenar() {
  const classes = useStyles();
  const [ordemEstaCorreta, setOrdemEstaCorreta] = useState(false);

  return (
    <div>
      <>
        <AcabouProvider>
          <Grid container direction="column" className={classes.root}>
            <Grid className={classes.divTitulo}>
              <Typography fontSize={45} fontWeight={800}>
                Ordene os quadrinhos
              </Typography>
            </Grid>
            <Grid className={classes.divQuadrinhos}>
              <ListaDrag setOrdemEstaCorreta={setOrdemEstaCorreta} />
            </Grid>
          </Grid>
        </AcabouProvider>
      </>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    margin: "0px",
    backgroundColor: "rgb(234, 209, 238)",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  divTitulo: {
    color: "rgb(107, 62, 149)",
    padding: "70px 0px 110px 0px",
  },
  divQuadrinhos: {
    display: "flex",
    flexDirection: "row",
    width: "40%",
  },
}));

export default Ordenar;
