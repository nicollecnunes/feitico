import { Grid } from "@mui/material";
import React from "react";
import QuadrinhoFixoExAluna from "../components/QuadrinhoFixoExAluna";
import QuadrinhoFixoHomenageado from "../components/QuadrinhoFixoHomenageado";
import { DadosQuadrinhos } from "../util/DadosQuadrinhos";
import { DadosHomenageados } from "../util/DadosHomenageados";

function ParedeHomenageados() {
  return (
    <Grid container justifyContent="center">
      {!!DadosHomenageados?.length &&
        DadosHomenageados?.map((q) => {
          return <QuadrinhoFixoHomenageado key={q.posicao} exaluna={q} />;
        })}
    </Grid>
  );
}

export default ParedeHomenageados;
