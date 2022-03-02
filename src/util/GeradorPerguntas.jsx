import { DadosQuadrinhos } from "./DadosQuadrinhos";
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

const gerarInicioDePergunta = (q) => {
  return inicioPerguntas[q];
};

const gerarTipoPergunta = () => {
  return Math.floor(Math.random() * (2 - 0 + 1)) + 0; //0 cidade, 1 ano, 2 curso
};

const selecionarExAluna = () => {
  return Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0;
};

export const montarQA = () => {
  const qualExala = selecionarExAluna();
  const tipoDePergunta = gerarTipoPergunta();
  var Q =
    gerarInicioDePergunta(tipoDePergunta) +
    DadosQuadrinhos[qualExala].nome +
    "?";

  var opcoesResposta = [];
  var opcaoCorreta;

  switch (tipoDePergunta) {
    case 0:
      opcaoCorreta = DadosQuadrinhos[qualExala].cidade;
      opcoesResposta.push(DadosQuadrinhos[qualExala].cidade);
      opcoesResposta.push(
        DadosQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].cidade
      );
      opcoesResposta.push(
        DadosQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].cidade
      );
      break;
    case 1:
      opcaoCorreta = DadosQuadrinhos[qualExala].ano;
      opcoesResposta.push(DadosQuadrinhos[qualExala].ano);
      opcoesResposta.push(
        DadosQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].ano
      );
      opcoesResposta.push(
        DadosQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].ano
      );
      break;
    case 2:
      opcaoCorreta = DadosQuadrinhos[qualExala].curso;
      opcoesResposta.push(DadosQuadrinhos[qualExala].curso);
      opcoesResposta.push(
        DadosQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].curso
      );
      opcoesResposta.push(
        DadosQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].curso
      );
      break;
    default:
      break;
  }

  opcoesResposta = shuffle(opcoesResposta);

  const novaQA = {
    pergunta: Q,
    opcoes: opcoesResposta,
    respostaCorreta: opcaoCorreta,
  };

  return novaQA;
};
