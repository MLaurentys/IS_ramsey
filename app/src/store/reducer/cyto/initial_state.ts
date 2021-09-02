import { CytoscapeState } from "../../../types/types";

export const initialState: CytoscapeState = {
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
