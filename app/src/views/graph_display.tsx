import { useEffect } from "react";
import { connect } from "react-redux";
import Graph6Menu from "./graph6_menu";
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
  // cytoscape div is used by the cytoscape lib. That handles its own state.
  return (
    <div>
      <div id="cytoscape"></div>
      <Graph6Menu />
    </div>
  );
}

const GiveGraphStoreAccess: any = connect();
export default GiveGraphStoreAccess(DisplayGraph);
