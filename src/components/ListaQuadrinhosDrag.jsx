import CardDrag from "./CardDrag";
import initialData from "../initialData";
import { Numbers } from "../initialData";
import { Droppable } from "react-beautiful-dnd";


const direction = () => {
  return window.innerWidth > 650 ? "horizontal" : "vertical";
};

const ListaQuadrinhosDrag = ({ numbers, rowId }) => {
  return (
    <Droppable droppableId={rowId} direction={direction()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {numbers.map((number, index) => {
            return <CardDrag key={number.id} number={number} index={index} />;
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ListaQuadrinhosDrag;