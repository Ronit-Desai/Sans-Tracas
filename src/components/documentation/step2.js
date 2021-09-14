import React from "react";
import img1 from "../../images/documentation/step2/pavlovia_dashboard.PNG";
import img2 from "../../images/documentation/step2/view_code.PNG";
import img3 from "../../images/documentation/step2/download_button.PNG";
import img4 from "../../images/documentation/step2/download_options.png";
import img5 from "../../images/documentation/step2/github_code_button.PNG";
import img6 from "../../images/documentation/step2/lib_location.png";

class ComponentS2 extends React.Component {
  render() {
    return (
      <>
        <h1>Step 2: Downloading experiments from Pavlovia.</h1>
        <br />
        <p>
          To link your experiments with the platform, you will need to have a
          global link for your experiment. However, since Pavlovia doesn’t
          directly provide the global links unless your experiment is already in
          the ‘running’ status, that too is token restricted. Thus, the only
          option left with us is to download the experiment code from Pavlovia
          and host it on some other platform that provides web hosting services
          such as GitHub.
        </p>
        <p>
          Follow along the steps of this article to learn how to download the
          code for your experiments from Pavlovia.
        </p>
        <br />
        <div>
          <ol>
            <li>
              <p>
                Sign in to your Pavlovia account{" "}
                <a href="https://gitlab.pavlovia.org/users/sign_in">here</a>.
              </p>
            </li>
            <li>
              <p>
                From your Profile dashboard, click on the “Experiments” tab,
                which will display the experiments you have created in your
                profile.
                <br />
                <img src={img1} alt="img1" className="img-fluid" />
              </p>
              <br />
            </li>
            <li>
              <p>
                From the list of experiments, select the experiment you wish to
                integrate with the platform.
              </p>
            </li>
            <li>
              <p>
                Once the experiment is opened, click on the “View code” button
                to view your source code via GitLab.
                <br />
                <img src={img2} alt="img2" className="img-fluid" />
              </p>
              <br />
            </li>
            <li>
              <p>
                Once you have entered the GitLab source code site for your
                experiment, you will find a download button beside the
                "History", "Find File", and/or “Web IDE” buttons.
                <br />
                <img src={img3} alt="img3" className="img-fluid" />
              </p>
              <p>
                Click on the button, and you will have a list of options to
                choose from for how you want your code to be downloaded. Click
                on the first option, “Download zip”. You can also select tar
                files, especially if you’re using a Linux OS, but the zip file
                is generally the preferred option.
                <br />
                <img src={img4} alt="img4" className="img-fluid" />
              </p>
              <br />
            </li>
            <li>
              <p>
                Once it is downloaded, move the file to the desired location on
                your computer, and unzip it. You can use any method to unzip
                your files, such as Winrar for Windows.
              </p>
            </li>
          </ol>
          <br /> <br />
          <p>
            Now, before you begin the process of uploading your experiment code
            to GitHub for publishing the site, you will first need to add the
            library (lib) folder to your experiment folder that you just
            downloaded. As Pavlovia doesn’t provide the lib folder for download
            with the experiment source code to keep people from running the
            experiments somewhere else, you will have to download the lib folder
            from some other place. Luckily, we had already found the library
            files and uploaded them on a separate GitHub repository to download
            and add to your experiment.
          </p>
          <p>
            Simply open this link to view the repository{" "}
            <a href="https://github.com/Ronit-Desai/lib_sans_tracas">here</a>.
          </p>
          <p>
            Next to the “Add file” button on that link, you will find a “Code”
            button. Click on that button to open a dropdown menu and from it,
            select the last option, “Download ZIP”.
            <br />
            <img src={img5} alt="img5" className="img-fluid" />
          </p>
          <p>
            Once the file is downloaded, unzip it and move the "lib" folder into
            your experiment's "master" folder or the main folder. Make sure that
            the lib folder is placed in the root folder of your experiment
            alongside other folders such as "Files", "resources", "images", or
            "html".
            <br />
            <img src={img6} alt="img6" className="img-fluid" />
          </p>
        </div>
      </>
    );
  }
}

export default ComponentS2;
