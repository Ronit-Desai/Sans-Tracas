import React from "react";
import { CSVLink } from "react-csv";

class Results extends React.Component {
  constructor(props) {
    super();

    this.state = {
      processedDataHeaders: props.processedDataHeaders,
      processedData: props.processedData,
      processedFileName: props.processedFileName,
      experimentReadings: props.experimentReadings,
      experimentFileName: props.experimentFileName,
    };
  }

  doItAgain() {
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
          <h5>
            Congratulations on successfully completing an EEG experiment! Would
            you please use the buttons below if you wish to download your EEG
            readings and the experiment readings?
            <br /> <br />
            The EEG readings are from your Muse device presented to you in a
            helpful format. In contrast, the experiment readings are the
            readings specific to the behavioural experiment you just performed.
            The EEG readings are generic for all experiments, whereas the
            Experiment readings would differ based on each experiment and how
            the researcher designs it.
          </h5>
          <br />
          <CSVLink
            headers={this.state.processedDataHeaders}
            data={this.state.processedData}
            filename={this.state.processedFileName}
          >
            <button className="btn btn-outline-primary w-100">
              EEG Readings
            </button>
          </CSVLink>
          <br />
          <br />
          {this.state.experimentReadings ? (
            <CSVLink
              data={this.state.experimentReadings}
              filename={this.state.experimentFileName}
            >
              <button className="btn btn-outline-primary w-100">
                Experiment Readings
              </button>
            </CSVLink>
          ) : null}
        </div>
        <div className="col-md-4 mx-auto mt-5 p-5 w-50 bg-white shadow rounded">
          <h5>
            Please use the below button to perform another experiment or just
            close the tab to exit.
          </h5>
          <button
            className="btn btn-primary btn-block m-3"
            onClick={this.doItAgain}
          >
            Reload
          </button>
        </div>
      </div>
    );
  }
}

export default Results;
