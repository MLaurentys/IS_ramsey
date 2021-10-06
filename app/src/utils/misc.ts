import { ElementDefinition } from "cytoscape";

const colorMap = Object.seal({
    "r": "#ff0000",
    "b": "#0000ff"
})

export function createCytoStyles(colors:string, edges:ElementDefinition[]) {
    return edges.map((edge, idx) => {
        return {
            selector:edge.data.id,
            "line-color":colorMap[colors[idx]]
        }
    })
}