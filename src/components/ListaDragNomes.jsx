import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import initialData from "../util/initialData";
import { createContext, useEffect, useState } from "react";
import { dequal } from "dequal";
import ModalFimDeJogo from "./ModalFimDeJogo";
import { useIsover } from "../context/RemainingTimeContext";
import Timer from "./Timer";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { DadosQuadrinhos } from "../util/DadosQuadrinhos";
import { Grid, Typography } from "@mui/material";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    height: 50vh;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
  }
  @media (max-width: 350px) {
    height: 50vh;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
  }
`;

const ListaDragNomes = ({ setIsOrderCorrect }) => {
  const [state, setState] = useState(initialData());
  const { numbers, row } = state;
  const { isTimerOver, setIsTimerOver } = useIsover();

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

  const NomeDrag = ({ number, index }) => {
    return (
      <Draggable index={index} draggableId={number.id}>
        {(provided) => (
          <Grid
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="cardnome"
          >
            {<Typography>{DadosQuadrinhos[number.value - 1].nome} {number.value}</Typography>}
          </Grid>
        )}
      </Draggable>
    );
  };

  const getListStyle = () => ({
    display: "flex",
    flexDirection: "column",
  });

  const ListaNomesDrag = ({ numbers, rowId }) => {
    return (
      <Droppable droppableId={rowId} direction={'vertical'}>
        {(provided) => (
          <div
            className="card_list"
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={getListStyle()}
          >
            {numbers.map((number, index) => {
              return <NomeDrag key={number.id} number={number} index={index} />;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  };

  return (
    <Main>
      {isOrder && isTimerOver === false ? (
        <ModalFimDeJogo reset={reset} setState={setState} ganhou />
      ) : isTimerOver === true ? (
        <ModalFimDeJogo reset={reset} setState={setState} ganhou={false} />
      ) : (
        <>
          <Grid direction="column">
            <DragDropContext onDragEnd={onDragEnd}>
              <OrderContext.Provider value={isOrder}>
                <ListaNomesDrag key={row.id} numbers={numbers} rowId={row.id} />
              </OrderContext.Provider>
            </DragDropContext>
          </Grid>
          <Bottom>
            <Timer />
          </Bottom>
        </>
      )}
    </Main>
  );
};

export default ListaDragNomes;
