import React from "react";
import moment from "moment";
import HelperUtil from "../../util/HelperUtil";
import Results from "./results";

import face_1 from "../../images/faces/1.jpg";
import face_2 from "../../images/faces/2.jpg";
import face_3 from "../../images/faces/3.jpg";
import face_4 from "../../images/faces/4.jpg";
import face_5 from "../../images/faces/5.jpg";
import face_6 from "../../images/faces/6.jpg";
import face_7 from "../../images/faces/7.jpg";
import face_8 from "../../images/faces/8.jpg";
import face_9 from "../../images/faces/9.jpg";
import face_10 from "../../images/faces/10.jpg";
import face_11 from "../../images/faces/11.jpg";
import face_12 from "../../images/faces/12.jpg";
import face_13 from "../../images/faces/13.jpg";
import face_14 from "../../images/faces/14.jpg";
import face_15 from "../../images/faces/15.jpg";
import face_16 from "../../images/faces/16.jpg";
import face_17 from "../../images/faces/17.jpg";
import face_18 from "../../images/faces/18.jpg";
import face_19 from "../../images/faces/19.jpg";
import face_20 from "../../images/faces/20.jpg";
import face_21 from "../../images/faces/21.jpg";
import face_22 from "../../images/faces/22.jpg";
import face_23 from "../../images/faces/23.jpg";
import face_24 from "../../images/faces/24.jpg";
import face_25 from "../../images/faces/25.jpg";
import face_26 from "../../images/faces/26.jpg";
import face_27 from "../../images/faces/27.jpg";
import face_28 from "../../images/faces/28.jpg";
import face_29 from "../../images/faces/29.jpg";
import face_30 from "../../images/faces/30.jpg";
import face_31 from "../../images/faces/31.jpg";
import face_32 from "../../images/faces/32.jpg";
import face_33 from "../../images/faces/33.jpg";
import face_34 from "../../images/faces/34.jpg";
import face_35 from "../../images/faces/35.jpg";
import face_36 from "../../images/faces/36.jpg";
import face_37 from "../../images/faces/37.jpg";
import face_38 from "../../images/faces/38.jpg";
import face_39 from "../../images/faces/39.jpg";
import face_40 from "../../images/faces/40.jpg";
import face_41 from "../../images/faces/41.jpg";
import face_42 from "../../images/faces/42.jpg";
import face_43 from "../../images/faces/43.jpg";
import face_44 from "../../images/faces/44.jpg";
import face_45 from "../../images/faces/45.jpg";
import face_46 from "../../images/faces/46.jpg";
import face_47 from "../../images/faces/47.jpg";
import face_48 from "../../images/faces/48.jpg";
import house_1 from "../../images/houses/1.jpg";
import house_2 from "../../images/houses/2.jpg";
import house_3 from "../../images/houses/3.jpg";
import house_4 from "../../images/houses/4.jpg";
import house_5 from "../../images/houses/5.jpg";
import house_6 from "../../images/houses/6.jpg";
import house_7 from "../../images/houses/7.jpg";
import house_8 from "../../images/houses/8.jpg";
import house_9 from "../../images/houses/9.jpg";
import house_10 from "../../images/houses/10.jpg";
import house_11 from "../../images/houses/11.jpg";
import house_12 from "../../images/houses/12.jpg";
import house_13 from "../../images/houses/13.jpg";
import house_14 from "../../images/houses/14.jpg";
import house_15 from "../../images/houses/15.jpg";
import house_16 from "../../images/houses/16.jpg";
import house_17 from "../../images/houses/17.jpg";
import house_18 from "../../images/houses/18.jpg";
import house_19 from "../../images/houses/19.jpg";
import house_20 from "../../images/houses/20.jpg";
import house_21 from "../../images/houses/21.jpg";
import house_22 from "../../images/houses/22.jpg";
import house_23 from "../../images/houses/23.jpg";
import house_24 from "../../images/houses/24.jpg";
import house_25 from "../../images/houses/25.jpg";
import house_26 from "../../images/houses/26.jpg";
import house_27 from "../../images/houses/27.jpg";
import house_28 from "../../images/houses/28.jpg";
import house_29 from "../../images/houses/29.jpg";
import house_30 from "../../images/houses/30.jpg";
import house_31 from "../../images/houses/31.jpg";
import house_32 from "../../images/houses/32.jpg";
import house_33 from "../../images/houses/33.jpg";
import house_34 from "../../images/houses/34.jpg";
import house_35 from "../../images/houses/35.jpg";
import house_36 from "../../images/houses/36.jpg";
import house_37 from "../../images/houses/37.jpg";
import house_38 from "../../images/houses/38.jpg";
import house_39 from "../../images/houses/39.jpg";
import house_40 from "../../images/houses/40.jpg";
import house_41 from "../../images/houses/41.jpg";
import house_42 from "../../images/houses/42.jpg";
import house_43 from "../../images/houses/43.jpg";
import house_44 from "../../images/houses/44.jpg";
import house_45 from "../../images/houses/45.jpg";
import house_46 from "../../images/houses/46.jpg";
import house_47 from "../../images/houses/47.jpg";
import house_48 from "../../images/houses/48.jpg";

