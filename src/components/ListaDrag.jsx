import { DragDropContext } from "react-beautiful-dnd";
import initialData from "../util/initialData";
import { createContext, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { dequal } from "dequal";
import ModalFimDeJogo from "./ModalFimDeJogo";
import { useIsover } from "../context/RemainingTimeContext";
import Timer from "./Timer";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { DadosQuadrinhos } from "../util/DadosQuadrinhos";
import { Grid, Typography } from "@mui/material";

const ListaDrag = ({ setIsOrderCorrect, tipo }) => {
  const direcaoLista = (tipo) => {
    if (tipo === "nome") {
      return "column";
    }
    return "row";
  };

  const [state, setState] = useState(initialData());
  const { numbers, row } = state;
  const { isTimerOver, setIsTimerOver } = useIsover();
  const classes = useStyles({ direcao: direcaoLista(tipo) });


  const reset = () => {
    setState(initialData());
    setIsTimerOver(false);
  };

  const sortedNumbers = [...numbers].sort((a, b) => a.value - b.value);
  const isOrder = dequal(numbers, sortedNumbers);

  useEffect(() => {
    isOrder ? setIsOrderCorrect(true) : setIsOrderCorrect(false);
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

  const direction = () => {
    if (tipo === "nome") {
      console.log("nome");
      return "vertical";
    }
    return "horizontal";
  };

  const CardDrag = ({ number, index }) => {
    return (
      <Draggable index={index} draggableId={number.id}>
        {(provided) => (
          <Grid
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={classes.card}
          >
            {tipo === "nome" ? (
              <Typography>
                {DadosQuadrinhos[number.value - 1].nome} {number.value}
              </Typography>
            ) : (
              <img
                src={DadosQuadrinhos[number.value - 1].foto}
                width={"70%"}
                className={classes.imgQuadrinho}
              />
            )}
          </Grid>
        )}
      </Draggable>
    );
  };

  const ListaQuadrinhosDrag = ({ numbers, rowId }) => {
    return (
      <Droppable droppableId={rowId} direction={direction()}>
        {(provided) => (
          <div
            className={classes.lista}
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

  return (
    <>
      {isOrder && isTimerOver === false ? (
        <ModalFimDeJogo reset={reset} setState={setState} ganhou />
      ) : isTimerOver === true ? (
        <ModalFimDeJogo reset={reset} setState={setState} ganhou={false} />
      ) : (
        <>
          <DragDropContext onDragEnd={onDragEnd}>
            <OrderContext.Provider value={isOrder}>
              <ListaQuadrinhosDrag
                key={row.id}
                numbers={numbers}
                rowId={row.id}
              />
            </OrderContext.Provider>
          </DragDropContext>
          <Timer />
        </>
      )}
    </>
  );
};

const useStyles = makeStyles(() => ({
  lista: {
    display: "flex",
    alignItems: "center",
    flexDirection: ({ direcao }) => direcao,
  },
  imgQuadrinho: {

  },
  card: {

  }
}));

export default ListaDrag;
