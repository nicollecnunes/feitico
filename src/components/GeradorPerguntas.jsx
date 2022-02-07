import { ListaQuadrinhos } from "../util/ListaQuadrinhos";
const numeroTotalQuadrinhos = 27;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const inicioPerguntas = [
  "Onde nasceu a ",
  "Qual o ano da formatura da ",
  "Qual o curso da ",
];

export const montarQA = () => {
  const tipoQ = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  const qualExala =
    Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0;

  var Q = inicioPerguntas[tipoQ];
  var opcoesResposta = [];
  var opcaoCorreta;

  Q = Q + ListaQuadrinhos[qualExala].nome + "?";

  switch (tipoQ) {
    case 0:
      opcaoCorreta = ListaQuadrinhos[qualExala].cidade;
      opcoesResposta.push(ListaQuadrinhos[qualExala].cidade);
      opcoesResposta.push(
        ListaQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].cidade
      );
      opcoesResposta.push(
        ListaQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].cidade
      );
      break;
    case 1:
      opcaoCorreta = ListaQuadrinhos[qualExala].ano;
      opcoesResposta.push(ListaQuadrinhos[qualExala].ano);
      opcoesResposta.push(
        ListaQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].ano
      );
      opcoesResposta.push(
        ListaQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].ano
      );
      break;
    case 2:
      opcaoCorreta = ListaQuadrinhos[qualExala].curso;
      opcoesResposta.push(ListaQuadrinhos[qualExala].curso);
      opcoesResposta.push(
        ListaQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].curso
      );
      opcoesResposta.push(
        ListaQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].curso
      );
      break;
    default:
      break;
  }

  opcoesResposta = shuffle(opcoesResposta);;

  const novaQA = {
    pergunta: Q,
    opcoes: opcoesResposta,
    respostaCorreta: opcaoCorreta,
  };
  
  console.log(novaQA.opcoes);
  return novaQA;
};
