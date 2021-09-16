import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";

import { CytoscapeState } from "../../types/types";
import { graph6ToCyto } from "../graph6/format_converter";
import { initialState } from "./initial_state";
import { StartCytoscape } from "./start";

interface CytoscapeReducerMap {
  [key: string]: Reducer<CytoscapeState, PayloadAction<any>>;
}

function NewGraphFromInput(state: CytoscapeState, action: PayloadAction<any>) {
  graph6ToCyto(action.payload.value, state.cy);
  return state;
}

const handlers: CytoscapeReducerMap = Object.seal({
  start: StartCytoscape,
  new: NewGraphFromInput,
});

export function CytoscapeReducer(
  state: CytoscapeState = initialState,
  action: PayloadAction
): CytoscapeState {
  const splitAction = action.type.split("/");
  if (splitAction[0] !== "cyto") return state;
  return handlers[splitAction[1]](state, action);
}
