import React from "react";
import { CSVLink } from "react-csv";
import moment from "moment";
import HelperUtil from "../util/HelperUtil";
import Results from "./results";

import face_1 from "../images/faces/1.jpg";
import face_2 from "../images/faces/2.jpg";
import face_3 from "../images/faces/3.jpg";
import face_4 from "../images/faces/4.jpg";
import face_5 from "../images/faces/5.jpg";
import face_6 from "../images/faces/6.jpg";
import face_7 from "../images/faces/7.jpg";
import face_8 from "../images/faces/8.jpg";
import face_9 from "../images/faces/9.jpg";
import face_10 from "../images/faces/10.jpg";

let experimentImages = [
  {
    image: face_1,
    gender: "male",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "with teeth",
  },
  {
    image: face_2,
    gender: "male",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "with teeth",
  },
  {
    image: face_3,
    gender: "male",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "with teeth",
  },
  {
    image: face_4,
    gender: "male",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "with teeth",
  },
  {
    image: face_5,
    gender: "male",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "with teeth",
  },
  {
    image: face_6,
    gender: "male",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "with teeth",
  },
  {
    image: face_7,
    gender: "male",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "with teeth",
  },
  {
    image: face_8,
    gender: "male",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "with teeth",
  },
  {
    image: face_9,
    gender: "male",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "with teeth",
  },
  {
    image: face_10,
    gender: "male",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "with teeth",
  },
];

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

class XAB extends React.Component {
  constructor(props) {
    super();

    this.state = {
      participantId: props.participantId,
      isAuxConnected: props.isAuxConnected,
      experimentCompleted: false,
      xabShowingPrimary: true,
      xabPrimaryImageIndex: Math.floor(Math.random() * experimentImages.length),
      xabOptionLeftIndex: null,
      xabOptionRightIndex: null,
      canCloseTab: true,
    };

    this.client = props.museClient;
    this.readings = [];
    this.processedData = [];
    this.experimentCount = 5;
    this.xabOptionSelected = false;
    this.xabReadings = [];
    this.primaryImageDuration = 2000;
    this.optionsDuration = 2000;
  }

  componentDidMount() {
    this.startXab();
    this.setState({ canCloseTab: false });
    window.addEventListener("beforeunload", this.unLoadEvent);
  }

  componentWillUnmount() {
    if (!this.state.canCloseTab) {
      window.removeEventListener("beforeunload", this.unLoadEvent);
    }
  }

