import { useEffect } from "react";
import { connect } from "react-redux";
import Graph6Selector from "./graph6_selector";
import "./graph_display.css";

function DisplayGraph(props: any) {
  useEffect(() => {
    props.dispatch(
      {
        type: "cyto/start",
        payload: { rootElement: document.getElementById("cytoscape") },
      },
      []
    );
  });

  return (
    <div>
      <div id="cytoscape"></div>
      <Graph6Selector />
    </div>
  );
}

const GiveGraphStoreAccess: any = connect();
export default GiveGraphStoreAccess(DisplayGraph);
