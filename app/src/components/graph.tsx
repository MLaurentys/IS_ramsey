import { useEffect } from "react";
import { connect } from "react-redux";

function Graph(props: any): JSX.Element {
  console.log("re-renderizou");
  // cytoscape div is used by the cytoscape lib. That handles its own state
  const cytoEl = (
    <div style={{ width: "100%", height: "100%" }} id="cytoscape"></div>
  );
  useEffect(() => {
    props.dispatch(
      {
        type: "cyto/start",
        payload: { rootElement: document.getElementById("cytoscape") },
      },
      []
    );
  });
  return cytoEl;
}

const GiveGraphStoreAccess: any = connect();
export default GiveGraphStoreAccess(Graph);
