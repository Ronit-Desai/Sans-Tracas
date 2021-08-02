import "./App.css";
import React from "react";
import { MuseClient } from "muse-js";
import N170 from "./components/n170";
import XAB from "./components/xab";
import MaskAndFaces from "./components/masksandfaces";
import XabFromPavlovia from "./components/xabfrompavlovia";
import BreathCounting from "./components/breathcounting";

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isParticipantIdValid: false,
      showParticipantError: false,
      participantId: "",
      deviceConnected: false,
      auxConnected: false,
      experimentSelected: false,
    };

    this.client = new MuseClient();
  }

  render() {
    if (!this.state.isParticipantIdValid) {
      return (
        <div className="App text-center">
          <div class="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <div className="m-3">
              <span
                class="material-icons mb-2"
                style={{ fontSize: 100, color: "#57a8ff" }}
              >
                account_circle
              </span>
              <input
                type="text"
                name="participantId"
                placeholder="Enter Participant ID"
                value={this.state.participantId}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>

            {this.state.showParticipantError ? (
              <h2> Please enter participant ID</h2>
            ) : null}

            <br />
            <h5>
              <input
                type="checkbox"
                className="form-check-input mr-2"
                defaultChecked={this.state.auxConnected}
                onChange={() => {
                  this.setState({ auxConnected: !this.state.auxConnected });
                }}
              />
              <span className="ml-1">
                I have already connected to the Muse's AUX port for today's
                experiment.
              </span>
            </h5>

            <br />
            <button
              className="btn btn-primary"
              onClick={this.recordParticipantId}
            >
              Submit
            </button>
          </div>
        </div>
      );
    }

    if (!this.state.deviceConnected) {
      return (
        <div className="App text-center">
          <div class="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <h5>
              Please turn on your device Bluetooth and press the button below to
              connect with the EEG device.
            </h5>
            <button
              className="btn btn-primary btn-block m-3"
              onClick={this.connect}
            >
              Connect Device
            </button>
            <p>
              PLease make sure you've followed the video to properly fit the
              Muse on your head and turned it on.
            </p>
          </div>
        </div>
      );
    }

    if (!this.state.experimentSelected) {
      return (
        <div className="App text-center">
          <div class="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <h5>Device connected successfully. Select experiment to begin!</h5>
            <br />
            <button
              className="btn btn-outline-success btn-block w-100 m-2"
              onClick={() => {
                this.setState({ experimentSelected: "n170" });
              }}
            >
              Visual N170
            </button>
            <br />

            <button
              className="btn btn-outline-success btn-block w-100 m-2"
              onClick={() => {
                this.setState({ experimentSelected: "xab" });
              }}
            >
              Face XAB
            </button>
            <br />

            <button
              className="btn btn-outline-success btn-block w-100 m-2"
              onClick={() => {
                this.setState({ experimentSelected: "maskandfaces" });
              }}
            >
              Mask and Faces
            </button>
            <br />

            <button
              className="btn btn-outline-success btn-block w-100 m-2"
              onClick={() => {
                this.setState({ experimentSelected: "xabfrompavlovia" });
              }}
            >
              Xab From Pavlovia
            </button>
            <br />

            <button
              className="btn btn-outline-success btn-block w-100 m-2"
              onClick={() => {
                this.setState({ experimentSelected: "breathcounting" });
              }}
            >
              BreathCounting
            </button>
          </div>
        </div>
      );
    }

    if (this.state.experimentSelected === "n170") {
      return (
        <N170
          museClient={this.client}
          participantId={this.state.participantId}
          isAuxConnected={this.state.auxConnected}
        />
      );
    }

    if (this.state.experimentSelected === "xab") {
      return (
        <XAB
          museClient={this.client}
          participantId={this.state.participantId}
          isAuxConnected={this.state.auxConnected}
        />
      );
    }

    if (this.state.experimentSelected === "maskandfaces") {
      return (
        <MaskAndFaces
          museClient={this.client}
          participantId={this.state.participantId}
          isAuxConnected={this.state.auxConnected}
        />
      );
    }

    if (this.state.experimentSelected === "xabfrompavlovia") {
      return (
        <XabFromPavlovia
          museClient={this.client}
          participantId={this.state.participantId}
          isAuxConnected={this.state.auxConnected}
        />
      );
    }

    if (this.state.experimentSelected === "breathcounting") {
      return (
        <BreathCounting
          museClient={this.client}
          participantId={this.state.participantId}
          isAuxConnected={this.state.auxConnected}
        />
      );
    }
  }

  recordParticipantId = () => {
    if (this.state.participantId.length !== 0) {
      this.setState({ isParticipantIdValid: true });
    } else {
      this.setState({ showParticipantError: true });
    }
  };

  connect = async () => {
    if (this.state.auxConnected) {
      this.client.enableAux = true;
    }
    await this.client.connect();
    this.setState({ deviceConnected: true });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
}

export default App;
