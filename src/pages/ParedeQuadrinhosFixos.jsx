import React from "react";
import Parede from "../components/Parede";
import { DadosQuadrinhos } from "../util/DadosQuadrinhos";

function ParedeQuadrinhosFixos() {
  return <Parede dados={DadosQuadrinhos} />;
}

export default ParedeQuadrinhosFixos;
