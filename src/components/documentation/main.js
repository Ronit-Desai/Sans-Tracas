import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ComponentS1 from "./step1";
import ComponentS2 from "./step2";
import ComponentS3 from "./step3";
import ComponentS4 from "./step4";
import ComponentPR from "./platformrequirements";

export default function DocMain() {
  let { path, url } = useRouteMatch();

  return (
    <div className="row vh-100">
      <div className="col-md-2 bg-dark text-white">
        <nav>
          <ul>
            <li>
              <Link to={`${url}/requirements`}>Platform Requirements</Link>
            </li>
            <li>
              <Link to={`${url}/step-1`}>Step 1</Link>
            </li>
            <li>
              <Link to={`${url}/step-2`}>Step 2</Link>
            </li>
            <li>
              <Link to={`${url}/step-3`}>Step 3</Link>
            </li>
            <li>
              <Link to={`${url}/step-4`}>Step 4</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="col-md-10">
        <Switch>
          <Route path={`${path}/:docId`}>
            <Docs />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Docs() {
  let { docId } = useParams();

  switch (docId) {
    case "requirements":
      return <ComponentPR />;
    case "step-1":
      return <ComponentS1 />;
    case "step-2":
      return <ComponentS2 />;
    case "step-3":
      return <ComponentS3 />;
    case "step-4":
      return <ComponentS4 />;
    default:
      return (
        <div>
          <h3>Please select an integration step</h3>
        </div>
      );
  }
}
