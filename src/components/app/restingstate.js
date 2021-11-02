import React from "react";
import moment from "moment";
import HelperUtil from "../../util/HelperUtil";
import Results from "./results";
import { ButtonGroup, Dropdown, ToggleButton } from "react-bootstrap";

class RestingState extends React.Component {
  constructor(props) {
    super();

    this.state = {
      timeInterval: undefined,
      eyeOption: undefined,
    };

    this.client = props.museClient;
    this.readings = [];
    this.n170Readings = [];
    this.processedData = [];
  }

  componentDidMount() {
    // this.startN170();
    // this.setState({ canCloseTab: false });
    // window.addEventListener("beforeunload", this.unLoadEvent);
  }

  componentWillUnmount() {
    //     if (!this.state.canCloseTab) {
    //       window.removeEventListener("beforeunload", this.unLoadEvent);
    //     }
  }

  render() {
    return (
      <div className="App">
        <Dropdown
          onSelect={(value) => {
            this.setState({ timeInterval: value });
          }}
        >
          <Dropdown.Toggle variant="success" id="time-dropdown">
            Select time interval
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              eventKey="1"
              active={this.state.timeInterval === "1"}
            >
              1
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="1.5"
              active={this.state.timeInterval === "1.5"}
            >
              1.5
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              active={this.state.timeInterval === "2"}
            >
              2
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

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
      </div>
    );
  }

  unLoadEvent = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
}

export default RestingState;
