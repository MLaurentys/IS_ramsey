import { Component } from "react";
import { connect } from "react-redux";
import "./graph_display.css";

class GraphDisplay extends Component<any, any> {
  componentDidMount() {
    this.props.dispatch({
      type: "cyto/start",
      payload: { rootElement: document.getElementById("cytoscape") },
    });
  }

  render() {
    return <div id="cytoscape"> </div>;
  }
}

const GiveGraphStoreAccess: any = connect();

export default GiveGraphStoreAccess(GraphDisplay);
