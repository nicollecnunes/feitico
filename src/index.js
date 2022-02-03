import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
