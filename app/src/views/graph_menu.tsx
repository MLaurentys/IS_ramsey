import { Component } from "react";
import { Row, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import SimulationMenu from "../components/simulation_menu";

class GraphMenu extends Component<{}, { selection: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      selection: "sim",
    };
  }

  renderSelection() {
    if (this.state.selection === "g6") return <p>Oi</p>;
    return <SimulationMenu />;
  }

  render() {
    return (
      <>
        <Row>
          <Tabs
            activeKey={this.state.selection}
            onSelect={(evtKey) => this.setState({ selection: evtKey ?? "" })}
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

const GiveGraphStoreAccess: any = connect();
export default GiveGraphStoreAccess(GraphMenu);
