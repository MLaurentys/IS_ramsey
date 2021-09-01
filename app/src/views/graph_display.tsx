import { Component } from "react";
import cytoscape from "cytoscape";
import "./graph_display.css";

class GraphDisplay extends Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
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
      cy: undefined,
    };
  }

  componentDidMount() {
    this.setState({
      cy: cytoscape({
        container: document.getElementById("cytoscape"),
        elements: [...this.state.vertices, ...this.state.edges],

        style: this.state.styles,

        layout: {
          name: "grid",
          rows: 1,
        },
      }),
    });
    setTimeout(() =>
      this.state.cy.style().selector("#a").style({
        width: "40px",
      })
    );
  }

  render() {
    console.log(this.state.cy?.getElementById("a"));
    return <div id="cytoscape"> </div>;
  }
}

export default GraphDisplay;
