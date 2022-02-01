import { nanoid } from "nanoid";


const initialData = () => {
  const length = window.innerHeight > 1000 || window.innerWidth > 650 ? 10 : 7;
  const numbers = Array(length)
    .fill(0)
    .map((elem, index) => {
      const randomNumber = Math.floor(Math.random() * 100);
      const id = nanoid();
      const newItem = {
        id,
        value: randomNumber,
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