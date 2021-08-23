import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function DocMain() {
  let { path, url } = useRouteMatch();

  return (
    <div className="row vh-100">
      <div className="col-md-2 bg-dark text-white">
        <nav>
          <ul>
            <li>
              <Link to={`${url}/documentation-1`}>Doc Link 1</Link>
            </li>
            <li>
              <Link to={`${url}/documentation-2`}>Doc Link 2</Link>
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

  return (
    <div>
      <h3>{docId}</h3>
    </div>
  );
}
