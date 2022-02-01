import { useEffect, useMemo } from "react";
import { useAcabou } from "../context/TempoRestanteContext";
import { useTimer } from "../hooks/useTimer";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


const Timer = () => {
  const { timer, stop } = useTimer();
  const { setTempoAcabou } = useAcabou();

  useMemo(() => setTempoAcabou(false), []);

  useEffect(() => {
    if (timer === 0) {
      setTempoAcabou(true);
    }
  }, [timer]);
  const status = timer === 0 ? "Finished" : timer < 5 ? "Alert" : "Normal";
  return (
    <Grid>
      <Button onClick={() => stop()}>
        {timer}
      </Button>
    </Grid>
  );
};

export default Timer;
