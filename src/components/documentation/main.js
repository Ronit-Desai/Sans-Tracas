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
import ComponentGG from "./guidelines";
import img1 from "../../images/documentation/guidelines/runEEG.png";

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
              <Link to={`${url}/guidelines`}>Researcher guidelines</Link>
              <ul>
                <li>
                  <Link to={`${url}/step-1`}>Step 1: Pre-requisites</Link>
                </li>
                <li>
                  <Link to={`${url}/step-2`}>
                    Step 2: Downloading experiments from Pavlovia
                  </Link>
                </li>
                <li>
                  <Link to={`${url}/step-3`}>
                    Step 3: Uploading experiments to GitHub
                  </Link>
                </li>
                <li>
                  <Link to={`${url}/step-4`}>
                    Step 4: Adding experiment to the ‘Sans Tracas’ platform
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          Please use this navigation bar to traverse through different sections
          of the Sans Tracas Documentation.
        </nav>
      </div>

      <div className="col-md-10">
        <Switch>
          <Route exact path={path}>
            <div className="col-lg-10">
              <h1>Welcome to the Official Documentation of Sans Tracas.</h1>{" "}
              <br />
              <p>
                Here you will find everything about the platform, from its
                requriements to the integration steps. Please use the panel on
                the left side of the page to traverse through differnet
                sections. If you are an end-user, please go through the
                "platform requirements" before starting with your experiments.{" "}
                <br /> However, if you are a Researcher and wish to integrate
                your behavioural experiments with the Sans Tracas platform,
                please first go through the "Researcher Guidelines" before
                begining the integration process.
              </p>
              <br /> <br />
              <h3>How to run your own EEG study?</h3>
              Are you a neuroscience researcher? <br /> Do you already have a
              behavioural exeriment up and running on Pavlovia? <br />
              Do you want to enhance your existing studies with EEG but setting
              it up is too time-consuming? <br /> Do you want to also collect
              EEG data from your participants on top of the behavioural data but
              don't know how to? <br /> If you answered yes to any of the above
              questions, you've come to the right place. Sans Tracas makes it
              easier for neuroscience researchers such as yourself to add EEG to
              their online behavioural studies. Please see the image below to
              understand the gist of the process:
              <img src={img1} alt="img1" className="img-fluid" /> <br />
              <h4> Figure 1: How to run your own EEG study.</h4> <br />
              <br />
              If you're ready to start adding EEG to your online behavioural
              studies, you may start with the integration process, but please
              make sure that you go though the "researcher guidelines" first and
              then follow along the integration steps. Everything is accesible
              thorugh the navigation panel on the left side of your screen.
            </div>
          </Route>
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
    case "guidelines":
      return <ComponentGG />;
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
