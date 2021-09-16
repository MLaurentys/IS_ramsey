import { Component } from "react";
import { Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";

class SelectionMenu extends Component<any, {}> {
  render() {
    return (
      <>
        <Col md={12} style={{ border: "5px solid black" }}>
          <Row>
            <Tabs
              onSelect={(evtKey) => {
                if (`${this.props.selected}` !== evtKey)
                  this.props.dispatch({
                    type: "simu/",
                    selected: parseInt(evtKey ?? "0"),
                  });
              }}
            >
              {this.props.simulations.map((simulation: any, idx: number) => {
                let simulationName = simulation.title;
                return (
                  <Tab
                    key={simulationName}
                    title={simulationName}
                    eventKey={idx}
                  >
                    {simulationName}
                  </Tab>
                );
              })}
            </Tabs>
          </Row>
          <Row>
            <Button>Start</Button>
          </Row>
          <Row>
            <textarea
              style={{ height: "400px" }}
              defaultValue={JSON.stringify(
                this.props.simulations[this.props.selected],
                null,
                4
              )}
            />
          </Row>
        </Col>
      </>
    );
  }
}

function MapStateToProps(state: any) {
  return {
    simulations: state.simu.simulations,
    selected: state.simu.selected,
  };
}

const GiveGraphStoreAccess: any = connect(MapStateToProps);
export default GiveGraphStoreAccess(SelectionMenu);
