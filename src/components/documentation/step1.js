import React from "react";
import img1 from "../../images/documentation/step1/git-osx-installer.png";

class ComponentS1 extends React.Component {
  render() {
    return (
      <>
        <h1>Step 1: Pre-requisites.</h1>
        <br />
        <p>
          Before we begin, you will require these three things as pre-requisites
          to the integration process:
          <ol>
            <li>
              A <a href="https://gitlab.pavlovia.org/users/sign_in">Pavlovia</a>{" "}
              Account with an already designed behavioural experiment.
            </li>
            <li>
              A <a href="https://github.com/">GitHub</a> Account.
            </li>
            <li>
              {" "}
              <a href="https://github.com/git-guides/install-git">Git</a>{" "}
              installed on your personal computer.
            </li>
          </ol>
        </p>
        <br />
        <div>
          <ol>
            <li>
              <h5>Pavlovia Account:</h5>
              <p>
                The first thing you will need is a Pavlovia account. And in the
                experiment tab of your account, you will need to have a wholly
                designed behavioural experiment that you wish to integrate with
                the platform and collect EEG data along with. The experiment's
                status ('inactive', 'piloting', 'run') does not matter; we only
                need to access and download its code.
                <br />
                Suppose you do not have an already designed behavioural
                experiment at your disposal in your pavlovia account. In that
                case, it is advised that you first design such an experiment and
                then integrate it with the 'Sans Tracas' platform.
              </p>
            </li>
            <br />
            <li>
              <h5>GitHub Account:</h5>
              <p>
                The second thing you will need is a GitHub account. GitHub is an
                internet hosting provider, and it is mainly used for software
                developer version control using git. It has a plethora of
                features to aid the process. We will be using GitHub for almost
                the entirety of this integration process, from uploading your
                experiments on GitHub to modifying the platform code so that
                your experiment is well and truly a part of the platform. So, if
                you do not already have a GitHub account, you will need to
                create one <a href="https://github.com/">here</a>. Just enter
                your email, press the 'Sign up for GitHub' button, and follow
                the on-screen guide to create your GitHub account successfully.
                Once your GitHub account is created and verified, we will use
                that account to upload your pavlovia experiment and make the
                necessary changes to integrate your experiment with the
                platform. Please remember to note down the username and password
                you use with your GitHub account, as that will be important
                while using Git for the first time on your local computer.
              </p>
            </li>
            <br />
            <li>
              <h5>Git on your personal computer:</h5>
              <p>
                The final thing you will need is 'Git' installed on your
                personal computer.If you are confused between Git and GitHub,
                you need to remember that Git is a version control system that
                allows you to keep track of your source code history, and GitHub
                is a cloud hosting service that lets you manage git
                repositories.Git is a command-line tool, whereas GitHub provides
                a web-based graphical interface.And using that interface , we
                will be uploading the pavlovia experiments on GitHub. However,
                the web-based interface only allows for a maximum number of 100
                files to be uploaded at a time, so for projects that are larger
                in size and number of files, we will have to use the
                command-line tool, 'Git'. Thus, you will need to have git
                installed on your personal computer.
              </p>
              <p>
                To check whether Git is already installed on your computer:
                <ul>
                  <li>
                    For macOS: open terminal and type,
                    <br />
                    <span className="bg-dark text-white p-1 mt-5">
                      $ git --version
                    </span>{" "}
                    <br />
                    Upon running the above command on Mavericks (macOS 10.9) or
                    above, if you do not have git installed already, it will
                    prompt you to install it (See below Figure). Alternatively,
                    you can also install git by following the steps detailed{" "}
                    <a href="https://git-scm.com/download/mac">here</a>.
                    <br />
                    <img src={img1} alt="img1" className="img-fluid" />
                  </li>
                  <br />
                  <li>
                    For Windows: open command prompt (cmd) and type,
                    <br />
                    <span className="bg-dark text-white p-1 mt-5">
                      git --version
                    </span>{" "}
                    <br />
                    It will show you the version of git installed on your
                    computer, and if it shows something else or simply an error,
                    just download the git for Windows installer from{" "}
                    <a href="https://git-scm.com/download/win">here</a>, and the
                    download will start automatically.
                  </li>
                </ul>
              </p>
            </li>
          </ol>
        </div>
      </>
    );
  }
}

export default ComponentS1;
