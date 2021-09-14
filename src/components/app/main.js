import React from "react";
import { MuseClient } from "muse-js";
import N170 from "./n170";
import XAB from "./xab";
import MaskAndFaces from "./masksandfaces";
import XabFromPavlovia from "./xabfrompavlovia";
import BreathCounting from "./breathcounting";
import { CartesianGrid, Line, LineChart, YAxis } from "recharts";

class AppMain extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isParticipantIdValid: false,
      showParticipantError: false,
      participantId: "",
      deviceConnected: false,
      auxConnected: false,
      experimentSelected: false,
      calibrationDone: false,
      calibrationStatus: "not-started",
      exp1DescShow: false,
      exp2DescShow: false,
      exp3DescShow: false,
      exp4DescShow: false,
      exp5DescShow: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.client = new MuseClient();
    this.elem = document.documentElement;
  }

  toggleNav(expNo) {
    if (expNo === 1) {
      this.setState({
        exp1DescShow: !this.state.exp1DescShow,
      });
    } else if (expNo === 2) {
      this.setState({
        exp2DescShow: !this.state.exp2DescShow,
      });
    } else if (expNo === 3) {
      this.setState({
        exp3DescShow: !this.state.exp3DescShow,
      });
    } else if (expNo === 4) {
      this.setState({
        exp4DescShow: !this.state.exp4DescShow,
      });
    } else if (expNo === 5) {
      this.setState({
        exp5DescShow: !this.state.exp5DescShow,
      });
    }
  }

  render() {
    if (!this.state.isParticipantIdValid) {
      return (
        <div className="App text-center">
          <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <div className="m-3">
              <span
                className="material-icons mb-2"
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

    // if (!this.state.deviceConnected) {
    //   return (
    //     <div className="App text-center">
    //       <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
    //         <h5>
    //           <span className="ml-1">
    //             Have you connected anything to the Muse's AUX port for today's
    //             experiment.
    //           </span>
    //           <div
    //             style={{
    //               display: "flex",
    //               flexDirection: "row",
    //               justifyContent: "center",
    //               alignItems: "center",
    //               gap: "20px",
    //             }}
    //           >
    //             <div>
    //               <input
    //                 type="radio"
    //                 checked={this.state.auxConnected}
    //                 onChange={() => {
    //                   this.setState({ auxConnected: true });
    //                 }}
    //               />
    //               Yes
    //             </div>
    //             <div>
    //               <input
    //                 type="radio"
    //                 checked={!this.state.auxConnected}
    //                 onChange={() => {
    //                   this.setState({ auxConnected: false });
    //                 }}
    //               />
    //               No
    //             </div>
    //           </div>
    //         </h5>
    //         <h5>
    //           Please turn on your device Bluetooth and press the button below to
    //           connect with the EEG device.
    //         </h5>
    //         <button
    //           className="btn btn-primary btn-block m-3"
    //           onClick={this.connect}
    //         >
    //           Connect Device
    //         </button>
    //         <p>
    //           Please make sure you've followed the video to properly fit the
    //           Muse on your head and turned it on.
    //         </p>
    //       </div>
    //     </div>
    //   );
    // }

    if (!this.state.experimentSelected) {
      return (
        <div className="App">
          <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <h5>Device connected successfully. Select experiment to begin!</h5>
            <br />
            <div className="card p-2">
              <div
                className="row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="col-md-6 col-sm-6 text-start fw-bold">
                  <span
                    class="material-icons"
                    style={{ fontSize: 35, color: "#57a8ff" }}
                  >
                    psychology
                  </span>
                  Visual N170
                </div>
                <div className="col-md-6 col-sm-6 text-end">
                  <button
                    className="btn btn-link"
                    onClick={() => this.toggleNav(1)}
                  >
                    <span
                      className="material-icons"
                      style={{ color: "#333634" }}
                    >
                      menu
                    </span>
                  </button>
                  <button
                    className="btn btn-link"
                    onClick={() => {
                      this.setState({ experimentSelected: "n170" });
                      this.openFullscreen();
                    }}
                  >
                    <span
                      className="material-icons"
                      style={{ color: "#21eb89" }}
                    >
                      play_circle_outline
                    </span>
                  </button>
                </div>
              </div>
              <div
                className={
                  (this.state.exp1DescShow ? "show" : "") + " collapse"
                }
                id="collapseExample"
              >
                <div className="card-body">
                  Visual N170 Experiemnt Description.
                  <br />
                </div>
              </div>
            </div>
            <br />

            <div className="card p-2">
              <div
                className="row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="col-md-6 col-sm-6 text-start fw-bold">
                  <span
                    className="material-icons"
                    style={{ fontSize: 35, color: "#57a8ff" }}
                  >
                    psychology
                  </span>
                  Face XAB
                </div>
                <div className="col-md-6 col-sm-6 text-end">
                  <button
                    className="btn btn-link"
                    onClick={() => this.toggleNav(2)}
                  >
                    <span
                      className="material-icons"
                      style={{ color: "#333634" }}
                    >
                      menu
                    </span>
                  </button>
                  <button
                    className="btn btn-link"
                    onClick={() => {
                      this.setState({ experimentSelected: "xab" });
                      this.openFullscreen();
                    }}
                  >
                    <span
                      className="material-icons"
                      style={{ color: "#21eb89" }}
                    >
                      play_circle_outline
                    </span>
                  </button>
                </div>
              </div>
              <div
                className={
                  (this.state.exp2DescShow ? "show" : "") + " collapse"
                }
                id="collapseExample"
              >
                <div className="card-body">
                  Face XAB Experiemnt Description.
                  <br />
                </div>
              </div>
            </div>
            <br />

            <div className="card p-2">
              <div
                className="row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="col-md-6 col-sm-6 text-start fw-bold">
                  <span
                    className="material-icons"
                    style={{ fontSize: 35, color: "#57a8ff" }}
                  >
                    psychology
                  </span>
                  Mask and Faces
                </div>
                <div className="col-md-6 col-sm-6 text-end">
                  <button
                    className="btn btn-link"
                    onClick={() => this.toggleNav(3)}
                  >
                    <span
                      className="material-icons"
                      style={{ color: "#333634" }}
                    >
                      menu
                    </span>
                  </button>
                  <button
                    className="btn btn-link"
                    onClick={() => {
                      this.setState({ experimentSelected: "maskandfaces" });
                      this.openFullscreen();
                    }}
                  >
                    <span
                      className="material-icons"
                      style={{ color: "#21eb89" }}
                    >
                      play_circle_outline
                    </span>
                  </button>
                </div>
              </div>
              <div
                className={
                  (this.state.exp3DescShow ? "show" : "") + " collapse"
                }
                id="collapseExample"
              >
                <div className="card-body">
                  Mask and Faces Experiemnt Description.
                  <br />
                </div>
              </div>
            </div>
            <br />

            <div className="card p-2">
              <div
                className="row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="col-md-6 col-sm-6 text-start fw-bold">
                  <span
                    className="material-icons"
                    style={{ fontSize: 35, color: "#57a8ff" }}
                  >
                    psychology
                  </span>
                  Xab From Pavlovia
                </div>
                <div className="col-md-6 col-sm-6 text-end">
                  <button
                    className="btn btn-link"
                    onClick={() => this.toggleNav(4)}
                  >
                    <span
                      className="material-icons"
                      style={{ color: "#333634" }}
                    >
                      menu
                    </span>
                  </button>
                  <button
                    className="btn btn-link"
                    onClick={() => {
                      this.setState({ experimentSelected: "xabfrompavlovia" });
                      this.openFullscreen();
                    }}
                  >
                    <span
                      className="material-icons"
                      style={{ color: "#21eb89" }}
                    >
                      play_circle_outline
                    </span>
                  </button>
                </div>
              </div>
              <div
                className={
                  (this.state.exp4DescShow ? "show" : "") + " collapse"
                }
                id="collapseExample"
              >
                <div className="card-body">
                  Xab From Pavlovia Experiemnt Description.
                  <br />
                </div>
              </div>
            </div>
            <br />

            <div className="card p-2">
              <div
                className="row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="col-md-6 col-sm-6 text-start fw-bold">
                  <span
                    className="material-icons"
                    style={{ fontSize: 35, color: "#57a8ff" }}
                  >
                    psychology
                  </span>
                  Breath Counting
                </div>
                <div className="col-md-6 col-sm-6 text-end">
                  <button
                    className="btn btn-link"
                    onClick={() => this.toggleNav(5)}
                  >
                    <span
                      className="material-icons"
                      style={{ color: "#333634" }}
                    >
                      menu
                    </span>
                  </button>
                  <button
                    className="btn btn-link"
                    onClick={() => {
                      this.setState({ experimentSelected: "breathcounting" });
                      this.openFullscreen();
                    }}
                  >
                    <span
                      className="material-icons"
                      style={{ color: "#21eb89" }}
                    >
                      play_circle_outline
                    </span>
                  </button>
                </div>
              </div>
              <div
                className={
                  (this.state.exp5DescShow ? "show" : "") + " collapse"
                }
                id="collapseExample"
              >
                <div className="card-body">
                  Breath Counting Experiemnt Description.
                  <br />
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      );
    }

    if (!this.state.calibrationDone) {
      return (
        <div className="App">
          {this.state.calibrationStatus === "not-started" ? (
            <button onClick={this.startRecording}>Start Recording</button>
          ) : null}
          {this.state.calibrationStatus === "process" ? (
            <h2>Calibration In Process</h2>
          ) : null}
          {this.state.calibrationStatus === "complete" ? (
            <LineChart
              width={150}
              height={150}
              data={[{ y: 2 }, { y: 4 }, { y: 0 }, { y: -2 }, { y: 6 }]}
            >
              <Line type="monotone" dataKey="y" stroke="#8884d8"></Line>
              <CartesianGrid stroke="#ccc" />
              <YAxis />
            </LineChart>
          ) : null}
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

  openFullscreen = async () => {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Safari */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE11 */
      this.elem.msRequestFullscreen();
    }
  };

  connect = async () => {
    if (this.state.auxConnected) {
      this.client.enableAux = true;
    }
    await this.client.connect();
    this.setState({ deviceConnected: true });
  };

  startRecording = () => {
    this.setState({ calibrationStatus: "process" });
    setTimeout(() => {
      this.stopRecording();
    }, 3000);
  };

  stopRecording = () => {
    this.setState({ calibrationStatus: "complete" });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
}

export default AppMain;
