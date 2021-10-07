import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Graph6Menu from "./graph6_menu";
import { StrMapToJSX } from "../types/types";
import Graph from "./graph";

function renderStandard(props) {
  return (
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
      >
        <Graph />
      </Col>
    </Row>
  );
}

function renderSimulation(props) {
  return (
    <>
      <div className="mb-4" style={{ border: "2px solid black" }}>
        <Row md={5} className="mb-2" style={{ marginLeft: "1rem" }}>
          <h3 style={{ width: "100%" }}>
            {props.simulations[props.selected].title}{" "}
          </h3>
        </Row>
        <Row>
          <Col md={7} className="mb-2" style={{ marginLeft: "1rem" }}>
            <p>{props.simulations[props.selected].description}</p>
          </Col>
        </Row>
      </div>
      <Row style={{ height: "600px" }} className="ml-2">
        <Col
          style={{
            backgroundColor: "grey",
            border: "10px solid black",
            padding: "0",
          }}
          md={6}
        >
          <Graph />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

const renders = Object.seal({
  g6: (props) => renderStandard(props),
  sim: (props) => renderSimulation(props),
});

function DisplayGraph(props: any): JSX.Element {
  // cytoscape div is used by the cytoscape lib. That handles its own state
  return <>{renders[props.tabSelected](props)}</>;
}

function MapStateToProps(state: any) {
  return {
    tabSelected: state.menu.tabSelected,
    simulations: state.simu.simulations,
    selected: state.simu.selected,
  };
}

const GiveGraphStoreAccess: any = connect(MapStateToProps);
export default GiveGraphStoreAccess(DisplayGraph);