let experimentImages = [
  {
    image: face_1,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_2,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_3,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_4,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_5,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_6,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "right",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_7,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "right",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_8,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "right",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_9,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "right",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_10,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_11,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_12,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_13,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_14,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_15,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_16,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w teeth",
  },
  {
    image: face_17,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "smile",
    teeth: "w/o teeth",
  },
  {
    image: face_18,
    type: "face",
    gender: "female",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "smile",
    teeth: "w teeth",
  },
  {
    image: face_19,
    type: "face",
    gender: "female",
    faceOrientation: "left",
    eyeOrientation: "right",
    smile: "smile",
    teeth: "w teeth",
  },
  {
    image: face_20,
    type: "face",
    gender: "female",
    faceOrientation: "right",
    eyeOrientation: "right",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_21,
    type: "face",
    gender: "female",
    faceOrientation: "right",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_22,
    type: "face",
    gender: "female",
    faceOrientation: "right",
    eyeOrientation: "right",
    smile: "no smile",
    teeth: "w teeth",
  },
  {
    image: face_23,
    type: "face",
    gender: "female",
    faceOrientation: "left",
    eyeOrientation: "right",
    smile: "smile",
    teeth: "w teeth",
  },
  {
    image: face_24,
    type: "face",
    gender: "female",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "w teeth",
  },
  {
    image: face_25,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_26,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_27,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_28,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_29,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "right",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_30,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "right",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_31,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "right",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_32,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "right",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_33,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_34,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_35,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_36,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_37,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_38,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_39,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_40,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "smile",
    teeth: "w/o teeth",
  },
  {
    image: face_41,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "smile",
    teeth: "w teeth",
  },
  {
    image: face_42,
    type: "face",
    gender: "male",
    faceOrientation: "center",
    eyeOrientation: "center",
    smile: "smile",
    teeth: "w teeth",
  },
  {
    image: face_43,
    type: "face",
    gender: "male",
    faceOrientation: "left",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_44,
    type: "face",
    gender: "male",
    faceOrientation: "right",
    eyeOrientation: "left",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_45,
    type: "face",
    gender: "male",
    faceOrientation: "right",
    eyeOrientation: "right",
    smile: "no smile",
    teeth: "w/o teeth",
  },
  {
    image: face_46,
    type: "face",
    gender: "male",
    faceOrientation: "right",
    eyeOrientation: "right",
    smile: "smile",
    teeth: "w teeth",
  },
  {
    image: face_47,
    type: "face",
    gender: "male",
    faceOrientation: "right",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "w teeth",
  },
  {
    image: face_48,
    type: "face",
    gender: "male",
    faceOrientation: "right",
    eyeOrientation: "left",
    smile: "smile",
    teeth: "w/o teeth",
  },
  { image: house_1, type: "house" },
  { image: house_2, type: "house" },
  { image: house_3, type: "house" },
  { image: house_4, type: "house" },
  { image: house_5, type: "house" },
  { image: house_6, type: "house" },
  { image: house_7, type: "house" },
  { image: house_8, type: "house" },
  { image: house_9, type: "house" },
  { image: house_10, type: "house" },
  { image: house_11, type: "house" },
  { image: house_12, type: "house" },
  { image: house_13, type: "house" },
  { image: house_14, type: "house" },
  { image: house_15, type: "house" },
  { image: house_16, type: "house" },
  { image: house_17, type: "house" },
  { image: house_18, type: "house" },
  { image: house_19, type: "house" },
  { image: house_20, type: "house" },
  { image: house_21, type: "house" },
  { image: house_22, type: "house" },
  { image: house_23, type: "house" },
  { image: house_24, type: "house" },
  { image: house_25, type: "house" },
  { image: house_26, type: "house" },
  { image: house_27, type: "house" },
  { image: house_28, type: "house" },
  { image: house_29, type: "house" },
  { image: house_30, type: "house" },
  { image: house_31, type: "house" },
  { image: house_32, type: "house" },
  { image: house_33, type: "house" },
  { image: house_34, type: "house" },
  { image: house_35, type: "house" },
  { image: house_36, type: "house" },
  { image: house_37, type: "house" },
  { image: house_38, type: "house" },
  { image: house_39, type: "house" },
  { image: house_40, type: "house" },
  { image: house_41, type: "house" },
  { image: house_42, type: "house" },
  { image: house_43, type: "house" },
  { image: house_44, type: "house" },
  { image: house_45, type: "house" },
  { image: house_46, type: "house" },
  { image: house_47, type: "house" },
  { image: house_48, type: "house" },
];

