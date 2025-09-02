import { Checkbox, Grid, FormControlLabel } from "@mui/material";
import React from "react";
import QuadrinhoFixoExAluna from "../components/QuadrinhoFixoExAluna";
import { DadosQuadrinhos } from "../util/DadosQuadrinhos";

function ParedeQuadrinhosFixos(isExaluna) {
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
        label="Mostrar Fotos"
        fontFamily={"'Bohemian Soul', cursive"}
      />

      <Grid container justifyContent="center">
        {!!DadosQuadrinhos?.length &&
          DadosQuadrinhos?.map((q) => {
            return <QuadrinhoFixoExAluna key={q.posicao} exaluna={q} mostrar={checked}/>;
          })}
      </Grid>
    </Grid>
  );
}

export default ParedeQuadrinhosFixos;
