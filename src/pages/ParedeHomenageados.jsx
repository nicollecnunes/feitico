import { Grid, FormControlLabel, Checkbox } from "@mui/material";
import React from "react";
import QuadrinhoFixoHomenageado from "../components/QuadrinhoFixoHomenageado";
import { DadosHomenageados } from "../util/DadosHomenageados";

function ParedeHomenageados() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Mostrar Fotos"
      />
      <Grid container justifyContent="center">
        {!!DadosHomenageados?.length &&
          DadosHomenageados?.map((q) => {
            return <QuadrinhoFixoHomenageado key={q.posicao} exaluna={q} mostrar={checked} />;
          })}
      </Grid>
    </Grid>
  );
}

export default ParedeHomenageados;
