import { CytoscapeState } from "../../types/types";
// TODO: use nauty G-6
export const initialState: CytoscapeState = {
  layout: {
    name: "grid",
    rows: 1,
  },
  cy: undefined,
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
    {
      data: { id: "d" },
    },
    {
      data: { id: "e" },
    },
  ],
  edges: [
    { classes: "blue-edge", data: { id: "ac", source: "a", target: "c" } },
    {
      classes: "blue-edge",
      data: { id: "ae", source: "a", target: "e" },
    },
    {
      data: { id: "bd", source: "b", target: "d" },
    },
    {
      data: { id: "de", source: "d", target: "e" },
    },
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
        "curve-style": "bezier",
      },
    },
    {
      selector: ".red-edge",
      style: {
        "line-color": "#ff0000",
      },
    },
    {
      selector: ".blue-edge",
      style: {
        "line-color": "#0000ff",
      },
    },
    {
      selector: "#ac",
      style: {
        width: 3,
        "line-color": "#f00",
        "curve-style": "bezier",
      },
    },
  ],
};
