import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import React from "react";

const ItemJogo = ({ jogo }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Link to={jogo.rota} className={classes.link}>
        <Grid>{<img src={jogo.imagem} width={50} height={50} />}</Grid>
        <Typography fontSize={15} fontWeight={600}>
          {jogo.nome}
        </Typography>
        <br></br>
        <Typography fontSize={12} fontWeight={400}>
          {jogo.descricao}
        </Typography>
      </Link>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "20px",
    backgroundColor: "white",
    marginLeft: "20px",
  },
  link: {
    color: "rgb(107, 62, 149)",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "30px 30px 30px 30px",
  },
}));

export default ItemJogo;
