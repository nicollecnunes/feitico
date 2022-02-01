import { DragDropContext, DropResult } from "react-beautiful-dnd";
import ListaQuadrinhosDrag from "../components/ListaQuadrinhosDrag";
import initialData from "../initialData";
import { createContext, useEffect, useMemo, useState } from "react";
import { dequal } from "dequal";
import Ganhou from "./Ganhou";
import { useAcabou } from "../context/TempoRestanteContext";
import Perdeu from "./Perdeu";
import Timer from "./Timer";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const ListaDrag = ({ setOrdemEstaCorreta }) => {
  const [state, setState] = useState(initialData());
  const { numbers, row } = state;
  const { tempoAcabou, setTempoAcabou } = useAcabou();

  const reset = () => {
    setState(initialData());
    setTempoAcabou(false);
  };

  const sortedNumbers = [...numbers].sort((a, b) => a.value - b.value);
  const isOrder = dequal(numbers, sortedNumbers);

  useEffect(() => {
    isOrder ? setOrdemEstaCorreta(true) : setOrdemEstaCorreta(false);
  }, [isOrder]);
  const OrderContext = createContext(isOrder);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    const newList = [...numbers];
    newList.splice(source.index, 1);
    newList.splice(destination.index, 0, numbers[source.index]);
    setState({ ...state, numbers: newList });
  };

  const handleClickQuit = () => {
    
  };

  return (
    <>
      {isOrder && tempoAcabou === false ? (
        <Ganhou reset={reset} />
      ) : tempoAcabou === true ? (
        <Perdeu setState={setState} reset={reset} />
      ) : (
        <>
          <DragDropContext onDragEnd={onDragEnd}>
            <Grid>
              <OrderContext.Provider value={isOrder}>
                <ListaQuadrinhosDrag key={row.id} numbers={numbers} rowId={row.id} />
              </OrderContext.Provider>
            </Grid>
          </DragDropContext>
          <Grid>
            <Timer />
            <Button onClick={handleClickQuit}>Quit
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default ListaDrag;