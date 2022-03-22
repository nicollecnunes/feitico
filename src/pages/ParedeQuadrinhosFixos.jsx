import { Grid } from "@mui/material";
import React from "react";
import QuadrinhoFixoExAluna from "../components/QuadrinhoFixoExAluna";
import QuadrinhoFixoHomenageado from "../components/QuadrinhoFixoHomenageado";
import { DadosQuadrinhos } from "../util/DadosQuadrinhos";
import { DadosHomenageados } from "../util/DadosHomenageados";

function ParedeQuadrinhosFixos(isExaluna) {
  console.log(isExaluna);
  return (
    <Grid container justifyContent="center">
      {!!DadosQuadrinhos?.length &&
        DadosQuadrinhos?.map((q) => {
          return <QuadrinhoFixoExAluna key={q.posicao} exaluna={q} />;
        })}
    </Grid>
  );
}

export default ParedeQuadrinhosFixos;
