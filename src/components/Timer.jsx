import { useIsover } from "../context/RemainingTimeContext";
import { useTimer } from "../hooks/useTimer";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { styled } from "@mui/system";

const Container = styled('div')({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "50px",
});
const Clock = styled('div')(({
  theme,
  status
}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(107, 62, 149)",
  width: "150px",
  height: "150px",
  border: "2px solid white",
  color: "white",
  borderRadius: "50%",
  fontSize: "3rem",
  "@media (max-width: 650px)": {
    width: "100px",
    height: "100px",
  },
}));

const Timer = () => {
  const { timer, stop } = useTimer();
  const { setIsTimerOver } = useIsover();

  useEffect(() => {
    setIsTimerOver(false);
    if (timer === 0) {
      setIsTimerOver(true);
    }
  }, [timer, setIsTimerOver]);
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
