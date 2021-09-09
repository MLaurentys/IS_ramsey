import { Core } from "cytoscape";

export function CytoToGraph6(cyto: Core): String {
  if (cyto === undefined) return "";
  const vertices = cyto.nodes().map((node) => node.data().id);
  const numOfBits = Math.round(vertices.length * (vertices.length - 1)) / 2;
  const bitsToAdd = (6 - (numOfBits % 6)) % 6;
  //console.log("Number of bits: " + numOfBits);
  // Iterates through upper triagle and fills bit array
  let formated = ""; //TODO: find Bit Array Lib
  for (let i = 0; i < vertices.length; ++i) {
    const edgesFromVert = new Set(
      cyto
        .edges(`edge[source="${vertices[i]}"]`)
        .map((edge) => edge.data().target)
    );
    for (let j = i + 1; j < vertices.length; ++j) {
      if (edgesFromVert.has(vertices[j])) formated += "1";
      else formated += "0";
    }
  }
  for (let i = 0; i < bitsToAdd; ++i) formated += "0";
  return formated;
}
