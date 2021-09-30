/*
 * This file defines the entry point for the application. It creates and renders
 *   the application.
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// The following line is required by webpack. For some reason React is not
//  added to module dependencies, but instead, tried to access from the global
//  windows element
window.React = React;

// Strict Mode is disabled in production because redux makes use of non-strict
//  stuff and those warnings are annoying during development
ReactDOM.render(
  //<React.StrictMode>
  <App />,
  //</React.StrictMode>,
  document.getElementById("root")
);
