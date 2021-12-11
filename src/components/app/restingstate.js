import React from "react";
import moment from "moment";
import HelperUtil from "../../util/HelperUtil";
import Results from "./results";
import { ButtonGroup, Dropdown, ToggleButton } from "react-bootstrap";
import ReactCountdownClock from "react-countdown-clock";
import audio1 from "../../audio/audio1.mp3";

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
      timeInterval: "2",
      eyeOption: "Open",
      canCloseTab: true,
      surveyDone: false,
      surveyResponse: "",
    };

    this.client = props.museClient;
    this.readings = [];
    this.restingstateReadings = [];
    this.processedData = [];
    this.audio = new Audio(audio1);
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

    if (this.state.surveyDone) {
      return (
        <div className="App text-center">
          <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <h5>
              <span className="ml-1">
                Please select the one statement that best describes your
                sleepiness while you were perfroming the Resting-State
                experiment.
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                {" "}
                <br />
                <div>
                  <input
                    type="radio"
                    checked={this.state.surveyResponse === "Extremely alert"}
                    onChange={() => {
                      this.setState({ surveyResponse: "Extremely alert" });
                    }}
                  />
                  Extremely alert
                </div>
                <div>
                  <input
                    type="radio"
                    checked={this.state.surveyResponse === "Very alert"}
                    onChange={() => {
                      this.setState({ surveyResponse: "Very alert" });
                    }}
                  />
                  Very alert
                </div>
                <div>
                  <input
                    type="radio"
                    checked={this.state.surveyResponse === "Alert"}
                    onChange={() => {
                      this.setState({ surveyResponse: "Alert" });
                    }}
                  />
                  Alert.
                </div>
                <div>
                  <input
                    type="radio"
                    checked={this.state.surveyResponse === "Rather alert"}
                    onChange={() => {
                      this.setState({ surveyResponse: "Rather alert" });
                    }}
                  />
                  Rather alert
                </div>
                <div>
                  <input
                    type="radio"
                    checked={
                      this.state.surveyResponse === "Neither alert nor sleepy"
                    }
                    onChange={() => {
                      this.setState({
                        surveyResponse: "Neither alert nor sleepy",
                      });
                    }}
                  />
                  Neither alert nor sleepy
                </div>
                <div>
                  <input
                    type="radio"
                    checked={
                      this.state.surveyResponse === "Some signs of sleepiness"
                    }
                    onChange={() => {
                      this.setState({
                        surveyResponse: "Some signs of sleepiness",
                      });
                    }}
                  />
                  Some signs of sleepiness
                </div>
                <div>
                  <input
                    type="radio"
                    checked={
                      this.state.surveyResponse ===
                      "Sleepy, but no effort to keep awake"
                    }
                    onChange={() => {
                      this.setState({
                        surveyResponse: "Sleepy, but no effort to keep awake",
                      });
                    }}
                  />
                  Sleepy, but no effort to keep awake
                </div>
                <div>
                  <input
                    type="radio"
                    checked={
                      this.state.surveyResponse ===
                      "Sleepy, but some effort to keep awake"
                    }
                    onChange={() => {
                      this.setState({
                        surveyResponse: "Sleepy, but some effort to keep awake",
                      });
                    }}
                  />
                  Sleepy, but some effort to keep awake
                </div>
                <div>
                  <input
                    type="radio"
                    checked={
                      this.state.surveyResponse ===
                      "Very sleepy, great effort to keep awake, fighting sleep"
                    }
                    onChange={() => {
                      this.setState({
                        surveyResponse:
                          "Very sleepy, great effort to keep awake, fighting sleep",
                      });
                    }}
                  />
                  Very sleepy, great effort to keep awake, fighting sleep
                </div>
                <div>
                  <input
                    type="radio"
                    checked={
                      this.state.surveyResponse ===
                      "Extremely sleepy, can’t keep awake"
                    }
                    onChange={() => {
                      this.setState({
                        surveyResponse: "Extremely sleepy, can’t keep awake",
                      });
                    }}
                  />
                  Extremely sleepy, can’t keep awake
                </div>
              </div>
            </h5>
            <button
              className="btn btn-primary btn-block m-3"
              onClick={this.stopExperiment}
            >
              Submit
            </button>
          </div>
        </div>
      );
    }

    if (!this.state.experimentStarted) {
      return (
        <div className="App text-center">
          <Dropdown
            onSelect={(value) => {
              this.setState({ timeInterval: value });
            }}
          >
            {" "}
            <h3>
              <Dropdown.Toggle variant="success" id="time-dropdown">
                Select time interval
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  eventKey="0.5"
                  active={this.state.timeInterval === "0.5"}
                >
                  0.5
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="5"
                  active={this.state.timeInterval === "5"}
                >
                  5
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="5"
                  active={this.state.timeInterval === "5"}
                >
                  2
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="10"
                  active={this.state.timeInterval === "10"}
                >
                  10
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="15"
                  active={this.state.timeInterval === "15"}
                >
                  15
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="20"
                  active={this.state.timeInterval === "20"}
                >
                  20
                </Dropdown.Item>
              </Dropdown.Menu>
              &nbsp; {this.state.timeInterval} minutes.
            </h3>
          </Dropdown>

          <br />
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
          <div className="App text-center">
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
          <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <h3>
              {this.state.eyeOption === "Open" ? (
                <p>
                  In this task, we will record your brain activity while you are
                  at rest. <br /> All you will need to do is sit still with your
                  eyes open for the duration that you've selected via the 'Time
                  Interval' feature. <br /> Please sit still and do not try to
                  do anything special. Try not to move your eyes or fall asleep.
                  You may blink normally during this time. You may also use the
                  red dot as a point of focus while you're performing the
                  experiment.
                  <br /> When you are ready to begin, press the "Begin
                  Resting-State Experiment" button to continue.
                  <br />A reminder to please keep your eyes OPEN for the
                  duration of the experiment and focus on the central fixation.
                  You can blink during this time.
                </p>
              ) : (
                <p>
                  In this task, we will record your brain activity while you are
                  at rest.
                  <br />
                  All you will need to do is sit still with your eyes closed for
                  duration that you've selected via the 'Time Interval' feature.
                  <br />
                  Please sit still and do not try to do anything special. Try
                  not to move your eyes or fall asleep.
                  <br />
                  When you are ready to begin, press the "Begin Resting-State
                  Experiment" button to continue.
                  <br />A reminder to please keep your eyes CLOSED for the
                  duration of the experiment. Open your eyes when you hear a
                  beep.
                </p>
              )}
            </h3>
          </div>
        </div>
      );
    } else {
      if (this.state.eyeOption === "Open") {
        return (
          <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <div
              className="App text-center`"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "red",
                borderRadius: "50%",
                marginLeft: "48%",
                marginTop: "22%",
              }}
            ></div>
            <div className="App text-center">
              Please keep your focus on red dot.
            </div>
          </div>
        );
      } else {
        return (
          <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <div className="App text-center">
              {" "}
              Please keep your eyes closed until the countdown timer goes to
              zero and you hear a beep.{" "}
            </div>
            <div className="App text-center" style={{ marginLeft: "15%" }}>
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
      this.startSurvey();
    }, this.state.timeInterval * 60 * 1000);
  };

  startSurvey = () => {
    this.audio.play();
    this.setState({ surveyDone: true });
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
