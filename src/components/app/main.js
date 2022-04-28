import React from "react";
import { Link } from "react-router-dom";
import { MuseClient } from "muse-js";
import { create, all } from "mathjs";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  YAxis,
  Bar,
  Area,
  Cell,
  XAxis,
  Tooltip,
  Legend,
  ComposedChart,
} from "recharts";

import ProgressBar from "react-bootstrap/ProgressBar";
import N170 from "./n170";
import XAB from "./xab";
import MaskAndFaces from "./masksandfaces";
import XabFromPavlovia from "./xabfrompavlovia";
import BreathCounting from "./breathcounting";
import HelperUtil from "../../util/HelperUtil";
import RestingState from "./restingstate";
import audio1 from "../../audio/audio1.mp3";

const calibrationTime = 31000;
const config = {};
const math = create(all, config);

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("respId");
console.log(id);

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
      exp6DescShow: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.client = new MuseClient();
    this.elem = document.documentElement;
    this.readings = [];
    this.processedData = [];
    this.chartData = [];
    this.audio = new Audio(audio1);
  }

  render() {
    if (!this.state.experimentSelected) {
      return (
        <div className="App">
          <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <h1>
              Welcome to Sans Tracas - the first of its kind cross-platform tool
              that runs EEG experiments online.{" "}
            </h1>{" "}
            <br /> <br />
            <h3>The video below demonstrates Sans Tracas in action.</h3>
            <div className="iframe-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/feILrGkdO8A"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              ></iframe>{" "}
            </div>{" "}
            <br />
            <br />
            <h3>
              Before you start with any of our fun experiments, please go
              through the{" "}
              <Link
                className="nav-item nav-link"
                to="/documentation/requirements"
              >
                platform requirements
              </Link>
              to make sure that the device you're currently using is compatible
              with Sans Tracas.
            </h3>
          </div>
          <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
            <h2>Please select an experiment to begin.</h2>
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
                  In this experiment you will be asked to look at a series of
                  faces and houses on the screen. Please keep your eyes fixated
                  on the dot. There is no other task. This experiment takes
                  approximately 3 minutes.
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
                  In this experiment you will be asked to look at remember a
                  face and then choose it from available options. You will have
                  to repeat this process a few times. This experiment takes
                  approximately 5 minutes.
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
                  Resting State
                </div>
                <div className="col-md-6 col-sm-6 text-end">
                  <button
                    className="btn btn-link"
                    onClick={() => this.toggleNav(6)}
                  >
                    <spanline
                      className="material-icons"
                      style={{ color: "#333634" }}
                    >
                      menu
                    </spanline>
                  </button>
                  <button
                    className="btn btn-link"
                    onClick={() => {
                      this.setState({ experimentSelected: "restingstate" });
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
                  (this.state.exp6DescShow ? "show" : "") + " collapse"
                }
                id="collapseExample"
              >
                <div className="card-body">
                  In this experiment you will be asked to just relax for a few
                  minutes of your choosing. You can choose to keep your eyes
                  open or closed for the expeirment time. You can also choose to
                  meditate for that time-period. After the experiment, you will
                  be asked to answer a few questions regarding your sleepiness.
                  There is no other task. The experiment time for this
                  experiment will depend on what you choose it to be.
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
              <h3> Your Random Participant Id is: </h3> <h1> {id} </h1>
            </div>
            <div>
              Please make sure to copy this Participant Id and store it
              somewhere as it will be needed during the post-study survey.
            </div>
          </div>
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
              1. Please turn on Bluetooth on your computer (and your location
              too if you're using a tablet/smartphone). <br /> 2. Press the
              connect device button below to begin pairing your Muse with Sans
              Tracas. <br /> 3. Press the power button on your Muse to turn it
              on and pair.
            </h5>
            <button
              className="btn btn-primary btn-block m-3"
              onClick={this.connect}
            >
              Connect Device
            </button>
            <p>
              If nothing happens after pressing the "Connect Device" button,
              please ensure that your Muse device is turned on and that you are
              using either Google Chrome or Bluefy browser.{" "}
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
                  <h3> Great! Muse is now connected to the platform. </h3>{" "}
                  <br />
                  Please follow the videos below and place the Muse headband on
                  your head and double-check that there is no hair between the
                  sensors and your skin, and that the headband fits snuggly on
                  your head.
                  <br /> <br /> <br />
                  If you have a "Muse 2016" or a "Muse 2" headband, please
                  follow this video:
                  <div className="iframe-container">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/v8xUYqqJAIg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    ></iframe>{" "}
                  </div>
                  <br /> <br /> <br /> <br />
                  If you have a "Muse S" headband, please follow this video:
                  <div className="iframe-container">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/61nJZxXwbQc"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    ></iframe>{" "}
                  </div>
                  <br /> <br /> Before starting the experiment, let's first
                  ensure that the Muse sensors are receiving good signal. <br />{" "}
                  <br />
                  During this Signal Quality check, we will ask you to sit with
                  your eyes closed, and try not to move for 30 seconds while we
                  record the signals coming from the Muse sensors.  After 30
                  seconds, you can open your eyes and inspect the results and
                  can repeat the process until the signal is good enough to
                  continue.
                  <br /> <br />
                  When you are ready, click on the “Check my signal” button to
                  verify if the Muse sensors are receiving a good signal. You
                  will be asked to relax your jaw, close your eyes, and try not
                  to move for 30 seconds while the Muse signals are recorded.
                </span>{" "}
                <br />
                <button
                  className="btn btn-secondary btn-block m-3"
                  onClick={this.startRecording}
                >
                  Check my signal
                </button>
              </h5>
            </div>
          ) : null}
          {this.state.calibrationStatus === "process" ? (
            <>
              <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
                <span className="ml-1">
                  <h1>
                    Please relax your jaw, close your eyes, and count to 30 in
                    your head. Please try not to move for these 30 seconds while
                    we record the Muse signals.
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
                    {this.state.currentCalibrationTime / 1000} seconds remaining
                  </h1>
                  <h5>
                    {" "}
                    When the timer runs to 0, please give the platform some time
                    to process and display your data. If you're stuck on "0
                    seconds remaining" for more than 3 minutes, please refresh
                    the website and follow the steps again.
                  </h5>
                </span>
              </div>
            </>
          ) : null}
          {this.state.calibrationStatus === "complete" ? (
            <>
              <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
                <h5>
                  <span className="ml-1">
                    The figure below displays the recorded signals for the four
                    Muse sensors across the 30 seconds:
                    <br />
                    Green - left ear, Blue - left front, Red - right front, Pink
                    - right ear. You should see a line plot around zero. <br />
                    If no data show up, or if the graph is completely covered in
                    a colour, please follow the steps to improve signal quality
                    and repeat the signal check again.
                  </span>
                </h5>
              </div>{" "}
              <br />
              <LineChart width={2100} height={150} data={this.processedData}>
                <Legend align="left" verticalAlign="middle" />
                <Line
                  name="TP9"
                  type="monotone"
                  dataKey="ch_0"
                  stroke="#00F56E"
                  dot={false}
                ></Line>
                <CartesianGrid stroke="#ccc" />
                <YAxis
                  domain={[-100, 100]}
                  allowDataOverflow="True"
                  interval={0}
                />
              </LineChart>{" "}
              <br />
              <LineChart width={2100} height={150} data={this.processedData}>
                <Legend align="left" verticalAlign="middle" />
                <Line
                  name="AF7"
                  type="monotone"
                  dataKey="ch_1"
                  stroke="#2026FA"
                  dot={false}
                ></Line>
                <CartesianGrid stroke="#ccc" />
                <YAxis
                  domain={[-100, 100]}
                  allowDataOverflow="True"
                  interval={0}
                />
              </LineChart>{" "}
              <br />
              <LineChart width={2100} height={150} data={this.processedData}>
                <Legend align="left" verticalAlign="middle" />
                <Line
                  name="AF8"
                  type="monotone"
                  dataKey="ch_2"
                  stroke="#FA0E00"
                  dot={false}
                ></Line>
                <CartesianGrid stroke="#ccc" />
                <YAxis
                  domain={[-100, 100]}
                  allowDataOverflow="True"
                  interval={0}
                />
              </LineChart>{" "}
              <br />
              <LineChart width={2100} height={150} data={this.processedData}>
                <Legend align="left" verticalAlign="middle" />
                <Line
                  name="TP10"
                  type="monotone"
                  dataKey="ch_3"
                  stroke="#EB23F4"
                  dot={false}
                ></Line>
                <CartesianGrid stroke="#ccc" />
                <YAxis
                  domain={[-100, 100]}
                  allowDataOverflow="True"
                  interval={0}
                />
              </LineChart>
              <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
                <h5>
                  <span className="ml-1">
                    The bars below display the total amount of signal
                    variability in each channel, with higher bars indicating
                    poorer signal quality. Hovering over the Bars will display
                    additional information associated with it. <br /> Note: If
                    the graph is empty, assume that the quality is poor.
                  </span>
                </h5>
              </div>
              <br />
              <ResponsiveContainer width="83%" height={450}>
                <ComposedChart
                  margin={{ top: 20, right: 20, left: 321, bottom: 20 }}
                  data={this.chartData}
                  barSize={125}
                >
                  <XAxis
                    dataKey="name"
                    stroke="#000000"
                    scale="point"
                    padding={{ left: 0, right: 0 }}
                    label={{
                      value: "Muse Channels",
                      offset: -17,
                      position: "insideBottom",
                      fontSize: 24,
                    }}
                  />
                  <YAxis
                    stroke="#000000"
                    orientation="right"
                    domain={[0, 100]}
                    allowDataOverflow="True"
                    label={{
                      value: "Signal Variability (standard deviation)",
                      angle: 90,
                      position: "insideBottomRight",
                      fontSize: 23,
                    }}
                  />
                  <Tooltip
                    wrapperStyle={{
                      width: 175,
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: 17,
                    }}
                    content={<this.CustomTooltip />}
                  />
                  <Area type="monotone" dataKey="amt" stackId="1" fill="white">
                    <LabelList
                      dataKey="div_1"
                      position="insideTopLeft"
                      style={{ fontSize: "150%" }}
                    />
                  </Area>
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    fill="#BDD9BF"
                  >
                    <LabelList
                      dataKey="div_2"
                      position="insideTopLeft"
                      style={{ fontSize: "150%" }}
                    />
                  </Area>
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    fill="#2E4052"
                  >
                    <LabelList
                      dataKey="div_3"
                      position="insideTopLeft"
                      style={{ fontSize: "150%" }}
                    />
                  </Area>
                  <Area
                    type="monotone"
                    dataKey="amt2"
                    stackId="1"
                    fill="#FFC857"
                  >
                    <LabelList
                      dataKey="div_4"
                      position="insideTopLeft"
                      style={{ fontSize: "150%" }}
                    />
                  </Area>
                  <Bar dataKey="total" fill="#00a0fc" stroke="#000000">
                    {this.chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </ComposedChart>
              </ResponsiveContainer>
              <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
                <h5>
                  <span className="ml-1">
                    <h3>
                      The accepted values for Verdict are "Great," "Good," and
                      "Okay."{" "}
                    </h3>{" "}
                    <br />
                    If the signal quality is poor for one or more channels,
                    please click on 'Recheck Signal Quality' button to repeat
                    this step. Before repeating, please re-adjust the headband's
                    fit to ensure it fits snugly on your head and that there is
                    no hair between the sensors and your skin. You can also
                    moisten the skin under the sensors with a bit of water.
                    Watch the video on the connection page for more tips. <br />{" "}
                    <br />
                    If the Muse signal quality is satisfactory, click on the
                    "Start Experiment" button to begin. <br />
                    The experiment will start right away.
                    <br />
                    Once you start the experiment, please focus all your
                    attention on the screen. <br /> <br />
                    <button
                      className="btn btn-warning btn-block m-3"
                      onClick={() => {
                        this.client.disconnect();
                        this.setState({
                          deviceConnected: false,
                          calibrationStatus: "not-started",
                          currentCalibrationTime: calibrationTime,
                        });
                      }}
                    >
                      Recheck Signal Quality
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

    if (this.state.experimentSelected === "restingstate") {
      return (
        <RestingState
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
    this.audio.play();
    this.processedData = HelperUtil.cleanData(this.readings);

    const temp0 = math.mean(this.processedData.map((data) => data.ch_0));
    const temp1 = math.mean(this.processedData.map((data) => data.ch_1));
    const temp2 = math.mean(this.processedData.map((data) => data.ch_2));
    const temp3 = math.mean(this.processedData.map((data) => data.ch_3));

    for (let i = 0; i < this.processedData.length; i++) {
      this.processedData[i].ch_0 = this.processedData[i].ch_0 - temp0;
      this.processedData[i].ch_1 = this.processedData[i].ch_1 - temp1;
      this.processedData[i].ch_2 = this.processedData[i].ch_2 - temp2;
      this.processedData[i].ch_3 = this.processedData[i].ch_3 - temp3;
    }

    const stdCh0 = math.std(this.processedData.map((data) => data.ch_0));
    const stdCh1 = math.std(this.processedData.map((data) => data.ch_1));
    const stdCh2 = math.std(this.processedData.map((data) => data.ch_2));
    const stdCh3 = math.std(this.processedData.map((data) => data.ch_3));

    this.chartData.push(
      {
        name: "",
        total: 0,
        verdict: 0,
        color: "green",
        amt: 15,
        amt2: 55,
        div_1: "Great",
        div_2: "Good",
        div_3: "Okay",
        div_4: "Poor",
      },
      {
        name: "Left Ear (TP9)",
        total: stdCh0,
        verdict: this.calculateVerdict(stdCh0),
        color: "#00F56E",
        amt: 15,
        amt2: 55,
        div_1: "",
        div_2: "",
        div_3: "",
        div_4: "",
      },
      {
        name: "Left Front (AF7)",
        total: stdCh1,
        verdict: this.calculateVerdict(stdCh1),
        color: "#2026FA",
        amt: 15,
        amt2: 55,
        div_1: "",
        div_2: "",
        div_3: "",
        div_4: "",
      },
      {
        name: "Right Front (AF8)",
        total: stdCh2,
        verdict: this.calculateVerdict(stdCh2),
        color: "#FA0E00",
        amt: 15,
        amt2: 55,
        div_1: "",
        div_2: "",
        div_3: "",
        div_4: "",
      },
      {
        name: "Right Ear (TP10)",
        total: stdCh3,
        verdict: this.calculateVerdict(stdCh3),
        color: "#EB23F4",
        amt: 15,
        amt2: 55,
        div_1: "",
        div_2: "",
        div_3: "",
        div_4: "",
      },
      {
        name: " ",
        total: 0,
        verdict: 0,
        color: "black",
        amt: 15,
        amt2: 55,
        div_1: "",
        div_2: "",
        div_3: "",
        div_4: "",
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
    } else if (expNo === 6) {
      this.setState({
        exp6DescShow: !this.state.exp6DescShow,
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
      return "Poor";
    }
  };
}

export default AppMain;
