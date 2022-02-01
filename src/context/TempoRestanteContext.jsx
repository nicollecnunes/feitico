import { createContext, useContext, useState } from "react";

const TempoRestanteContext = createContext(null);

const AcabouProvider = (props) => {
  const [tempoAcabou, setTempoAcabou] = useState(false);

  const value = { tempoAcabou, setTempoAcabou };
  return <TempoRestanteContext.Provider value={value} {...props} />;
};

const useAcabou = () => {
  const context = useContext(TempoRestanteContext);

  if (!context) {
    throw new Error("erro");
  }

  return context;
};

export { useAcabou, AcabouProvider };
