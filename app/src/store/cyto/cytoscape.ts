import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";
import { Core, ElementDefinition } from "cytoscape";
import { CytoscapeState } from "../../types/types";
import { graph6ToCyto } from "../../utils/g6_cyto_converter";
import { initialState } from "./initial_state";
import { StartCytoscape } from "./start";
import { addStyles } from "../../utils/misc";

function buildNewGraph(
  graphInfo:any,
  cyto: Core
) {
  console.log("cyto2", cyto);
  // Removes all vertices and, therefore, all edges
  cyto.remove("node");
  cyto.add(graphInfo.vertices);
  cyto.add(graphInfo.edges);
  cyto
    .layout({
      name: "fcose",
      // @ts-ignore
      randomize: false,
    })
    .run();
}

interface CytoscapeReducerMap {
  [key: string]: Reducer<CytoscapeState, PayloadAction<any>>;
}

function NewGraphFromInput(state: CytoscapeState, action: PayloadAction<any>) {
  const { vertices, edges } = graph6ToCyto(action.payload.value);
  buildNewGraph({vertices, edges}, state.cy);
  return state;
}

const handlers: CytoscapeReducerMap = Object.seal({
  start: StartCytoscape,
  new: NewGraphFromInput,
  renderStep: (state: any, action: any) => {
    const { vertices, edges } = graph6ToCyto(action.payload.graph);
    const coloredEdges = addStyles(action.payload.colors, edges);
    buildNewGraph({vertices, edges}, state.cy);
    return state;
  },
});

export function CytoscapeReducer(
  state: CytoscapeState = initialState,
  action: PayloadAction
): CytoscapeState {
  const splitAction = action.type.split("/");
  if (splitAction[0] !== "cyto") return state;
  return handlers[splitAction[1]](state, action);
}
