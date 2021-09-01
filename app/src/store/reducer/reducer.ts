import { combineReducers } from "redux";

import AddEdge from "./cytoscape_graph";

export default combineReducers({
  GraphReducer: AddEdge,
});
