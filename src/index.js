import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <SnackbarProvider maxSnack={1}>
      <App />
    </SnackbarProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
