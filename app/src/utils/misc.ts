import { ElementDefinition } from "cytoscape";

const colorMap = Object.seal({
  r: "red-edge",
  b: "blue-edge",
});

export function addStyles(colors: string, edges: ElementDefinition[]) {
  return edges.map((edge, idx) => {
    return {
      ...edge,
      classes: [colorMap[colors[idx]]],
    };
  });
}
