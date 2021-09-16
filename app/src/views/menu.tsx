import { Component } from "react";
import { Row, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import Graph6Menu from "../components/graph6_menu";
import SimulationMenu from "../components/simulation_menu";

class Menu extends Component<any, any> {
  renderSelection() {
    if (this.props.tabSelected === "g6") return <Graph6Menu></Graph6Menu>;
    return <SimulationMenu />;
  }

  render() {
    return (
      <>
        <Row>
          <Tabs
            activeKey={this.props.tabSelected}
            onSelect={(evtKey) =>
              this.props.dispatch({ type: "menu/select", value: evtKey })
            }
          >
            <Tab title={"Graph6"} eventKey="g6"></Tab>
            <Tab title={"Simulation"} eventKey="sim"></Tab>
          </Tabs>
        </Row>
        <Row> {this.renderSelection()} </Row>
      </>
    );
  }
}

function MapStateToProps(state: any) {
  return {
    tabSelected: state.menu.tabSelected,
  };
}

const GiveGraphStoreAccess: any = connect(MapStateToProps);
export default GiveGraphStoreAccess(Menu);
