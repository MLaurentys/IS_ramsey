import { connect } from "react-redux";

import { CytoToGraph6 } from "../utils/g6_cyto_converter";

function Graph6Menu(props: any) {
  return (
    <div>
      <p>Graph6 import/export</p>
      <p>
        Vertices:{" "}
        {props.cyto &&
          String(props?.cyto.nodes().map((obj: any) => obj._private.data.id))}
      </p>
      <p>Current Graph: {String(props.currentRepresentation)}</p>
      <textarea
        onChange={(e) =>
          props.dispatch({
            type: "graph6/input",
            payload: { value: e.target.value },
          })
        }
        value={props.graph6.inputText}
      ></textarea>
      <button
        onClick={() =>
          props.dispatch({
            type: "cyto/new",
            payload: { value: props.graph6.inputText },
          })
        }
      >
        Set Graph
      </button>
    </div>
  );
}

function MapStateToProps(state: any) {
  return {
    cyto: state.cyto.cy,
    graph6: state.graph6,
    currentRepresentation: CytoToGraph6(state.cyto.cy),
  };
}

const GiveGraphStoreAccess: any = connect(MapStateToProps);
export default GiveGraphStoreAccess(Graph6Menu);
