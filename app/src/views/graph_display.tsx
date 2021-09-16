import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Graph6Menu from "../components/graph6_menu";
import { StrMapToJSX } from "./../types/types";

function renderStandard() {
  return <></>;
}

function renderSimulation() {
  return (
    <>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <h2></h2>
        </Col>
      </Row>
    </>
  );
}

const renders: StrMapToJSX = Object.seal({
  g6: renderStandard,
  sim: renderStandard,
});

function DisplayGraph(props: any): JSX.Element {
  useEffect(() => {
    props.dispatch(
      {
        type: "cyto/start",
        payload: { rootElement: document.getElementById("cytoscape") },
      },
      []
    );
  });
  // cytoscape div is used by the cytoscape lib. That handles its own state
  return (
    <>
      <Row style={{ height: "600px" }}>
        <Col md={1}></Col>
        <Col
          className="pl-0 pr-0"
          style={{
            backgroundColor: "grey",
            border: "10px solid black",
            padding: "0",
          }}
          md={10}
          id="cytoscape"
        ></Col>
      </Row>
      {renders[props.tabSelected]()}
    </>
  );
}

function MapStateToProps(state: any) {
  return {
    tabSelected: state.menu.tabSelected,
    simulation: state.simu.simulations,
  };
}

const GiveGraphStoreAccess: any = connect(MapStateToProps);
export default GiveGraphStoreAccess(DisplayGraph);
