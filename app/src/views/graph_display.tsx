import { useEffect } from "react";
import { connect } from "react-redux";
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

  return <div id="cytoscape"> </div>;
}

const GiveGraphStoreAccess: any = connect();
export default GiveGraphStoreAccess(DisplayGraph);