let headers = [
  { label: "timeStamp", key: "timestamp" },
  { label: "index", key: "index" },
  { label: "ch_0", key: "ch_0" },
  { label: "ch_1", key: "ch_1" },
  { label: "ch_2", key: "ch_2" },
  { label: "ch_3", key: "ch_3" },
  { label: "participant_id", key: "participant_id" },
  { label: "type", key: "type" },
  { label: "gender", key: "gender" },
  { label: "face_orientation", key: "face_orientation" },
  { label: "eye_orientation", key: "eye_orientation" },
  { label: "smile", key: "smile" },
  { label: "teeth", key: "teeth" },
];

let headersWithAux = [
  { label: "timeStamp", key: "timestamp" },
  { label: "index", key: "index" },
  { label: "ch_0", key: "ch_0" },
  { label: "ch_1", key: "ch_1" },
  { label: "ch_2", key: "ch_2" },
  { label: "ch_3", key: "ch_3" },
  { label: "ch_4", key: "ch_4" },
  { label: "participant_id", key: "participant_id" },
  { label: "type", key: "type" },
  { label: "gender", key: "gender" },
  { label: "face_orientation", key: "face_orientation" },
  { label: "eye_orientation", key: "eye_orientation" },
  { label: "smile", key: "smile" },
  { label: "teeth", key: "teeth" },
];

class N170 extends React.Component {
  constructor(props) {
    super();

    this.state = {
      participantId: props.participantId,
      isAuxConnected: props.isAuxConnected,
      experimentStarted: false,
      experimentCompleted: true,
      currentImageIndex: undefined,
      canCloseTab: true,
    };

    this.client = props.museClient;
    this.readings = [];
    this.n170Readings = [];
    this.processedData = [];
    this.experimentTime = 10;
    this.uniqueViewCount = this.experimentTime / 2;
    this.houseViewCount = 0;
    this.faceViewCount = 0;
  }

  componentDidMount() {
    this.startN170();
    this.setState({ canCloseTab: false });
    window.addEventListener("beforeunload", this.unLoadEvent);
  }

  componentWillUnmount() {
    if (!this.state.canCloseTab) {
      window.removeEventListener("beforeunload", this.unLoadEvent);
    }
  }

