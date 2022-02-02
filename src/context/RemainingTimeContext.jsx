import { createContext, useContext, useState } from "react";

const RemainingTimeContext = createContext(null);

const IsOverProvider = (props) => {
  const [isTimerOver, setIsTimerOver] = useState(false);
  console.log("isOverCalled");
  console.log(isTimerOver);

  const value = { isTimerOver, setIsTimerOver };
  return <RemainingTimeContext.Provider value={value} {...props} />;
};

const useIsover = () => {
  const context = useContext(RemainingTimeContext);
  if (!context) {
    throw new Error("This hook must be used inside a isOverProvider");
  }

  return context;
};

export { useIsover, IsOverProvider };