import { nanoid } from "nanoid";

const quadrinhos = [
  {
    posicao: 1,
    nome: "Katia Maria de Oliveira",
    curso: "Farmácia",
    ano: 2000,
    cidade: "Divinópolis - MG",
  },
  {
    posicao: 2,
    nome: "Jussara Vieira e Silva",
    curso: "Ciência da Computação",
    ano: 2000,
    cidade: "Conselheiro Lafaiete - MG",
  },
  {
    posicao: 3,
    nome: "Daniela de Morais Pereira",
    curso: "Farmácia",
    ano: 2000,
    cidade: "Divinópolis - MG",
  },
  {
    posicao: 4,
    nome: "Bianca Mesquita Pereira",
    curso: "Nutrição",
    ano: 2003,
    cidade: "Montes Claros - MG",
  },
  {
    posicao: 5,
    nome: "Daniela Cristina de Castro",
    curso: "Eng. de Produção",
    ano: 2003,
    cidade: "Guaratinguetá - SP",
  },
  {
    posicao: 6,
    nome: "Anielly Garcia de Freitas",
    curso: "Farmácia",
    ano: 2004,
    cidade: "Jataí - GO",
  },
  {
    posicao: 7,
    nome: "Ludmilla Santos de Barros",
    curso: "Direito",
    ano: 2005,
    cidade: "Alegre - ES",
  },
  {
    posicao: 8,
    nome: "Samila Rafaela Pereira Nardy",
    curso: "Ciências Biológicas",
    ano: 2005,
    cidade: "Ipatinga - MG",
  },
  {
    posicao: 9,
    nome: "Alice Betim Borges",
    curso: "Farmácia",
    ano: 2007,
    cidade: "Nova Venécia - ES",
  },
  {
    posicao: 10,
    nome: "Marina Mansur Ferrari",
    curso: "Eng. de Produção",
    ano: 2008,
    cidade: "Vitória - ES",
  },
  {
    posicao: 11,
    nome: "Tatiana Pereira Freitas",
    curso: "Turismo",
    ano: 2008,
    cidade: "São José dos Campos - SP",
  },
  {
    posicao: 12,
    nome: "Quênia Goulart Ferreira",
    curso: "Eng. Ambiental",
    ano: 2008,
    cidade: "São José dos Campos - SP",
  },
  {
    posicao: 13,
    nome: "Nathália Sette Câmara Magalhães",
    curso: "Eng. Metalúrgica",
    ano: 2010,
    cidade: "Belo Horizonte - MG",
  },
  {
    posicao: 14,
    nome: "Luciana Portugal Menezes",
    curso: "Eng. Ambiental",
    ano: 2011,
    cidade: "Coqueiral - MG",
  },
  {
    posicao: 15,
    nome: "Ana Caroline Arpini Reis",
    curso: "Turismo",
    ano: 2011,
    cidade: "Guarapari - ES",
  },
  {
    posicao: 16,
    nome: "Flaviana Esquirio Gaggiato",
    curso: "Eng. Civil",
    ano: 2011,
    cidade: "Ipatinga - MG",
  },
  {
    posicao: 17,
    nome: "Karen Leite de Queiroz",
    curso: "Eng. Ambiental",
    ano: 2011,
    cidade: "Vitória - ES",
  },
  {
    posicao: 18,
    nome: "Pâmela Cristina de Oliveira",
    curso: "Eng. Civil",
    ano: 2011,
    cidade: "Conselheiro Lafaiete - MG",
  },
  {
    posicao: 19,
    nome: "Sheila Michele dos Santos",
    curso: "Administração",
    ano: 2012,
    cidade: "São Joaquim da Barra - SP",
  },
  {
    posicao: 20,
    nome: "Thaís Corrêa Santos",
    curso: "Jornalismo",
    ano: 2015,
    cidade: "Taubaté - SP",
  },
  {
    posicao: 21,
    nome: "Tamiris de Oliveira Branco",
    curso: "Eng. de Produção",
    ano: 2016,
    cidade: "Guaratinguetá - SP",
  },
  {
    posicao: 22,
    nome: "Larissa Marques Souza",
    curso: "Eng. de Minas",
    ano: 2016,
    cidade: "São Gotardo - MG",
  },
  {
    posicao: 23,
    nome: "Isadora Mikovic Guimarães",
    curso: "Administração",
    ano: 2016,
    cidade: "Volta Redonda - RJ",
  },
  {
    posicao: 24,
    nome: "Marina Franco Negreiros",
    curso: "Eng. Civil",
    ano: 2017,
    cidade: "São Lourenço - MG",
  },
  {
    posicao: 25,
    nome: "Ana Carolina Faria Oliveira Morais",
    curso: "Eng. de Minas",
    ano: 20118,
    cidade: "Itabira - MG",
  },
  {
    posicao: 26,
    nome: "Dilaina da Silva Santos",
    curso: "Farmácia",
    ano: 2019,
    cidade: "Ribeirão Preto - SP",
  },
  {
    posicao: 27,
    nome: "Mayara Bueno Ezequiel",
    curso: "Filosofia",
    ano: 2019,
    cidade: "Ribeirão Preto - SP",
  },
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const initialData = () => {
  const numeroTotalQuadrinhos = 27;
  const quantidadeQuadrinhosJogo = 6;
  const tetoAleatorio = numeroTotalQuadrinhos - quantidadeQuadrinhosJogo;
  const pisoAleatorio = 1;

  const start = Math.floor(Math.random() * (tetoAleatorio - pisoAleatorio + pisoAleatorio)) + pisoAleatorio;
  const end = start + 6;

  var listRandom = Array();

  for (var i = start; i < end; i++) {
    listRandom.push(i); // 1 2 3 4
  }
  listRandom = shuffle(listRandom);

  const numbers = Array(quantidadeQuadrinhosJogo)
    .fill(0)
    .map((elem, index) => {
      const id = nanoid();
      console.log("seria:", listRandom[index]);
      const newItem = {
        id,
        value: listRandom[index],
      };
      return newItem;
    });

  const listOrder = numbers.map((elem) => elem.id);
  const row = {
    title: "Numbers",
    id: "row-1",
    listOrder,
  };
  return {
    numbers,
    row,
  };
};

export default initialData;
