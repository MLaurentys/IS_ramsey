/*
 * This file is the root of the application. Everything running in the app is
 *   created from this point.
 */

import React from "react";
import { Provider } from "react-redux";
import GraphDisplay from "./views/graph_display";
import store from "./store/store";

function App() {
  // Provider is used to allow any component to connect to the redux store.
  return (
    <Provider store={store}>
      <div>
        <GraphDisplay />
      </div>
    </Provider>
  );
}

export default App;
