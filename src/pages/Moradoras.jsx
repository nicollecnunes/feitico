import React from "react";
import Parede from "../components/Parede";
import { DadosMoradoras } from "../util/DadosMoradoras";
import { DadosQuadrinhos } from "../util/DadosQuadrinhos";

function Moradoras() {
  return <Parede dados={DadosMoradoras} posicaoOffset={DadosQuadrinhos.length} />;
}

export default Moradoras;
