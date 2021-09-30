import { PayloadCytoscapeStart } from "../../types/types";
import { CytoscapeState } from "../../types/types";
import { PayloadAction } from "@reduxjs/toolkit";
import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";
import fcose from "cytoscape-fcose";
cytoscape.use(coseBilkent);
cytoscape.use(fcose);

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
