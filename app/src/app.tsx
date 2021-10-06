/*
 * This file is the root of the application. Everything running in the app is
 *   created from this point.
 */
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Provider } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import GraphDisplay from "./components/graph_display";
import store from "./store/store";
import Header from "./components/header";
import Menu from "./views/menu";

function App() {
  // Provider is used to allow any component to connect to the redux store.
  return (
    <Container style={{ backgroundColor: "#d9b382" }}>
      <Row>
        <Header />
      </Row>
      <Provider store={store}>
        <Row>
          <Col md={7} className="mr-3">
            <GraphDisplay />
          </Col>
          <Col md={5} className="ml-3">
            <Menu />
          </Col>
        </Row>
      </Provider>
    </Container>
  );
}

export default App;