  render() {
    if (!this.state.experimentStarted) {
      return (
        <div className="App text-center">
          <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <h3>
              Welcome to the Visual N170 experiment. <br /> This experiment will
              last 3 minutes. You will see a series of photographs. Please
              simply keep your eyes fixated on the red dot while trying to stay
              still, with your jaws relaxed.
            </h3>

            <button
              className="btn btn-secondary btn-block m-3"
              onClick={() => {
                this.setState({
                  experimentStarted: true,
                  experimentCompleted: false,
                });
              }}
            >
              Click here to begin.
            </button>
          </div>
        </div>
      );
    }

    if (!this.state.experimentCompleted) {
      return (
        <div className="App">
          <div
            style={{
              display: "flex",
              marginTop: "17%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {this.state.currentImageIndex ? (
              <img
                alt="n170-main"
                src={experimentImages[this.state.currentImageIndex].image}
                height={210}
                width={210}
              />
            ) : (
              <div>
                <div
                  className="App text-center"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    marginTop: "84px",
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="App">
        <Results
          processedDataHeaders={
            this.state.isAuxConnected ? headersWithAux : headers
          }
          processedData={this.processedData}
          processedFileName={
            this.state.participantId +
            "_n170_eeg_" +
            moment(new Date()).format("YYYYMMDDHHmmss") +
            ".csv"
          }
          experimentReadings={this.n170Readings}
          experimentFileName={
            this.state.participantId +
            "_n170_readings_" +
            moment(new Date()).format("YYYYMMDDHHmmss") +
            ".csv"
          }
        ></Results>
      </div>
    );
  }

  startN170 = async () => {
    await this.client.start();
    this.client.eegReadings.subscribe((reading) => {
      if (this.state.currentImageIndex !== undefined) {
        if (experimentImages[this.state.currentImageIndex].type === "face") {
          reading.type = experimentImages[this.state.currentImageIndex].type;
          reading.gender =
            experimentImages[this.state.currentImageIndex].gender;
          reading.faceOrientation =
            experimentImages[this.state.currentImageIndex].faceOrientation;
          reading.eyeOrientation =
            experimentImages[this.state.currentImageIndex].eyeOrientation;
          reading.smile = experimentImages[this.state.currentImageIndex].smile;
          reading.teeth = experimentImages[this.state.currentImageIndex].teeth;
        } else {
          reading.type = experimentImages[this.state.currentImageIndex].type;
        }
      }

      this.readings.push(reading);
    });

    setTimeout(() => {
      this.setState(
        {
          currentImageIndex: Math.floor(
            Math.random() * experimentImages.length
          ),
        },
        () => {
          this.n170Readings.push({
            timestamp: Date.now(),
            participant_id: this.state.participantId,
            type: experimentImages[this.state.currentImageIndex].type,
            gender: experimentImages[this.state.currentImageIndex].gender,
            face_orientation:
              experimentImages[this.state.currentImageIndex].faceOrientation,
            eye_orientation:
              experimentImages[this.state.currentImageIndex].eyeOrientation,
            smile: experimentImages[this.state.currentImageIndex].smile,
            teeth: experimentImages[this.state.currentImageIndex].teeth,
          });
          this.experimentTime = this.experimentTime - 1;
          this.updateHouseCount();
          this.changeImageN170();
          document.body.requestPointerLock();
        }
      );
    }, 200);
  };

  changeImageN170 = () => {
    setTimeout(() => {
      if (this.experimentTime <= 0) {
        document.exitPointerLock();
        this.client.disconnect();

        this.processedData = HelperUtil.cleanData(
          this.readings,
          "n170",
          this.state.participantId
        );
        this.setState({ experimentCompleted: true });

        let jsonBody = {};
        jsonBody.participantId = this.state.participantId;
        jsonBody.experiment = "n170";
        jsonBody.isAuxConnected = this.state.isAuxConnected;
        jsonBody.eegResult = this.processedData;
        jsonBody.n170Readings = this.n170Readings;
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
        this.setState({ currentImageIndex: undefined });
        setTimeout(() => {
          let nextImage = Math.floor(Math.random() * experimentImages.length);
          while (nextImage === this.state.currentImageIndex) {
            nextImage = Math.floor(Math.random() * experimentImages.length);
            console.log("same index found in n170");
          }
          if (
            this.houseViewCount >= this.uniqueViewCount &&
            nextImage >= experimentImages.length / 2
          ) {
            nextImage = Math.floor(
              Math.random() * (experimentImages.length / 2)
            );
            while (nextImage === this.state.currentImageIndex) {
              nextImage = Math.floor(
                Math.random() * (experimentImages.length / 2)
              );
              console.log("same index found in n170");
            }
          }

          if (
            this.faceViewCount >= this.uniqueViewCount &&
            nextImage < experimentImages.length / 2
          ) {
            nextImage =
              Math.floor(Math.random() * (experimentImages.length / 2)) +
              experimentImages.length / 2;
            while (nextImage === this.state.currentImageIndex) {
              nextImage =
                Math.floor(Math.random() * (experimentImages.length / 2)) +
                experimentImages.length / 2;
              console.log("same index found in n170");
            }
          }
          this.setState({
            currentImageIndex: nextImage,
          });
          this.n170Readings.push({
            timestamp: Date.now(),
            participant_id: this.state.participantId,
            type: experimentImages[this.state.currentImageIndex].type,
            gender: experimentImages[this.state.currentImageIndex].gender,
            face_orientation:
              experimentImages[this.state.currentImageIndex].faceOrientation,
            eye_orientation:
              experimentImages[this.state.currentImageIndex].eyeOrientation,
            smile: experimentImages[this.state.currentImageIndex].smile,
            teeth: experimentImages[this.state.currentImageIndex].teeth,
          });

          this.experimentTime = this.experimentTime - 1;
          this.updateHouseCount();
          this.changeImageN170();
        }, 500);
      }
    }, 200);
  };

  updateHouseCount = () => {
    if (this.state.currentImageIndex >= experimentImages.length / 2) {
      this.houseViewCount = this.houseViewCount + 1;
    } else {
      this.faceViewCount = this.faceViewCount + 1;
    }
  };

  unLoadEvent = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
}

export default N170;
