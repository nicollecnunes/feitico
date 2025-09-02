import { useEffect, useRef, useState, useCallback } from "react";

const useTimer = () => {
  const initialTime = useCallback(() => {
    return 30;
  }, []);

  const [paused, setPaused] = useState(false);
  const [timer, setTimer] = useState(initialTime);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused || timer === 0) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timer, paused, initialTime]);

  const stop = () => setPaused(true);

  return { timer, stop };
};

export { useTimer };
