import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import initialData from "../initialData";
import { createContext, useEffect, useState } from "react";
import { dequal } from "dequal";
import Ganhou from "./Ganhou";
import { useIsover } from "../context/RemainingTimeContext";
import Perdeu from "./Perdeu";
import Timer from "./Timer";
import { Droppable, Draggable } from "react-beautiful-dnd";
import n1 from "../images/quadrinhos/n1.jpg";
import n2 from "../images/quadrinhos/n2.jpg";
import n3 from "../images/quadrinhos/n3.jpg";
import n4 from "../images/quadrinhos/n4.jpg";
import n5 from "../images/quadrinhos/n5.jpg";
import n6 from "../images/quadrinhos/n6.jpg";
import n7 from "../images/quadrinhos/n7.jpg";
import n8 from "../images/quadrinhos/n8.jpg";
import n9 from "../images/quadrinhos/n9.jpg";
import n10 from "../images/quadrinhos/n10.jpg";
import n11 from "../images/quadrinhos/n11.jpg";
import n12 from "../images/quadrinhos/n12.jpg";
import n13 from "../images/quadrinhos/n13.jpg";
import n14 from "../images/quadrinhos/n14.jpg";
import n15 from "../images/quadrinhos/n15.jpg";
import n16 from "../images/quadrinhos/n16.jpg";
import n17 from "../images/quadrinhos/n17.jpg";
import n18 from "../images/quadrinhos/n18.jpg";
import n19 from "../images/quadrinhos/n19.jpg";
import n20 from "../images/quadrinhos/n20.jpg";
import n21 from "../images/quadrinhos/n21.jpg";
import n22 from "../images/quadrinhos/n22.jpg";
import n23 from "../images/quadrinhos/n23.jpg";
import n24 from "../images/quadrinhos/n24.jpg";
import n25 from "../images/quadrinhos/n25.jpg";
import n26 from "../images/quadrinhos/n26.jpg";
import n27 from "../images/quadrinhos/n27.jpg";
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

const relacaoQuadrinhos = [
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
  n8,
  n9,
  n10,
  n11,
  n12,
  n13,
  n14,
  n15,
  n16,
  n17,
  n18,
  n19,
  n20,
  n21,
  n22,
  n23,
  n24,
  n25,
  n26,
  n27,
];

const ListaDrag = ({ setIsOrderCorrect }) => {
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
                src={relacaoQuadrinhos[number.value - 1]}
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
        <Ganhou reset={reset} />
      ) : isTimerOver === true ? (
        <Perdeu setState={setState} reset={reset} />
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

export default ListaDrag;
