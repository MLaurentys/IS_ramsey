import { CytoscapeState } from "../../types/types";
// TODO: use nauty G-6
export const initialState: CytoscapeState = {
  layout: {
    name: "cose-bilkent",
    // @ts-ignore
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
    {
      data: { id: "ac", source: "a", target: "c" },
    },
    {
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
      selector: ".white-edge",
      style: {
        "line-color": "#ffffff",
      },
    },
    {
      selector: ".gray-edge",
      style: {
        "line-color": "#cccccc",
      },
    },
  ],
};
