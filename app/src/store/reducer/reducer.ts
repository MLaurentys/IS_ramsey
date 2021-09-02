import { combineReducers } from "redux";

import { CytoscapeReducer } from "./cyto/cytoscape";

export default combineReducers({
  cyto: CytoscapeReducer,
});
