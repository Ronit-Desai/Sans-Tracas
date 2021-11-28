import React from "react";
import moment from "moment";
import HelperUtil from "../../util/HelperUtil";
import Results from "./results";
import { ButtonGroup, Dropdown, ToggleButton } from "react-bootstrap";
import ReactCountdownClock from "react-countdown-clock";

let headers = [
  { label: "TimeStamp", key: "timestamp" },
  { label: "Index", key: "index" },
  { label: "ch_0", key: "ch_0" },
  { label: "ch_1", key: "ch_1" },
  { label: "ch_2", key: "ch_2" },
  { label: "ch_3", key: "ch_3" },
  { label: "participant_id", key: "participant_id" },
];

let headersWithAux = [
  { label: "TimeStamp", key: "timestamp" },
  { label: "Index", key: "index" },
  { label: "ch_0", key: "ch_0" },
  { label: "ch_1", key: "ch_1" },
  { label: "ch_2", key: "ch_2" },
  { label: "ch_3", key: "ch_3" },
  { label: "ch_4", key: "ch_4" },
  { label: "participant_id", key: "participant_id" },
];

class RestingState extends React.Component {
  constructor(props) {
    super();

    this.state = {
      participantId: props.participantId,
      isAuxConnected: props.isAuxConnected,
      experimentStarted: false,
      experimentCompleted: false,
      timeInterval: "1",
      eyeOption: "Open",
      canCloseTab: true,
    };

    this.client = props.museClient;
    this.readings = [];
    this.restingstateReadings = [];
    this.processedData = [];
  }

  componentDidMount() {
    this.startRestingState();
    this.setState({ canCloseTab: false });
    window.addEventListener("beforeunload", this.unLoadEvent);
  }

  componentWillUnmount() {
    if (!this.state.canCloseTab) {
      window.removeEventListener("beforeunload", this.unLoadEvent);
    }
  }

  render() {
    if (this.state.experimentCompleted) {
      return (
        <div className="App">
          <Results
            rawReadings={this.readings}
            processedDataHeaders={
              this.state.isAuxConnected ? headersWithAux : headers
            }
            processedData={this.processedData}
            processedFileName={
              this.state.participantId +
              "_restingstate_eeg_" +
              moment(new Date()).format("YYYYMMDDHHmmss") +
              ".csv"
            }
            experimentReadings={this.restingstateReadings}
            experimentFileName={
              this.state.participantId +
              "_restingstate_readings_" +
              moment(new Date()).format("YYYYMMDDHHmmss") +
              ".csv"
            }
          ></Results>
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

  startRestingState = async () => {
    await this.client.start();
    this.client.eegReadings.subscribe((reading) => {
      this.readings.push(reading);
    });
  };

  startExperiment = () => {
    setTimeout(() => {
      this.stopExperiment();
    }, this.state.timeInterval * 60 * 1000);
  };

  stopExperiment = () => {
    this.client.disconnect();
    this.processedData = HelperUtil.cleanData(
      this.readings,
      "restingstate",
      this.state.participantId
    );
    this.setState({ experimentCompleted: true });

    let jsonBody = {};
    jsonBody.participantId = this.state.participantId;
    jsonBody.experiment = "restingstate";
    jsonBody.isAuxConnected = this.state.isAuxConnected;
    jsonBody.eegResult = this.processedData;
    jsonBody.restingstateReadings = this.restingstateReadings;
    jsonBody = JSON.stringify(jsonBody);

    const postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonBody,
    };

    fetch("https://museapp-backend-test1.azurewebsites.net/saveData", postData)
      .then((response) => {
        console.log("Data sent to server");
        window.removeEventListener("beforeunload", this.unLoadEvent);
        this.setState({ canCloseTab: true });
      })
      .catch((error) => {
        console.log("Failure while sending data to server :(");
        window.removeEventListener("beforeunload", this.unLoadEvent);
        this.setState({ canCloseTab: true });
      });
  };

  unLoadEvent = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
}

export default RestingState;
