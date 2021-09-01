import React from "react";
import { Provider } from "react-redux";
import GraphDisplay from "./views/graph_display";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <GraphDisplay />
      </div>
    </Provider>
  );
}

export default App;
