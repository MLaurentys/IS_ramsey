/*
 * This file defines the entry point for the application. It creates and renders
 *   the application.
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(
  //<React.StrictMode>
  <App />,
  //</React.StrictMode>,
  document.getElementById("root")
);