  render() {
    if (!this.state.experimentCompleted) {
      if (this.state.xabShowingPrimary) {
        return (
          <div className="App" style={{ cursor: "none" }}>
            <p>Remember this face!</p>
            <div
              style={{
                display: "flex",
                marginTop: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="xab-primary"
                src={experimentImages[this.state.xabPrimaryImageIndex].image}
                height={200}
                width={200}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="App">
            <div
              style={{
                display: "flex",
                marginTop: "15%",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img
                alt="xab-left"
                src={experimentImages[this.state.xabOptionLeftIndex].image}
                height={200}
                width={200}
                onClick={() => {
                  let lastElementIndex = this.xabReadings.length - 1;
                  this.xabReadings[lastElementIndex].timestamp = Date.now();
                  this.xabReadings[lastElementIndex].selection = "left";
                  this.xabReadings[lastElementIndex].mode = "click";

                  if (
                    this.state.xabPrimaryImageIndex ===
                    this.state.xabOptionLeftIndex
                  ) {
                    this.xabReadings[lastElementIndex].correctness = "true";
                  } else {
                    this.xabReadings[lastElementIndex].correctness = "false";
                  }

                  this.xabOptionSelected = true;
                  this.xabShowPrimary();
                }}
              />

              <img
                alt="xab-right"
                src={experimentImages[this.state.xabOptionRightIndex].image}
                height={200}
                width={200}
                onClick={() => {
                  let lastElementIndex = this.xabReadings.length - 1;
                  this.xabReadings[lastElementIndex].timestamp = Date.now();
                  this.xabReadings[lastElementIndex].selection = "right";
                  this.xabReadings[lastElementIndex].mode = "click";

                  if (
                    this.state.xabPrimaryImageIndex ===
                    this.state.xabOptionRightIndex
                  ) {
                    this.xabReadings[lastElementIndex].correctness = "true";
                  } else {
                    this.xabReadings[lastElementIndex].correctness = "false";
                  }

                  this.xabOptionSelected = true;
                  this.xabShowPrimary();
                }}
              />
            </div>
          </div>
        );
      }
    }

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
            "_xab_eeg_" +
            moment(new Date()).format("YYYYMMDDHHmmss") +
            ".csv"
          }
          experimentReadings={this.xabReadings}
          experimentFileName={
            this.state.participantId +
            "_xab_readings_" +
            moment(new Date()).format("YYYYMMDDHHmmss") +
            ".csv"
          }
        ></Results>
      </div>
    );
  }

  startXab = async () => {
    await this.client.start();
    this.client.eegReadings.subscribe((reading) => {
      this.readings.push(reading);
    });

    document.addEventListener("keydown", this.keyPressed);
    this.xabShowOptions();
  };

  xabShowPrimary = () => {
    this.experimentCount = this.experimentCount - 1;
    if (this.experimentCount < 1) {
      document.removeEventListener("keydown", this.keyPressed);
      this.client.disconnect();

      this.processedData = HelperUtil.cleanData(
        this.readings,
        "xab",
        this.state.participantId
      );
      this.setState({ experimentCompleted: true });

      let jsonBody = {};
      jsonBody.participantId = this.state.participantId;
      jsonBody.experiment = "xab";
      jsonBody.isAuxConnected = this.state.isAuxConnected;
      jsonBody.eegResult = this.processedData;
      jsonBody.xabReadings = this.xabReadings;
      jsonBody = JSON.stringify(jsonBody);

      const postData = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonBody,
      };

      fetch(
        "https://museapp-backend-test1.azurewebsites.net/saveData",
        postData
      )
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
    } else {
      let randomIndex = Math.floor(Math.random() * experimentImages.length);
      while (randomIndex === this.state.xabPrimaryImageIndex) {
        randomIndex = Math.floor(Math.random() * experimentImages.length);
        console.log("same index found in xabShowPrimary");
      }

      this.setState({
        xabPrimaryImageIndex: randomIndex,
        xabShowingPrimary: true,
      });
      document.body.requestPointerLock();
      this.xabShowOptions();
    }
  };

  xabShowOptions = () => {
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * experimentImages.length);
      while (randomIndex === this.state.xabPrimaryImageIndex) {
        randomIndex = Math.floor(Math.random() * experimentImages.length);
        console.log("same index found in xabShowOptions");
      }

      document.exitPointerLock();
      let randomDecision = Math.random() < 0.5;
      if (randomDecision) {
        this.setState({
          xabOptionLeftIndex: this.state.xabPrimaryImageIndex,
          xabOptionRightIndex: randomIndex,
          xabShowingPrimary: false,
        });

        this.xabReadings.push({
          stimuli_timestamp: Date.now() - this.primaryImageDuration,
          start_timestamp: Date.now(),
          timestamp: "n/a",
          selection: "n/a",
          mode: "n/a",
          correctness: "n/a",
          participant_id: this.state.participantId,
          left_gender: experimentImages[this.state.xabPrimaryImageIndex].gender,
          left_face_orientation:
            experimentImages[this.state.xabPrimaryImageIndex].faceOrientation,
          left_eye_orientation:
            experimentImages[this.state.xabPrimaryImageIndex].eyeOrientation,
          left_smile: experimentImages[this.state.xabPrimaryImageIndex].smile,
          left_teeth: experimentImages[this.state.xabPrimaryImageIndex].teeth,
          right_gender: experimentImages[randomIndex].gender,
          right_face_orientation: experimentImages[randomIndex].faceOrientation,
          right_eye_orientation: experimentImages[randomIndex].eyeOrientation,
          right_smile: experimentImages[randomIndex].smile,
          right_teeth: experimentImages[randomIndex].teeth,
        });
      } else {
        this.setState({
          xabOptionLeftIndex: randomIndex,
          xabOptionRightIndex: this.state.xabPrimaryImageIndex,
          xabShowingPrimary: false,
        });

        this.xabReadings.push({
          stimuli_timestamp: Date.now() - this.primaryImageDuration,
          start_timestamp: Date.now(),
          timestamp: "n/a",
          selection: "n/a",
          mode: "n/a",
          correctness: "n/a",
          participant_id: this.state.participantId,
          left_gender: experimentImages[randomIndex].gender,
          left_face_orientation: experimentImages[randomIndex].faceOrientation,
          left_eye_orientation: experimentImages[randomIndex].eyeOrientation,
          left_smile: experimentImages[randomIndex].smile,
          left_teeth: experimentImages[randomIndex].teeth,
          right_gender:
            experimentImages[this.state.xabPrimaryImageIndex].gender,
          right_face_orientation:
            experimentImages[this.state.xabPrimaryImageIndex].faceOrientation,
          right_eye_orientation:
            experimentImages[this.state.xabPrimaryImageIndex].eyeOrientation,
          right_smile: experimentImages[this.state.xabPrimaryImageIndex].smile,
          right_teeth: experimentImages[this.state.xabPrimaryImageIndex].teeth,
        });
      }

      this.xabOptionSelected = false;
      setTimeout(() => {
        if (!this.xabOptionSelected) {
          this.xabShowPrimary();
        }
      }, this.optionsDuration);
    }, this.primaryImageDuration);
  };

  keyPressed = (e) => {
    if (!this.state.xabShowingPrimary) {
      if (e.keyCode === 37) {
        console.log("left arrow clicked");

        let lastElementIndex = this.xabReadings.length - 1;
        this.xabReadings[lastElementIndex].timestamp = Date.now();
        this.xabReadings[lastElementIndex].selection = "left";
        this.xabReadings[lastElementIndex].mode = "key";
        if (this.state.xabPrimaryImageIndex === this.state.xabOptionLeftIndex) {
          this.xabReadings[lastElementIndex].correctness = "true";
        } else {
          this.xabReadings[lastElementIndex].correctness = "false";
        }

        this.xabOptionSelected = true;
        this.xabShowPrimary();
      } else if (e.keyCode === 39) {
        console.log("right arrow clicked");

        let lastElementIndex = this.xabReadings.length - 1;
        this.xabReadings[lastElementIndex].timestamp = Date.now();
        this.xabReadings[lastElementIndex].selection = "right";
        this.xabReadings[lastElementIndex].mode = "key";
        if (
          this.state.xabPrimaryImageIndex === this.state.xabOptionRightIndex
        ) {
          this.xabReadings[lastElementIndex].correctness = "true";
        } else {
          this.xabReadings[lastElementIndex].correctness = "false";
        }

        this.xabOptionSelected = true;
        this.xabShowPrimary();
      }
    }
  };

  unLoadEvent = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
}

export default XAB;
