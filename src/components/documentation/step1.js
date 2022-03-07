import React from "react";
import img1 from "../../images/documentation/step1/git-osx-installer.png";

class ComponentS1 extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-10">
          <h1>Step 1: Pre-requisites.</h1>
          <br />
          <p>
            Before we begin, you will require these three things as
            pre-requisites to the integration process:
            <ol>
              <li>
                A{" "}
                <a href="https://gitlab.pavlovia.org/users/sign_in">Pavlovia</a>{" "}
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
                  The first thing you will need is a Pavlovia account. And in
                  the experiment tab of your account, you will need to have a
                  wholly designed behavioural experiment that you wish to
                  integrate with the platform and collect EEG data along with.
                  The experiment's status ('inactive', 'piloting', 'run') does
                  not matter; we only need to access and download its code.
                  <br />
                  Suppose you do not have an already designed behavioural
                  experiment at your disposal in your pavlovia account. In that
                  case, it is advised that you first design such an experiment
                  and then integrate it with the 'Sans Tracas' platform.
                  <br />
                  However, if you do have an already designed behavioural
                  experiment in your Pavlovia account, please make sure that you
                  have added the following things to your experiment:
                  <br />
                  <ol>
                    <li>
                      <h5>Timestamps:</h5>
                      As you've seen in "Working of Sans Tracas" illustration,
                      Sans Tracas runs your Pavlovia experiments on an added
                      screen layer on top of the existing Sans Tracas layer. Any
                      experiment designed in Sans Tracas will run natively on
                      the platform’s index screen, whereas any experiment
                      imported from Pavlovia will run on the second screen
                      layer; this results in a lack of communication between the
                      live Pavlovia experiment and the Sans Tracas platform. The
                      main problem this creates is that while EEG data is being
                      recorded in the background, the Pavlovia experiment won’t
                      be able to send any trigger responses when it is running
                      and presenting a stimulus on the screen. Thus, you will
                      need to incorporate and save timestamps for all the
                      stimuli you want to present on the screen. By saving the
                      timestamps, you will be able to sync your experiment
                      response file (the participant can download that after
                      completing the experiment) and the processed EEG file
                      (that is received from Sans Tracas). Whether it is
                      implemented in Pavlovia or Sans Tracas, both timestamps
                      are taken from the participant’s browser in runtime (which
                      takes it from the participant’s system).
                      <br /> To sum it up;{" "}
                      <h5>
                        saving the timestamps for all your experiment stimuli is
                        extremely important.
                      </h5>
                      However, incorporating timestamps into your experiments
                      from Pavlovia has its own set of minor issues. Such as{" "}
                      <a href="https://discourse.psychopy.org/t/timing-issue-with-psychojs/8478/6">
                        this thread explains
                      </a>{" "}
                      why there is always bound to be some milliseconds of
                      difference for when a stimulus is presented, how long it
                      is presented, and what is stored in the log file. This
                      issue usually happens due to various factors such as
                      operating system, browser choice, and how you code the
                      experiment in Psychopy/PsychoJS. <br />
                      Please also look at{" "}
                      <a href="https://discourse.psychopy.org/t/response-times-in-log-files-key-press-vs-release-and-exp-log-messages/19127">
                        this post,
                      </a>{" "}
                      which reflects how response time in Log Files differs for
                      when a key is actually pressed and when it is released.
                      <h5>
                        Running time-sensitive experiments in a web browser
                        might result in minute differences in the recorded
                        timings as the systems participants use may not always
                        be uniform.
                      </h5>
                      If you want to add timestamps to your experiment via
                      PsychoPy, then you can do so by incoving the "time.time()"
                      function after importing the "time" module. Alternatively,
                      you can also use the "datetime.now()" function after
                      importing the "datetime" module. Both of these functions
                      will give you similar results. Please follow{" "}
                      <a href="https://discourse.psychopy.org/t/adding-precise-measure-of-system-clock-to-psychopy-output/8426">
                        this thread
                      </a>{" "}
                      for more details. Please also refer to{" "}
                      <a href="https://discourse.psychopy.org/t/saving-timestamps/2890">
                        this thread on saving timestamps
                      </a>{" "}
                      if you need help clearing up whether and how to add those
                      timestamps to the log file.
                      <br />
                      However, if you prefer to incorporate timestamps to your
                      experiment using a JavaScript librabry such as PsychoJS or
                      jsPsych, you can do so by simply incoving the standard
                      "Date.now()" function of JavaScript.
                    </li>
                  </ol>
                </p>
              </li>
              <br />
              <li>
                <h5>GitHub Account:</h5>
                <p>
                  The second thing you will need is a GitHub account. GitHub is
                  an internet hosting provider, and it is mainly used for
                  software development version control using git. It has a
                  plethora of features to aid the process. We will be using
                  GitHub for almost the entirety of this integration process,
                  from uploading your experiments on GitHub to modifying the
                  platform code so that your experiment is well and truly a part
                  of the platform. So, if you do not already have a GitHub
                  account, you will need to create one{" "}
                  <a href="https://github.com/">here</a>. Just enter your email,
                  press the 'Sign up for GitHub' button, and follow the
                  on-screen guide to create your GitHub account successfully.
                  Once your GitHub account is created and verified, we will use
                  that account to upload your pavlovia experiment and make the
                  necessary changes to integrate your experiment with the
                  platform. Please remember to note down the username and
                  password you use with your GitHub account, as that will be
                  important while using Git for the first time on your local
                  computer.
                </p>
              </li>
              <br />
              <li>
                <h5>Git on your personal computer:</h5>
                <p>
                  The final thing you will need is 'Git' installed on your
                  personal computer.If you are confused between Git and GitHub,
                  you need to remember that Git is a version control system that
                  allows you to keep track of your source code history, and
                  GitHub is a cloud hosting service that lets you manage git
                  repositories. Git is a command-line tool, whereas GitHub
                  provides a web-based graphical interface. And using that
                  interface, we will be uploading the pavlovia experiments on
                  GitHub. However, the web-based interface only allows for a
                  maximum number of 100 files to be uploaded at a time, so for
                  projects that are larger in size and number of files, we will
                  have to use the command-line tool, 'Git'. Thus, you will need
                  to have git installed on your personal computer.
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
                      Upon running the above command on Mavericks (macOS 10.9)
                      or above, if you do not have git installed already, it
                      will prompt you to install it (See below Figure).
                      Alternatively, you can also install git by following the
                      steps detailed{" "}
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
                      computer, and if it shows something else or simply an
                      error, just download the git for Windows installer from{" "}
                      <a href="https://git-scm.com/download/win">here</a>, and
                      the download will start automatically.
                    </li>
                  </ul>
                </p>
              </li>
            </ol>
          </div>
        </div>
      </>
    );
  }
}

export default ComponentS1;
