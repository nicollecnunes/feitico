import { Grid, Typography, Button, Menu, MenuItem } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import MenuItens from "../components/MenuItens";
import { makeStyles } from "@mui/styles";
import imagemBruxa from "../images/1.png";
import { Link } from "react-router-dom";

function Home() {
  const classes = useStyles();
  

  return (
    <>
      <Grid container direction="column" className={classes.root}>
        <Grid className={classes.cabecalho}>
          <Grid className={classes.logo}>
            <Typography fontWeight={600}>Feitiço</Typography>
          </Grid>
          <Grid className={classes.menu}>
            <Link className={classes.link} to="parede">
              <Typography>Parede</Typography>
            </Link>
            <Grid className={classes.link}>
              
              <MenuItens  />
            </Grid>
            <Link className={classes.linkDestacado} to="menu-jogos">
              <Typography>testar</Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid className={classes.corpo} direction="row">
          <Grid className={classes.divEsquerda}>
            <img
              className={classes.ilustracao}
              src={imagemBruxa}
              width={320}
              height={320}
            />
          </Grid>
          <Grid className={classes.divDireita}>
            <Typography fontSize={45} fontWeight={800}>
              Lorem ipsum dolor
            </Typography>
            <Typography fontSize={20} fontWeight={400}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Typography>
          </Grid>
        </Grid>
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
  cabecalho: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    color: "rgb(107, 62, 149)",
    padding: "20px 0px 20px 0px",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    color: "rgb(107, 62, 149)",
    padding: "0px 100px 0px 100px",
    textDecoration: "none",
  },
  linkDestacado: {
    color: "rgb(107, 62, 149)",
    padding: "5px 100px 5px 100px",
    textDecoration: "none",
    backgroundColor: "rgb(234, 209, 238)",
    borderRadius: "60px",
  },
  corpo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  divEsquerda: {
    padding: "30px 0px 0px 50px",
  },
  ilustracao: {},
  divDireita: {
    padding: "110px 0px 0px 0px",
    margin: "0px 0px 0px 100px",
    width: "40%",
    color: "rgb(107, 62, 149)",
  },
}));

export default Home;
