import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Number } from "../initialData";


const CardDrag = ({ number, index }) => {
  return (
    <Draggable index={index} draggableId={number.id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {number.value}
        </div>
      )}
    </Draggable>
  );
};

export default CardDrag;