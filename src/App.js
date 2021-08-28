import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppMain from "./components/app/main";
import DocMain from "./components/documentation/main";

class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home and Hello</Link>
              </li>
              <li>
                <Link to="/documentation">Documentation</Link>
              </li>
            </ul>
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
