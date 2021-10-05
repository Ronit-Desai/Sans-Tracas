import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppMain from "./components/app/main";
import DocMain from "./components/documentation/main";

class App extends React.Component {
  constructor(props) {
    super();
  }

  state = {
    navCollapsed: true,
  };

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed });
  };

  render() {
    const { navCollapsed } = this.state;

    return (
      <Router>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <span className="navbar-brand p-2">Sans Tracas</span>
            <button
              className="navbar-toggler"
              onClick={this._onToggleNav}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={(navCollapsed ? "collapse" : "") + " navbar-collapse"}
            >
              <ul className="navbar-nav">
                <li>
                  <Link className="nav-item nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link" to="/documentation">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/documentation">
              <DocMain />
            </Route>
            <Route path="/">
              <AppMain />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
