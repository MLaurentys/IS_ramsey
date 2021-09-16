import { Component } from "react";
import { Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";

class SelectionMenu extends Component<
  { simulations: any[] },
  { selected: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Col md={12} style={{ border: "5px solid black" }}>
          <Row>
            <Tabs
              onSelect={(evtKey) => {
                if (`${this.state.selected}` !== evtKey)
                  this.setState({ selected: parseInt(evtKey ?? "0") });
              }}
            >
              {this.props.simulations.map((simulation, idx) => {
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
                this.props.simulations[this.state.selected],
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
    simulations: state.simu,
  };
}

const GiveGraphStoreAccess: any = connect(MapStateToProps);
export default GiveGraphStoreAccess(SelectionMenu);
