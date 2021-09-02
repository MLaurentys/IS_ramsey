import { PayloadAction } from "@reduxjs/toolkit";
import { ElementDefinition, Stylesheet, LayoutOptions } from "cytoscape";
import cytoscape from "cytoscape";
import { Reducer } from "react";

type CytoscapeState = {
  vertices: ElementDefinition[];
  edges: ElementDefinition[];
  styles: Stylesheet[];
  layout: LayoutOptions;
  cy: cytoscape.Core | undefined;
};

interface CytoscapeReducerMap {
  start: Reducer<CytoscapeState, PayloadAction>;
}

const initialState: CytoscapeState = {
  vertices: [
    {
      data: { id: "a" },
    },
    {
      data: { id: "b" },
    },
    {
      data: { id: "c" },
    },
  ],
  edges: [
    {
      data: { id: "ab", source: "a", target: "b" },
    },
    { data: { id: "ac", source: "a", target: "c" } },
  ],
  styles: [
    // the stylesheet for the graph
    {
      selector: "node",
      style: {
        "background-color": "#666",
        label: "data(id)",
      },
    },

    {
      selector: "edge",
      style: {
        width: 3,
        "line-color": "#ccc",
        "target-arrow-color": "#ccc",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
      },
    },
    {
      selector: "#ac",
      style: {
        width: 3,
        "line-color": "#f00",
        "target-arrow-color": "#ccc",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
      },
    },
  ],
  layout: {
    name: "grid",
    rows: 1,
  },
  cy: undefined,
};

export function StartCytoscape(
  state: CytoscapeState = initialState,
  action: PayloadAction
): CytoscapeState {
  if (action.type === "START_CYTOSCAPE") {
    return {
      ...state,
      cy: cytoscape({
        container: document.getElementById("cytoscape"),
        elements: [...state.vertices, ...state.edges],
        style: state.styles,
        layout: state.layout,
      }),
    };
  }
  return state;
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
