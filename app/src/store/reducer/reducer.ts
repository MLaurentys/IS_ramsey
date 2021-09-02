import { combineReducers } from "redux";

import { StartCytoscape } from "./cytoscape_graph";

export default combineReducers({
  cyto: StartCytoscape,
});
