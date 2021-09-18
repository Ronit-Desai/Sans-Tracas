import React from "react";
import img1 from "../../images/documentation/step4/fork_button.PNG";
import img2 from "../../images/documentation/step4/main_button.PNG";
import img3 from "../../images/documentation/step4/add_file_button.PNG";
import img4 from "../../images/documentation/step4/file_name.PNG";
import img5 from "../../images/documentation/step4/class_name.PNG";
import img6 from "../../images/documentation/step4/export_classname.PNG";
import img7 from "../../images/documentation/step4/git_link.PNG";
import img8 from "../../images/documentation/step4/commit.PNG";
import img9 from "../../images/documentation/step4/edit_button.PNG";
import img10 from "../../images/documentation/step4/import.PNG";
import img11 from "../../images/documentation/step4/commit2.PNG";
import img12 from "../../images/documentation/step4/pull_requests.PNG";
import img13 from "../../images/documentation/step4/newpr.PNG";
import img14 from "../../images/documentation/step4/comparing_changes.PNG";
import img15 from "../../images/documentation/step4/createpr.PNG";

class ComponentS4 extends React.Component {
  render() {
    return (
      <>
        <h1>Step 4: Adding your experiment to the ‘Sans Tracas’ platform.</h1>
        <br />
        <p>
          This is the final step of our integration process. In this step, you
          will fork the GitHub repository where the ‘Sans Tracas’ platform is
          hosted, edit 2 files in order to add your experiment to the platform
          and then submit a pull-request to submit your changes which will be
          reviewd by the owner(me) and then merged with the existing platform.
        </p>
        <p>
          Follow along the steps of this article to learn how to fork a GitHub
          repository to contribute to its code.
        </p>
        <br />
        <div>
          <ol>
            <li>
              <h5>Forking a GitHub Repository:</h5>
              To ‘Fork a repository’ essentially means to make a copy of the
              original repository. This method allows you to edit and experiment
              your changes without affecting the original project. Follow the
              below steps to fork the ‘Sans Tracas’ repository into your GitHub
              account.
              <ol>
                <br />
                <li>
                  In your web browser, sign-in to you your GitHub account and
                  open the ‘Sans Tracas’ GitHub repository{" "}
                  <a href="https://github.com/Ronit-Desai/museapp-frontend">
                    here
                  </a>
                  .
                  <br />
                </li>
                <br />
                <li>
                  On the right side of the top column where the repository name
                  is written, you will find a button named “Fork”, alongside
                  “Star”, and “Watch”. Click on the “Fork” button and GitHub
                  will automatically fork the repository for you (i.e. create a
                  copy of that repository in your GitHub account).
                  <br />
                  <img src={img1} alt="img1" className="img-fluid" />
                </li>
                <br />
              </ol>
            </li>
            <br /> <br />
            <p>
              Now you have a copy of the platfom code in your account for you to
              edit the code and add your experiment to the platform. To add your
              experiment, you will need to edit 2 files in total, create a new
              js (javascript) file for your experiment and then edit the main
              platform file to add buttons for your experiment.
              <br />
              But, before you begin modifying the code, it is a good practice to
              do so by creating a new branch eventhough it’s already a forked
              repository.
              <br />
              Thus, under the code section, you will find a dropdown button
              labelled “main”.
              <br />
              <img src={img2} alt="img2" className="img-fluid" />
              <br />
              Once clicked, you will need to type a name for your branch and
              then click the “Create branch: ” button. A new branch will be
              created and ensure that your now working on your branch by
              checking that the button name which earlier was “main”, has now
              changed to the name of your newly created branch.
            </p>
            <br />
            <li>
              <h5>
                Creating a file for your experiment in the forked repository:
              </h5>
              <ol>
                <li>
                  In your newly created branch of your newly forked repository,
                  open the folders ‘src’-{">"}’components’-{">"}’app’.
                  <br />
                  Over here, you will see a number of files and on top where the
                  branch name is displayed beside the path you’re currently in,
                  you will find an “Add file” dropdown button. Click on it and
                  choose the “Create new file” option.
                  <br />
                  <img src={img3} alt="img3" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  You will be asked to enter a name for your file and for
                  simplicity purpose, please choose the name of the file as the
                  name of your experiment and add '.js' in the end (for eg, if
                  you experiment is titled face experiment, you can name the
                  file as ‘faceexp.js’).
                  <br />
                  <img src={img4} alt="img4" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  Now, in the “Edit new file” section, paste the following
                  lines: <br />{" "}
                  <span className="bg-dark text-white p-1 mt-5">
                    **insert the code for an external experiment file here**
                    (make sure identation is correct).
                  </span>{" "}
                </li>
                <br />
                <li>
                  On the 27th line of the code, after keyword “class”, change
                  the next word from “XabFromPavlovia” to the name of your
                  experiment. (for e.g., if you experiment is titled face
                  experiment, you can name the class as ‘FaceExp’) Please ensure
                  the first letter of each word is capitalized here.
                  <br />
                  <img src={img5} alt="img5" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  Go to the last line of the file (line 163) and there too,
                  replace “XabFromPavlovia” to the name of your class we used
                  earlier i.e. ‘FaceExp’ as per our example.Go to the last line
                  of the file (line 163) and there too, replace
                  “XabFromPavlovia” to the name of your class we used earlier
                  i.e. ‘FaceExp’ as per our example.
                  <br />
                  <img src={img6} alt="img6" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  Remember the global link to your experiment (obtained from
                  GitHub Pages) that I asked you to copy and save from Step 3?
                  Go to line 78 of the code and for the src variable replace the
                  existing link inside the double quotations with that saved
                  link of your experiment hosted on GitHub. Be careful to not
                  delete the doublt quotations.
                  <br />
                  <img src={img7} alt="img7" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  Scroll to the bottom of the page to find the “Commit new file”
                  section. Enter a commit message there (which is usually to
                  make the owner understand what changes you made, so you can
                  add something like ‘created new js file for Face experiment’).
                  Leave the radio buttons unchanged and click on the “Commit new
                  file” button.
                  <br />
                  <img src={img8} alt="img8" className="img-fluid" />
                  <br />
                </li>
                <br />
              </ol>
            </li>
            <br />
            <li>
              <h5>
                Editing the ‘main.js’ file to add buttons for your experiment:
              </h5>
              <ol>
                <br />
                <li>
                  In your newly created branch of your newly forked repository,
                  open the folders ‘src’-{">"}’components’-{">"}’app’.
                  <br />
                  Over here, you will see a number of files and out of those
                  files, click on the “main.js” file. Once opened, you will see
                  a title bar, detailing the number of lines in the code. On the
                  right side, you will find the Edit button that is shaped like
                  a pencil beside the delete button that is shaped like a trash
                  can. Click the edit button to start editing the main.js file.
                  <br />
                  <img src={img9} alt="img9" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  After the first few lines of import statements, insert another
                  import statement:
                  <br />{" "}
                  <span className="bg-dark text-white p-1 mt-5">
                    import experiment-class-name from “./javascriptfilename”
                  </span>{" "}
                  i.e.{" "}
                  <span className="bg-dark text-white p-1 mt-5">
                    import FaceExp from “./faceexp”
                  </span>{" "}
                  for our example.
                  <br />
                  <img src={img10} alt="img10" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  <span className="bg-dark text-white p-1 mt-5">
                    ****insert steps for editing the button code and function
                    for selecting the experiment and the toggle function once
                    the development is finished and we’re sure of what the flow
                    would be****.
                  </span>
                </li>
                <br />
                <li>
                  Scroll to the bottom of the page to find the “Commit new file”
                  section. Enter a commit message there (which is usually to
                  make the owner understand what changes you made, so you can
                  add something like ‘created new js file for Face experiment’).
                  Leave the radio buttons unchanged and click on the “Commit new
                  file” button.
                  <br />
                  <img src={img11} alt="img11" className="img-fluid" />
                  <br />
                </li>
                <br />
              </ol>
            </li>
            <br />
            <li>
              <h5>
                Creating a Pull request to merge your changes with the original
                code:
              </h5>
              <ol>
                <br />
                <li>
                  Click on the “Pull requests” button which you will find
                  alongside the “Code”, “Issues”, “Actions” buttons.
                  <br />
                  <img src={img12} alt="img12" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  Under the Pull requests, section click on the “New pull
                  request” button on the right to start a new pull request.
                  <br />
                  <img src={img13} alt="img13" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  On the comparing changes screen, you will be shown a base and
                  head repository. The base repository should be the original
                  repository, and the head repository should be your forked
                  repository. Ensure that this is in place. Also, ensure that
                  with the head repository, the “compare” field has your new
                  branch as the selected branch. Only then will you be able to
                  compare your changes, otherwise it’ll display the message,
                  “There isn’t anything to compare.”
                  <br />
                  <img src={img14} alt="img14" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  Once you’ve thoroughly checked all the changes about to be
                  made, come back to the top of the page, and you will find a
                  “Create pull request” button inside a blue box. Click on that
                  button to create your pull request.
                  <br />
                  <img src={img15} alt="img15" className="img-fluid" />
                  <br />
                </li>
              </ol>
            </li>
          </ol>
          <br />
          <p>
            This pull request will be reviewed by the owner of the original
            repository and merged with the original code if he finds the changes
            to be appropriate.
          </p>
          <p>
            Thus ends your part in the integration process. Once you create a
            pull request, your job is done and then it is up to me to review and
            merge the changes together. I will contact you via GitHub as well as
            the email you’ll provide us if there are any changes you would need
            to make or solve any issues.
          </p>
          <p>
            I will personally guide you in case of any modifications to your
            pull requests. Thank you so much for contributing your experiment to
            the ‘Sans Tracas’ platform. Please take part in our post study
            survey here to complete your participation in the research study.
          </p>
          <br />
        </div>
      </>
    );
  }
}

export default ComponentS4;
