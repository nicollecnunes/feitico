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
    <Grid sx={{ backgroundColor: "rgb(35, 6, 61)", minHeight: "100vh" }}>
      <FormControlLabel
        sx={{
          color: "white",
          fontFamily: "'Bohemian Soul', cursive",
          "& .MuiCheckbox-root": {
            color: "white", // Checkbox color
          },
        }}
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        fontFamily={"'Bohemian Soul', cursive"}
        label="Mostrar Fotos"
      />
      <Grid container justifyContent="center">
        {!!DadosHomenageados?.length &&
          DadosHomenageados?.map((q) => {
            return <QuadrinhoFixoHomenageado key={q.id} exaluna={q} mostrar={checked} />;
          })}
      </Grid>
    </Grid>
  );
}

export default ParedeHomenageados;
