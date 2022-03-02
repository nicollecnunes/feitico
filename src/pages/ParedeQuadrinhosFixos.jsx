import { Grid } from "@mui/material";
import React from "react";
import QuadrinhoFixoParede from "../components/QuadrinhoFixoParede";
import { DadosQuadrinhos } from "../util/DadosQuadrinhos";

function ParedeQuadrinhosFixos() {
  return (
    <Grid container justifyContent="center">
      {!!DadosQuadrinhos?.length &&
        DadosQuadrinhos?.map((q) => {
          return <QuadrinhoFixoParede key={q.posicao} exaluna={q} />;
        })}
    </Grid>
  );
}

export default ParedeQuadrinhosFixos;
