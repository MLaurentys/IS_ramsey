import { PayloadCytoscapeStart } from "../../types/types";
import { CytoscapeState } from "../../types/types";
import { PayloadAction } from "@reduxjs/toolkit";
import cytoscape from "cytoscape";

export function StartCytoscape(
  state: CytoscapeState,
  action: PayloadAction<PayloadCytoscapeStart>
): CytoscapeState {
  return {
    ...state,
    cy: cytoscape({
      container: action.payload.rootElement,
      elements: [...state.vertices, ...state.edges],
      style: state.styles,
      layout: state.layout,
    }),
  };
}
