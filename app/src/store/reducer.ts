import { combineReducers } from "redux";

import { CytoscapeReducer } from "./cyto/cytoscape";
import { Graph6Reducer } from "./graph6/graph6";

export default combineReducers({
  cyto: CytoscapeReducer,
  graph6: Graph6Reducer,
});
