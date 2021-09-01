import { Component } from "react";
import { connect } from "react-redux";
import cytoscape from "cytoscape";
import "./graph_display.css";

class GraphDisplay extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch({ type: "START_CYTOSCAPE" });
  }

  render() {
    return <div id="cytoscape"> </div>;
  }
}

const GiveGraphStoreAccess: any = connect();

export default GiveGraphStoreAccess(GraphDisplay);
