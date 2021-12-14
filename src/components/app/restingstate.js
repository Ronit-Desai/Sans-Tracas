import React from "react";
import moment from "moment";
import HelperUtil from "../../util/HelperUtil";
import Results from "./results";
import { ButtonGroup, Dropdown, ToggleButton } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
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

let experimentTime = 120000;
let count = 0;

class RestingState extends React.Component {
  constructor(props) {
    super();

    this.state = {
      participantId: props.participantId,
      isAuxConnected: props.isAuxConnected,
      experimentStarted: false,
      experimentCompleted: false,
      isLoading: false,
      timeInterval: "2",
      remainingTime: experimentTime,
      eyeOption: "Open",
      canCloseTab: true,
      surveyDone: false,
      surveyResponse: 0,
      startTimestamp: 0,
      expStartTimestamp: 0,
      expEndTimestamp: 0,
    };

    this.client = props.museClient;
    this.readings = [];
    this.restingStateReadings = [];
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
    if (this.state.isLoading) {
      return (
        <div className="App text-center">
          <h1>Please wait while we process your data.</h1>
          {console.log("inside IS Loading")}
        </div>
      );
    }

    if (this.state.experimentCompleted) {
      console.log("into if statement");

      return (
        <div className="App">
          {console.log("before calling results")}
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
            experimentReadings={this.restingStateReadings}
            experimentFileName={
              this.state.participantId +
              "_restingstate_readings_" +
              moment(new Date()).format("YYYYMMDDHHmmss") +
              ".csv"
            }
          >
            {" "}
            {console.log("during calling results")}
          </Results>
          {console.log("after calling results")}
        </div>
      );
    }

    if (this.state.surveyDone) {
      return (
        <div
          className="App"
          style={{ textAlign: "left", marginLeft: "21%", marginTop: "7%" }}
        >
          <h5>
            Please select the one statement that best describes your sleepiness
            while you were perfroming the Resting-State experiment.
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {" "}
              <br />
              <div>
                <input
                  type="radio"
                  checked={this.state.surveyResponse === "1"}
                  onChange={() => {
                    this.setState({ surveyResponse: "1" });
                  }}
                />
                1. Extremely alert
              </div>
              <div>
                <input
                  type="radio"
                  checked={this.state.surveyResponse === "2"}
                  onChange={() => {
                    this.setState({ surveyResponse: "2" });
                  }}
                />
                2. Very alert
              </div>
              <div>
                <input
                  type="radio"
                  checked={this.state.surveyResponse === "3"}
                  onChange={() => {
                    this.setState({ surveyResponse: "3" });
                  }}
                />
                3. Alert
              </div>
              <div>
                <input
                  type="radio"
                  checked={this.state.surveyResponse === "4"}
                  onChange={() => {
                    this.setState({ surveyResponse: "4" });
                  }}
                />
                4. Rather alert
              </div>
              <div>
                <input
                  type="radio"
                  checked={this.state.surveyResponse === "5"}
                  onChange={() => {
                    this.setState({
                      surveyResponse: "5",
                    });
                  }}
                />
                5. Neither alert nor sleepy
              </div>
              <div>
                <input
                  type="radio"
                  checked={this.state.surveyResponse === "6"}
                  onChange={() => {
                    this.setState({
                      surveyResponse: "6",
                    });
                  }}
                />
                6. Some signs of sleepiness
              </div>
              <div>
                <input
                  type="radio"
                  checked={this.state.surveyResponse === "7"}
                  onChange={() => {
                    this.setState({
                      surveyResponse: "7",
                    });
                  }}
                />
                7. Sleepy, but no effort to keep awake
              </div>
              <div>
                <input
                  type="radio"
                  checked={this.state.surveyResponse === "8"}
                  onChange={() => {
                    this.setState({
                      surveyResponse: "8",
                    });
                  }}
                />
                8. Sleepy, but some effort to keep awake
              </div>
              <div>
                <input
                  type="radio"
                  checked={this.state.surveyResponse === "9"}
                  onChange={() => {
                    this.setState({
                      surveyResponse: "9",
                    });
                  }}
                />
                9. Very sleepy, great effort to keep awake, fighting sleep
              </div>
              <div>
                <input
                  type="radio"
                  checked={this.state.surveyResponse === "10"}
                  onChange={() => {
                    this.setState({
                      surveyResponse: "10",
                    });
                  }}
                />
                10. Extremely sleepy, can’t keep awake
              </div>
            </div>
          </h5>
          <button
            className="btn btn-primary btn-block m-3"
            onClick={() => {
              this.restingStateReadings.push({
                participant_id: this.state.participantId,
                start_timestamp: this.state.startTimestamp,
                time_interval: this.state.timeInterval,
                eyes: this.state.eyeOption,
                exp_start_timestamp: this.state.expStartTimestamp,
                exp_end_timestamp: this.state.expEndTimestamp,
                sleepiness_rating: this.state.surveyResponse,
              });
              this.stopExperiment();
            }}
          >
            Submit
          </button>
          <h5>
            {" "}
            After pressing the button, please wait for some time, while we
            process your EEG data.{" "}
          </h5>
        </div>
      );
    }

    if (!this.state.experimentStarted) {
      if (count === 0) {
        this.setState({ startTimestamp: Date.now() });
        count = count + 1;
      }

      return (
        <div className="App text-center">
          <Dropdown
            onSelect={(value) => {
              this.setState({
                timeInterval: value,
                remainingTime: value * 60 * 1000,
              });
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
                  eventKey="2"
                  active={this.state.timeInterval === "2"}
                >
                  2
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="5"
                  active={this.state.timeInterval === "5"}
                >
                  5
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
                this.setState({
                  experimentStarted: true,
                  expStartTimestamp: Date.now(),
                });
                experimentTime = this.state.timeInterval * 60 * 1000;
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
          <div className="App">
            <div
              className="App text-center"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "red",
                borderRadius: "50%",
                marginLeft: "50%",
                marginTop: "17%",
              }}
            ></div>
            <div className="App text-center">
              <h3>Please keep your focus on the red dot.</h3>
            </div>
            <div
              className="App"
              style={{ position: "fixed", bottom: "0", width: "100%" }}
            >
              <ProgressBar
                variant="info"
                now={(experimentTime - this.state.remainingTime) / 1000}
                max={experimentTime / 1000}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="App">
            <div className="App text-center" style={{ marginTop: "21%" }}>
              <h3>
                Please keep your eyes closed until the experiment is completed
                and you hear a beep.
              </h3>
            </div>
            <div
              className="App"
              style={{ position: "fixed", bottom: "0", width: "100%" }}
            >
              <ProgressBar
                variant="info"
                now={(experimentTime - this.state.remainingTime) / 1000}
                max={experimentTime / 1000}
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
    if (this.state.remainingTime <= 0) {
      this.startSurvey();
    } else {
      this.setState({
        remainingTime: this.state.remainingTime - 1000,
      });
      setTimeout(() => {
        this.startExperiment();
      }, 1000);
    }
  };

  startSurvey = () => {
    this.audio.play();
    this.setState({ surveyDone: true, expEndTimestamp: Date.now() });
  };

  stopExperiment = () => {
    this.client.disconnect();
    console.log("after disconnect");
    this.setState({ isLoading: true });

    this.processedData = HelperUtil.cleanData(
      this.readings,
      "restingstate",
      this.state.participantId
    );
    //this.setState({ isLoading: false });
    //this.setState({ experimentCompleted: true });
    this.displayResults();
    console.log("after calling helper util");

    let jsonBody = {};
    jsonBody.participantId = this.state.participantId;
    jsonBody.experiment = "restingstate";
    jsonBody.isAuxConnected = this.state.isAuxConnected;
    jsonBody.eegResult = this.processedData;
    jsonBody.restingStateReadings = this.restingStateReadings;
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
    console.log("after fetch");
  };

  displayResults = () => {
    this.setState({ isLoading: false, experimentCompleted: true });
  };

  unLoadEvent = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
}

export default RestingState;
