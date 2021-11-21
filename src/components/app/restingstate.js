import React from "react";
import { ButtonGroup, Dropdown, ToggleButton } from "react-bootstrap";
import ReactCountdownClock from "react-countdown-clock";

class RestingState extends React.Component {
  constructor(props) {
    super();

    this.state = {
      experimentStarted: false,
      experimentCompleted: false,
      timeInterval: "1",
      eyeOption: "Open",
    };

    this.client = props.museClient;
    this.readings = [];
    this.n170Readings = [];
    this.processedData = [];
  }

  componentDidMount() {
    // this.startN170();
    // this.setState({ canCloseTab: false });
    // window.addEventListener("beforeunload", this.unLoadEvent);
  }

  componentWillUnmount() {
    //     if (!this.state.canCloseTab) {
    //       window.removeEventListener("beforeunload", this.unLoadEvent);
    //     }
  }

  render() {
    if (this.state.experimentCompleted) {
      return (
        <div className="App">
          <p>Experiment completed</p>
        </div>
      );
    }

    if (!this.state.experimentStarted) {
      return (
        <div className="App">
          <Dropdown
            onSelect={(value) => {
              this.setState({ timeInterval: value });
            }}
          >
            <Dropdown.Toggle variant="success" id="time-dropdown">
              Select time interval
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                eventKey="1"
                active={this.state.timeInterval === "1"}
              >
                1
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="1.5"
                active={this.state.timeInterval === "1.5"}
              >
                1.5
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                active={this.state.timeInterval === "2"}
              >
                2
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <ButtonGroup className="mb-2">
            <ToggleButton
              key={1}
              id={1}
              type="radio"
              name="radio"
              value={"Open"}
              checked={this.state.eyeOption === "Open"}
              onChange={(e) => {
                this.setState({ eyeOption: e.currentTarget.value });
              }}
            >
              Open
            </ToggleButton>

            <ToggleButton
              key={2}
              id={2}
              type="radio"
              name="radio"
              value={"Close"}
              checked={this.state.eyeOption === "Close"}
              onChange={(e) => {
                this.setState({ eyeOption: e.currentTarget.value });
              }}
            >
              Close
            </ToggleButton>
          </ButtonGroup>
          <div>
            <button
              className="btn btn-secondary btn-block m-3"
              onClick={() => {
                this.setState({ experimentStarted: true });
                this.startExperiment();
              }}
            >
              Begin Resting-State Experiment.
            </button>
          </div>
          <div>
            {this.state.eyeOption === "Open" ? (
              <p>Eye open instruction</p>
            ) : (
              <p>Eye close instruction</p>
            )}
          </div>
        </div>
      );
    } else {
      if (this.state.eyeOption === "Open") {
        return (
          <div className="App">
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "red",
                borderRadius: "50%",
                marginLeft: "50%",
                marginTop: "22%",
              }}
            ></div>
            <div>Please keep your focus on red dot</div>
          </div>
        );
      } else {
        return (
          <div className="App">
            <div style={{ marginLeft: "35%", marginTop: "15%" }}>
              <ReactCountdownClock
                seconds={this.state.timeInterval * 60}
                color="#000000"
                size={300}
                timeFormat="hms"
              />
            </div>
          </div>
        );
      }
    }
  }

  startExperiment = () => {
    setTimeout(() => {
      this.stopExperiment();
    }, this.state.timeInterval * 60 * 1000);
  };

  stopExperiment = () => {
    this.setState({ experimentCompleted: true });
  };

  unLoadEvent = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
}

export default RestingState;
