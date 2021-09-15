import React from "react";
import img1 from "../../images/documentation/step3/new_repo.PNG";
import img2 from "../../images/documentation/step3/create_new_repo.PNG";
import img3 from "../../images/documentation/step3/lib_in_gitignore.PNG";
import img4 from "../../images/documentation/step3/up_exi_file.PNG";
import img5 from "../../images/documentation/step3/upload_files.PNG";
import img6 from "../../images/documentation/step3/address_bar.PNG";
import img7 from "../../images/documentation/step3/repo_link.PNG";
import img8 from "../../images/documentation/step3/settings_tab.PNG";
import img9 from "../../images/documentation/step3/pages.PNG";
import img10 from "../../images/documentation/step3/gpages.PNG";

class ComponentS3 extends React.Component {
  render() {
    return (
      <>
        <h1>Step 3: Uploading your experiments to GitHub.</h1>
        <br />
        <p>
          After successfully downloading your experiments from Pavlovia and
          adding the lib folder, it is now time to upload those experiments on
          the hosting service GitHub. We will also use one of its features,
          ‘GitHub Pages,’ to publish the experiment and create a global link for
          it so that it is easily accessible and can be added to the ‘Sans
          Tracas’ platform.
        </p>
        <p>
          Follow along the steps of this article to learn how to upload your
          experiment to GitHub and publish it to obtain a global link.
        </p>
        <br />
        <div>
          <ol>
            <li>
              <h5>Creating a New GitHub Repository:</h5>
              <ol>
                <li>
                  Sign in to your GitHub account{" "}
                  <a href="https://github.com/">here</a>.
                  <br />
                  You can use the same account we created earlier in the
                  pre-requisite section, and if you have not created an account
                  yet, you can create one by clicking on “sign up” instead of
                  “sign in.”
                </li>
                <br />
                <li>
                  Once you’ve signed in, click on the “New” button under the
                  repositories column or press the “+” button on the top right
                  tab, which will open a dialogue box from which you have to
                  select the first option, “New repository.”
                  <br />
                  <img src={img1} alt="img1" className="img-fluid" />
                </li>
                <br />
                <li>
                  <p>
                    For creating a repository, GitHub will ask you for
                    additional information, such as the repository's owner (make
                    sure it’s the correct account). Then, you have to enter a
                    name for your repository (choose any name, and GitHub will
                    confirm whether it’s available). You can also add a short
                    one-line description for it.
                  </p>
                  <p>
                    You will also be asked if you want to make your repository
                    ‘public’ or ‘private’; please select ‘public’ to publish the
                    experiment. Afterwards, you’ll have three other options
                    which you can check, uncheck according to your preference.
                    The first option is to add a ‘README’ file explaining your
                    repository in detail. The second one is a ‘.gitignore’ file
                    containing the list of things for git to ignore (please
                    leave both options unchecked as your pavlovia experiment
                    already has those files, if not, you can create them again
                    later). The third option is a license, wherein you can
                    choose what kind of license you want for your repository;
                    you can do that later too, so it is okay to leave this one
                    unchecked. Once everything is done, press the “Create
                    repository” button, and your new GitHub repository will be
                    created.
                    <br />
                    <img src={img2} alt="img2" className="img-fluid" />
                  </p>
                </li>
                <br />
              </ol>
            </li>
            <br /> <br />
            <p>
              Before uploading the experiment on the newly created GitHub
              repository, you will have to perform one more task to ensure the
              library folder is uploaded.
              <br />
              Go to the folder where you have unzipped your experiment, and
              inside the master folder of your experiment, you will find a
              ‘.gitignore’ file (it will usually be a text document).
              <br />
              Open that file using your preferred text editor and go to the end
              of the file where you will find some lines of code similar to the
              ones displayed here.
              <br />
              <img src={img3} alt="img3" className="img-fluid" />
              <br />
              Now delete all these lines containing the word lib and save the
              file. Without deleting these lines, the ‘lib’ folder will not be
              uploaded to GitHub, and you won’t be able to run your experiment.
              <br />
              Once it’s done, follow the following steps to upload your
              experiment to the newly created GitHub repository.
            </p>
            <br />
            <li>
              <h5>Uploading your experiment to your new GitHub repository:</h5>
              <p>
                Once you’ve created a new repository, GitHub will automatically
                open the Quick Setup page for you. On that page, you will find
                an option for “uploading an existing file.”
                <br />
                <img src={img4} alt="img4" className="img-fluid" />
                <br /> <br />
                Click on that option, and it will take you to the upload page.
                <br />
                <img src={img5} alt="img5" className="img-fluid" />
                <br />
                There, you can either drag and drop your files or choose what
                files you want to upload. Then, enter a message below where it
                says “commit changes” (you can also add an optional extended
                description for that particular commit action), and press the
                “Commit changes” button. All your files will be uploaded.
              </p>
              <p>
                Note: This method only works when the total number of uploaded
                files is less than 100, and the size of the largest file being
                uploaded is less than 100MB.
              </p>
              <p>
                In any other case, you will have to upload your experiment via
                your computer's command line, which doesn’t have such
                limitations. Follow the steps below to upload using the command
                line:
              </p>
              <ol>
                <li>
                  Open the command line on your computer.
                  <br />
                  For Windows users, you have to open a windows command prompt,
                  while for macOS users, you have to open a terminal. Now we
                  have to enter a series of git commands, and these commands are
                  platform-independent, so they’ll remain the same irrespective
                  of the OS version.
                </li>
                <br />
                <li>
                  The first thing you will need to do is change your location
                  inside the command prompt. If the location of your experiment
                  folder on your machine is in a different drive than the drive
                  you currently are in, then type the letter of the drive your
                  experiment folder is in, followed by a colon and press enter.
                  (for, e.g. if the experiment folder is in D drive and the
                  command prompt is in C drive, you enter{" "}
                  <span className="bg-dark text-white p-1 mt-5">D:</span> <br />
                  Once the drive has been changed, open the experiments folder
                  and copy the address of that folder from the address bar and
                  past it in the command prompt after typing cd (for, e.g., if
                  the experiment folder is in the downloads folder of your
                  computer, you would enter <br />{" "}
                  <span className="bg-dark text-white p-1 mt-5">
                    cd C:\Users\Admin\Downloads\experiments
                  </span>
                  ). <br />
                  See below figure for the windows address bar which is usually
                  found on the top part of a window.
                  <br />
                  <img src={img6} alt="img6" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  Once you’re in the exact location in the command prompt, enter{" "}
                  <span className="bg-dark text-white p-1 mt-5">git init</span>{" "}
                  to initialize a GitHub repository at that location. You might
                  be asked to sign in and authenticate git to access your GitHub
                  account if you’re using this for the first time on your
                  computer.
                </li>
                <br />
                <li>
                  Enter{" "}
                  <span className="bg-dark text-white p-1 mt-5">
                    git status
                  </span>{" "}
                  to check the changed files (this step is optional).
                </li>
                <br />
                <li>
                  Enter{" "}
                  <span className="bg-dark text-white p-1 mt-5">git add .</span>{" "}
                  to add all the files to the queue.
                </li>
                <br />
                <li>
                  Enter{" "}
                  <span className="bg-dark text-white p-1 mt-5">
                    git commit -m "first commit"
                  </span>{" "}
                  to commit the changes you just made (you can enter your own
                  message too instead of the first commit).
                </li>
                <br />
                <li>
                  Enter{" "}
                  <span className="bg-dark text-white p-1 mt-5">
                    git branch -M main
                  </span>{" "}
                  to create a main branch on your repository.
                </li>
                <br />
                <li>
                  Copy the https link of your repository from the GitHub quick
                  startup page.
                  <br />
                  <img src={img7} alt="img7" className="img-fluid" />
                  <br /> <br />
                  Type{" "}
                  <span className="bg-dark text-white p-1 mt-5">
                    git remote add origin
                  </span>{" "}
                  , and then paste the https link there.
                </li>
                <br />
                <li>
                  Enter{" "}
                  <span className="bg-dark text-white p-1 mt-5">
                    git push -u origin main
                  </span>{" "}
                  to push the changes onto your GitHub repository.
                </li>
                <br />
              </ol>
              <p>
                Now, if you refresh the GitHub repository page, you will see all
                the files there. Ensure all the folders and files from the
                experiment folder on your local machine are present on your
                GitHub repository. And if they are not (especially the lib
                folder), make sure to remove the lines containing ‘lib’ from the
                ‘.gitignore’ file and try the uploading process again.{" "}
              </p>
            </li>
            <br />
            <li>
              <h5>
                Publishing your GitHub repository and creating a global link:
              </h5>
              We will use Github pages to publish the site and obtain a global
              URL for it (useful in Step 4).
              <ol>
                <br />
                <li>
                  Once inside your GitHub repository for your experiment, press
                  the “Settings” tab.
                  <br />
                  <img src={img8} alt="img8" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  On the left column, scroll down and click on the “Pages”
                  option.
                  <br />
                  <img src={img9} alt="img9" className="img-fluid" />
                  <br />
                </li>
                <br />
                <li>
                  In GitHub Pages, see the source part and select the “None”
                  button, which will open a dropdown menu and select the “main”
                  branch. After that, you would see another button beside it.
                  Click on it to make sure “/ (root)” is selected, and then
                  press the “Save” button beside it.
                  <br />
                  <img src={img10} alt="img10" className="img-fluid" />
                  <br />
                </li>
                <br />
              </ol>
              <p>
                If this process is successful, GitHub will display a message
                with a link to where your site is published on the internet. If
                the box is in green, that means your site is successfully
                published, and if it is blue, there is some error. Try switching
                the source on the main branch from “/(root)” to “/docs” and
                again back to “/(root)” to solve this error. Once it is in
                green, click on the link to check if the experiment will start.
                If it is stuck on a white screen with a message “initializing
                your experiment,” that’s because the lib folder was not added,
                so adding the lib folder will solve this issue.{" "}
              </p>
              <p>
                Copy and save the link to this page. This link will be useful to
                us in Step 4.
              </p>
            </li>
            <br />
          </ol>
        </div>
      </>
    );
  }
}

export default ComponentS3;
