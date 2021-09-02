import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";

import { CytoscapeState } from "../../../types/types";
import { initialState } from "./initial_state";
import { StartCytoscape } from "./start";

interface CytoscapeReducerMap {
  [key: string]: Reducer<CytoscapeState, PayloadAction<any>>;
}

const handlers: CytoscapeReducerMap = Object.seal({
  start: StartCytoscape,
});

export function CytoscapeReducer(
  state: CytoscapeState = initialState,
  action: PayloadAction
): CytoscapeState {
  const splitAction = action.type.split("/");
  if (splitAction[0] !== "cyto") return state;
  return handlers[splitAction[1]](state, action);
}
