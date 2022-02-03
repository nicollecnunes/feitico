import { useIsover } from "../context/RemainingTimeContext";
import { useTimer } from "../hooks/useTimer";
import { Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const Clock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(107, 62, 149);
  width: 150px;
  height: 150px;
  border: 2px solid white;
  color: white;
  border-radius: 50%;
  font-size: 3rem;
  @media (max-width: 650px) {
    width: 100px;
    height: 100px;
  }
`;

const Timer = () => {
  const { timer, stop } = useTimer();
  const { setIsTimerOver } = useIsover();
  console.log("hello timer");

  useMemo(() => setIsTimerOver(false), []);

  useEffect(() => {
    if (timer === 0) {
      setIsTimerOver(true);
    }
  }, [timer]);
  const status = timer === 0 ? "Finished" : timer < 5 ? "Alert" : "Normal";
  return (
    <Container>
      <Clock onClick={() => stop()} status={status}>
        <Typography fontSize={60}>{timer}</Typography>
      </Clock>
    </Container>
  );
};

export default Timer;
