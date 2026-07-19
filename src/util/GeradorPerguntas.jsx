import { DadosQuadrinhos } from "./DadosQuadrinhos";

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

const camposPorTipo = ["cidade", "ano", "curso"];

const aleatorio = () => Math.floor(Math.random() * DadosQuadrinhos.length);

export const montarQA = () => {
  const exAluna = DadosQuadrinhos[aleatorio()];
  const tipoDePergunta = Math.floor(Math.random() * inicioPerguntas.length);
  const campo = camposPorTipo[tipoDePergunta];

  const opcaoCorreta = exAluna[campo];
  const opcoesResposta = shuffle([
    opcaoCorreta,
    DadosQuadrinhos[aleatorio()][campo],
    DadosQuadrinhos[aleatorio()][campo],
  ]);

  return {
    pergunta: inicioPerguntas[tipoDePergunta] + exAluna.nome + "?",
    opcoes: opcoesResposta,
    respostaCorreta: opcaoCorreta,
  };
};
