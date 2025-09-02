import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import { ListaRepublicas } from "../util/ListaRepublicas";

const StyledGrid = styled(Grid)(({ theme }) => ({
  height: "100%",
  width: "100%",
  alignContent: "center",
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: "rgb(35, 6, 61)", // Light background for the page
}));

const StyledHymnContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
  backgroundColor: "white",
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  maxWidth: 800,
  margin: "auto", // Center the container
}));

const StyledVerse = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  lineHeight: 1.6,
  color: "#333",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontFamily: "'Bohemian Soul', cursive",
  color: "rgb(35, 6, 61)",
  fontWeight: "bold",
}));

function TelaHino() {
  let { id } = useParams();

  const repAtual = ListaRepublicas.find((rep) => rep.id === parseInt(id));
  const hinoFormatado = repAtual.hino.split(/\r?\n/);

  return (
    <StyledGrid container direction="column">
      <StyledHymnContainer>
        <StyledTitle variant="h4">{repAtual.nome}</StyledTitle>
        {hinoFormatado.map((parte, index) => {
          return (
            <StyledVerse key={index} variant="body1">
              {parte}
            </StyledVerse>
          );
        })}
      </StyledHymnContainer>
    </StyledGrid>
  );
}

export default TelaHino;
