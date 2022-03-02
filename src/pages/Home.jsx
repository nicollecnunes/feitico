import { Grid, Typography, Button, Menu, MenuItem } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import MenuRepublicas from "../components/MenuRepublicas";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" className={classes.root}>
        <Link className={classes.link} to="parede">
          <Typography>Ver Quadrinhos</Typography>
        </Link>
        <Grid className={classes.link}>
          <MenuRepublicas />
        </Grid>
        <Link className={classes.link} to="ordenar-quadrinhos">
          <Typography>Ordenar Quadrinhos</Typography>
        </Link>
        <Link className={classes.link} to="quiz">
          <Typography>Quiz</Typography>
        </Link>
        <Link className={classes.link} to="ordenar-nomes">
          <Typography>Ordenar Nomes</Typography>
        </Link>
      </Grid>
    </>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    height: "98vh",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "rgb(107, 62, 149)",
    padding: "0px 100px 0px 100px",
    textDecoration: "none",
  },
}));

export default Home;
