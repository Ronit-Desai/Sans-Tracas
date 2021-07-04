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
        <div className="App">
          <div style={{ marginTop: 30 }}>
            <input
              type="text"
              name="participantId"
              placeholder="Enter Participant ID"
              value={this.state.participantId}
              onChange={this.handleChange}
            />
          </div>

          {this.state.showParticipantError ? (
            <p style={{ color: "red" }}> Please enter participant ID</p>
          ) : null}

          <br />
          <p>
            <input
              type="checkbox"
              defaultChecked={this.state.auxConnected}
              onChange={() => {
                this.setState({ auxConnected: !this.state.auxConnected });
              }}
            />
            Have you connected anything to the Muse's AUX port for today's
            experiment?
          </p>

          <br />
          <button onClick={this.recordParticipantId}>Submit</button>
        </div>
      );
    }

    if (!this.state.deviceConnected) {
      return (
        <div className="App">
          <button style={{ marginTop: 50, padding: 20 }} onClick={this.connect}>
            Connect Device
          </button>
        </div>
      );
    }

    if (!this.state.experimentSelected) {
      return (
        <div className="App">
          <p>Device connected successfully. Select experiment to begin!</p>
          <button
            style={{ width: 150, height: 50, marginRight: 20 }}
            onClick={() => {
              this.setState({ experimentSelected: "n170" });
            }}
          >
            Visual N170
          </button>
          <button
            style={{ width: 150, height: 50, marginRight: 20 }}
            onClick={() => {
              this.setState({ experimentSelected: "xab" });
            }}
          >
            Face XAB
          </button>
          <button
            style={{ width: 150, height: 50, marginRight: 20 }}
            onClick={() => {
              this.setState({ experimentSelected: "maskandfaces" });
            }}
          >
            Mask and Faces
          </button>
          <button
            style={{ width: 150, height: 50, marginRight: 20 }}
            onClick={() => {
              this.setState({ experimentSelected: "xabfrompavlovia" });
            }}
          >
            Xab From Pavlovia
          </button>
          <button
            style={{ width: 150, height: 50 }}
            onClick={() => {
              this.setState({ experimentSelected: "breathcounting" });
            }}
          >
            BreathCounting
          </button>
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
