import React from "react";
import { CSVLink } from "react-csv";

class Results extends React.Component {
  constructor(props) {
    super();

    this.state = {
      rawReadings: props.rawReadings,
      processedDataHeaders: props.processedDataHeaders,
      processedData: props.processedData,
      processedFileName: props.processedFileName,
      experimentReadings: props.experimentReadings,
      experimentFileName: props.experimentFileName,
    };
  }

  render() {
    return (
      <div className="App">
        <p>Your CSV file is ready to download</p>
        <CSVLink data={this.state.rawReadings}>Download me</CSVLink>
        <br />
        <CSVLink
          headers={this.state.processedDataHeaders}
          data={this.state.processedData}
          filename={this.state.processedFileName}
        >
          Processed file
        </CSVLink>
        <br />
        {this.state.experimentReadings ? (
          <CSVLink
            data={this.state.experimentReadings}
            filename={this.state.experimentFileName}
          >
            Experiment Readings
          </CSVLink>
        ) : null}
      </div>
    );
  }
}

export default Results;
