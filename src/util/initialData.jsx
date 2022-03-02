import { nanoid } from "nanoid";

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

  const start =
    Math.floor(Math.random() * (tetoAleatorio - pisoAleatorio + 1)) +
    pisoAleatorio;
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
