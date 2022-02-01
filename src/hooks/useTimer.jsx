import { useEffect, useRef, useState } from "react";

const useTimer = () => {
  //   Calculate timer
  const initialTime = () => {
    return 30;
  };

  const [paused, setPaused] = useState(false);
  const [timer, setTimer] = useState(initialTime);
  const callRef = useRef(0);

  useEffect(() => {
    const handleTimer = () => {
      callRef.current++;
      // console.log(`step ${callRef.current}paused is ===>`, paused);

      if (paused || timer === 0) {
        clearInterval(timerInterval);
      } else if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    };
    const timerInterval = setInterval(handleTimer, 1000);
    return () => clearInterval(timerInterval);
  }, [timer, paused]);

  const stop = () => setPaused(true);

  return { timer, stop };
};

export { useTimer };
