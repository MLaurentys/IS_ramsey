import { exception } from "console";
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
  const bitsToAdd = (6 - (formated.length % 6)) % 6;
  for (let i = 0; i < bitsToAdd; ++i) formated += "0";
  return formated;
}

function decimalFromBinary(numVer: number, upTri: string): number[] {
  let decimals = [numVer];
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
  const decimals = decimalFromBinary(cyto.nodes().length, upperTriangle);
  return graphLenEncoded + decimalsToFormatedString(decimals);
}

//----------------
// Graph6 to cyto
//----------------

function getGraphSize() {}

export function graph6ToCyto(
  representation: string,
  cyto: Core | undefined
): any {
  if (!cyto) return;
  let decimals = representation
    .split("")
    .map((char) => char.charCodeAt(0) - 63);
  console.log(decimals);
  const numVert = decimals.shift() ?? 0;
  const binary = decimals.map((dec) => dec.toString(2)).join();
  console.log("bin:", binary);
  // Removes all vertices and, therefore, all edges
  cyto.remove("node");
  const newVerts: cytoscape.ElementDefinition[] = [];
  const newEdges: ElementDefinition[] = [];
  for (let i = 0; i < numVert; ++i) newVerts.push({ data: { id: `${i}` } });
  let i = 0;
  let j = 1;
  binary.split("").some((digit) => {
    if (j === numVert) {
      i += 1;
      j = i + 1;
      if (i === numVert) return true;
    }
    if (digit === "1")
      newEdges.push({
        data: { id: `${i}-${j}`, source: `${i}`, target: `${j}` },
      });
    j++;
  });
  cyto.add(newVerts);
  cyto.add(newEdges);
  cyto
    .layout({
      name: "fcose",
      // @ts-ignore
    })
    .run();
}
