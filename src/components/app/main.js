import React from "react";
import { MuseClient } from "muse-js";
import { create, all } from "mathjs";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  YAxis,
  BarChart,
  Bar,
  Cell,
  XAxis,
  Tooltip,
  Legend,
  CartesianAxis,
} from "recharts";
import ProgressBar from "react-bootstrap/ProgressBar";
import N170 from "./n170";
import XAB from "./xab";
import MaskAndFaces from "./masksandfaces";
import XabFromPavlovia from "./xabfrompavlovia";
import BreathCounting from "./breathcounting";
import HelperUtil from "../../util/HelperUtil";

const calibrationTime = 31000;
const config = {};
const math = create(all, config);

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
      currentCalibrationTime: calibrationTime,
      exp1DescShow: false,
      exp2DescShow: false,
      exp3DescShow: false,
      exp4DescShow: false,
      exp5DescShow: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.client = new MuseClient();
    this.elem = document.documentElement;
    this.readings = [];
    this.processedData = [];
    this.chartData = [];
  }

  render() {
    if (!this.state.experimentSelected) {
      return (
        <div className="App">
          <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <h2>Please select an experiment to begin!</h2>
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

    if (!this.state.deviceConnected) {
      return (
        <div className="App text-center">
          <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <h5>
              <span className="ml-1">
                Have you connected anything to the Muse's AUX port for today's
                experiment.
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div>
                  <input
                    type="radio"
                    checked={this.state.auxConnected}
                    onChange={() => {
                      this.setState({ auxConnected: true });
                    }}
                  />
                  Yes
                </div>
                <div>
                  <input
                    type="radio"
                    checked={!this.state.auxConnected}
                    onChange={() => {
                      this.setState({ auxConnected: false });
                    }}
                  />
                  No
                </div>
              </div>
            </h5>
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
              Please make sure you've followed the video to properly fit the
              Muse on your head and turned it on.
            </p>
          </div>
        </div>
      );
    }

    if (!this.state.calibrationDone) {
      return (
        <div className="App text-center">
          {this.state.calibrationStatus === "not-started" ? (
            <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
              <h5>
                <span className="ml-1">
                  <h3>
                    {" "}
                    Congratulations! Your device has been successfully connected
                    to the system.{" "}
                  </h3>{" "}
                  <br /> Before starting with the experiment, you will go
                  through a calibration process. In the end, you will get a
                  visual representation of the data coming from all channels of
                  your Muse device and decide whether you want to improve the
                  data quality before continuing with the experiment.
                  <br /> <br />
                  Please click on the button and close your eyes to begin the
                  calibration process.
                </span>{" "}
                <br />
                <button
                  className="btn btn-secondary btn-block m-3"
                  onClick={this.startRecording}
                >
                  Start Calibration
                </button>
              </h5>
            </div>
          ) : null}
          {this.state.calibrationStatus === "process" ? (
            <>
              <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
                <span className="ml-1">
                  <h1>
                    Please close your eyes and try to keep a relaxed mind while
                    the system is calibrating your brain signals.
                  </h1>
                  <br />
                  <ProgressBar
                    animated
                    variant="success"
                    now={
                      (calibrationTime - this.state.currentCalibrationTime) /
                      1000
                    }
                    max={calibrationTime / 1000}
                  />
                  <br />
                  <h1>
                    {this.state.currentCalibrationTime / 1000} Seconds Remaining
                  </h1>
                </span>
              </div>
            </>
          ) : null}
          {this.state.calibrationStatus === "complete" ? (
            <>
              <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
                <h5>
                  <span className="ml-1">
                    Please see below the visualization of the data stream (in
                    the form of Line Charts) concerning the channel name [TP1,
                    TP2, TP3, TP4, and AUX (optional)]
                  </span>
                </h5>
              </div>
              <LineChart width={2100} height={150} data={this.processedData}>
                <Legend align="left" verticalAlign="middle" />
                <Line
                  name="TP1"
                  type="monotone"
                  dataKey="ch_0"
                  stroke="black"
                  dot={false}
                ></Line>
                <CartesianAxis axisLine="true" />
                <YAxis domain={[-100, 100]} allowDataOverflow="True" />
              </LineChart>
              <LineChart width={2100} height={150} data={this.processedData}>
                <Legend align="left" verticalAlign="middle" />
                <Line
                  name="TP2"
                  type="monotone"
                  dataKey="ch_1"
                  stroke="#ff7f0e"
                  dot={false}
                ></Line>
                <CartesianAxis axisLine="true" />
                <YAxis />
              </LineChart>
              <LineChart width={2100} height={150} data={this.processedData}>
                <Legend align="left" verticalAlign="middle" />
                <Line
                  name="TP3"
                  type="monotone"
                  dataKey="ch_2"
                  stroke="#2ca02c"
                  dot={false}
                ></Line>
                <CartesianGrid stroke="#ccc" />
                <YAxis domain={[-100, 100]} allowDataOverflow="True" />
              </LineChart>
              <LineChart width={2100} height={150} data={this.processedData}>
                <Legend align="left" verticalAlign="middle" />
                <Line
                  name="TP4"
                  type="monotone"
                  dataKey="ch_3"
                  stroke="#FF0000"
                  dot={false}
                ></Line>
                <CartesianGrid stroke="#ccc" />
                <YAxis />
              </LineChart>
              <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
                <h5>
                  <span className="ml-1">
                    Please see below Bar Chart to understand the quality of the
                    data. Hovering over the Bars will display additional
                    information associated with it. From the additional data,
                    please look at "Verdict" to properly understand the quality
                    of your data.
                  </span>
                </h5>
              </div>
              <ResponsiveContainer width="95%" height={450}>
                <BarChart
                  margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                  data={this.chartData}
                >
                  <XAxis dataKey="name" stroke="#000000" />
                  <YAxis stroke="#000000" />
                  <Tooltip
                    wrapperStyle={{
                      width: 175,
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: 17,
                    }}
                    content={<this.CustomTooltip />}
                  />
                  <Bar
                    dataKey="total"
                    fill="#00a0fc"
                    stroke="#000000"
                    strokeWidth={1}
                  >
                    {this.chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
                <h5>
                  <span className="ml-1">
                    <h3>
                      The accepted values for Verdict are "Great," "Good," and
                      "Okay."{" "}
                    </h3>{" "}
                    <br />
                    Suppose the quality of your data is shown to be "Bad." In
                    that case, it is strongly advised that you re-connect the
                    Muse device by clicking the "Re-Connect" button. <br /> Make
                    sure the Muse device fits properly on your head by following
                    the video on the next page. You can also use the
                    "Re-connect" button to improve your data quality. <br />
                    <br />
                    Whereas, If you're satisfied with your current data quality,
                    please click on the "Start Experiment" button to begin your
                    experiment. <br />
                    Please focus all your attention on the screen once you start
                    the experiment. <br /> <br />
                    <button
                      className="btn btn-warning btn-block m-3"
                      onClick={() => {
                        this.client.disconnect();
                        this.setState({ deviceConnected: false });
                      }}
                    >
                      Re-Connect
                    </button>
                    <button
                      className="btn btn-success btn-block m-3"
                      onClick={() => {
                        this.setState({ calibrationDone: true });
                        this.openFullscreen();
                      }}
                    >
                      Start Experiemnt
                    </button>
                  </span>
                </h5>
              </div>
            </>
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

  startRecording = async () => {
    await this.client.start();
    this.client.eegReadings.subscribe((reading) => {
      this.readings.push(reading);
    });
    this.setState({ calibrationStatus: "process" });
    this.calculateRecordingTiming();
  };

  calculateRecordingTiming = () => {
    if (this.state.currentCalibrationTime <= 0) {
      this.stopRecording();
    } else {
      this.setState({
        currentCalibrationTime: this.state.currentCalibrationTime - 1000,
      });
      setTimeout(() => {
        this.calculateRecordingTiming();
      }, 1000);
    }
  };

  stopRecording = () => {
    this.client.pause();
    this.processedData = HelperUtil.cleanData(this.readings);

    const stdCh0 = math.std(this.processedData.map((data) => data.ch_0));
    const stdCh1 = math.std(this.processedData.map((data) => data.ch_1));
    const stdCh2 = math.std(this.processedData.map((data) => data.ch_2));
    const stdCh3 = math.std(this.processedData.map((data) => data.ch_3));

    this.chartData.push(
      {
        name: "TP1",
        total: stdCh0,
        verdict: this.calculateVerdict(stdCh0),
        color: this.calculateVerdictColor(stdCh0),
      },
      {
        name: "TP2",
        total: stdCh1,
        verdict: this.calculateVerdict(stdCh1),
        color: this.calculateVerdictColor(stdCh1),
      },
      {
        name: "TP3",
        total: stdCh2,
        verdict: this.calculateVerdict(stdCh2),
        color: this.calculateVerdictColor(stdCh2),
      },
      {
        name: "TP4",
        total: stdCh3,
        verdict: this.calculateVerdict(stdCh3),
        color: this.calculateVerdictColor(stdCh3),
      }
    );

    this.setState({ calibrationStatus: "complete" });
  };

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

  CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="name">{`${payload[0].payload.name}`}</p>
          <p className="total">Total: {`${payload[0].payload.total}`}</p>
          <p className="verdict">Verdict: {`${payload[0].payload.verdict}`}</p>
        </div>
      );
    }

    return null;
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  calculateVerdict = (std) => {
    if (std <= 15) {
      return "Great";
    } else if (std > 15 && std <= 30) {
      return "Good";
    } else if (std > 30 && std <= 45) {
      return "Okay";
    } else {
      return "Bad";
    }
  };

  calculateVerdictColor = (std) => {
    if (std <= 15) {
      return "#2ca02c";
    } else if (std > 15 && std <= 30) {
      return "#FFFF00";
    } else if (std > 30 && std <= 45) {
      return "#ff7f0e";
    } else {
      return "#FF0000";
    }
  };
}

export default AppMain;
