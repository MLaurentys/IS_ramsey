import cytoscape, { Core, ElementDefinition } from "cytoscape";

//----------------
// Cyto to graph6
//----------------

function getEncodedGraphLen(cyto: Core): string {
  const nVerts = cyto.nodes().length;
  if (0 <= nVerts && nVerts <= 62) return String.fromCharCode(nVerts + 63);
  throw "graph has too many vertices";
}

function getUpperTriangle(cyto: Core): string {
  const vertices = cyto.nodes().map((node) => node.data().id);
  let upperTriangle = {};
  let formated = ""; //TODO: find Bit Array Lib
  for (let i = 0; i < vertices.length; ++i) {
    const edgesFromVert = new Set(
      cyto
        .edges(`edge[source="${vertices[i]}"]`)
        .map((edge) => edge.data().target)
    );
    for (let j = i + 1; j < vertices.length; ++j) {
      upperTriangle[`${i}_${j}`] = Number(edgesFromVert.has(vertices[j]));
    }
  }
  for (let j = 1; j < vertices.length; j++)
    for (let i = 0; i < j; i++) formated += upperTriangle[`${i}_${j}`];
  const bitsToAdd = (6 - (formated.length % 6)) % 6;
  for (let i = 0; i < bitsToAdd; ++i) formated += "0";
  return formated;
}

function decimalFromBinary(upTri: string): number[] {
  let decimals = [];
  for (let i = 0; i < upTri.length; i += 6)
    decimals.push(parseInt(upTri.slice(i, i + 6), 2));
  return decimals;
}

function decimalsToFormatedString(decimals: number[]): string {
  return decimals.map((decimal) => String.fromCharCode(decimal + 63)).join("");
}

export function CytoToGraph6(cyto: Core): string {
  if (cyto === undefined) return "";
  const graphLenEncoded = getEncodedGraphLen(cyto);
  const upperTriangle = getUpperTriangle(cyto);
  const decimals = decimalFromBinary(upperTriangle);
  return graphLenEncoded + decimalsToFormatedString(decimals);
}

//----------------
// Graph6 to cyto
//----------------

function padBinary(bin: string): string {
  return "0".repeat(6 - bin.length) + bin;
}

function getDecimals(graph6Str) {
  return graph6Str.split("").map((char) => char.charCodeAt(0));
}

function getBinaryRepresentation(graph6Str: string) {
  return getDecimals(graph6Str)
    .map((num) => (num - 63).toString(2))
    .map((bin) => padBinary(bin))
    .join("");
}

function getGraph(numVerts: number, binUpper: string): any {
  const newVerts: ElementDefinition[] = [];
  const newEdges: ElementDefinition[] = [];
  for (let i = 0; i < numVerts; ++i)
    newVerts.push({
      group: "nodes",
      data: { id: `${i}` },
    });
  let aux = 0;
  for (let j = 1; j < numVerts; ++j)
    for (let i = 0; i < j; ++i)
      if (binUpper[aux++] === "1")
        newEdges.push({
          group: "edges",
          data: { id: `${i}-${j}`, source: `${i}`, target: `${j}` },
        });
  return { vertices: newVerts, edges: newEdges };
}

export function graph6ToCyto(representation: string): any {
  const numVerts = representation.charCodeAt(0) - 63;
  const binUpper = getBinaryRepresentation(representation.slice(1));
  console.log(binUpper);
  return getGraph(numVerts, binUpper);
}
