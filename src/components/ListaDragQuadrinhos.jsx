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
import { Grid } from "@mui/material";

const Container = styled.div`
  padding: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    padding: 30px;
  }
  @media (max-width: 1400px) {
    padding: 10px;
  }
  @media (max-width: 1100px) {
    width: 97vw;
  }
  @media (max-width: 650px) {
    width: max-content;
  }
`;
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

const ListaDragQuadrinhos = ({ setIsOrderCorrect }) => {
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

  const direction = () => {
    return window.innerWidth > 650 ? "horizontal" : "vertical";
  };

  const CardDrag = ({ number, index }) => {
    return (
      <Draggable index={index} draggableId={number.id}>
        {(provided) => (
          <Grid
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="card"
          >
            {
              <img
                src={DadosQuadrinhos[number.value - 1].foto}
                width={"70%"}
                className="imagemquadrinho"
              />
            }
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
            className="card_list"
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
    <Main>
      {isOrder && isTimerOver === false ? (
        <ModalFimDeJogo reset={reset} setState={setState} ganhou />
      ) : isTimerOver === true ? (
        <ModalFimDeJogo reset={reset} setState={setState} ganhou={false} />
      ) : (
        <>
          <DragDropContext onDragEnd={onDragEnd}>
            <Container>
              <OrderContext.Provider value={isOrder}>
                <ListaQuadrinhosDrag
                  key={row.id}
                  numbers={numbers}
                  rowId={row.id}
                />
              </OrderContext.Provider>
            </Container>
          </DragDropContext>
          <Bottom>
            <Timer />
          </Bottom>
        </>
      )}
    </Main>
  );
};

export default ListaDragQuadrinhos;
