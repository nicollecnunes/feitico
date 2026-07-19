import { Checkbox, Grid, FormControlLabel } from "@mui/material";
import React from "react";
import QuadrinhoFixo from "./QuadrinhoFixo";

function Parede({ dados, posicaoOffset = 0 }) {
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
            color: "white",
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
        {dados.map((pessoa, index) => (
          <QuadrinhoFixo
            key={index}
            pessoa={pessoa}
            posicao={posicaoOffset + index + 1}
            mostrar={checked}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Parede;
