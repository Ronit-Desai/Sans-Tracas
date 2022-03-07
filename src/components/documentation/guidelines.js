import React from "react";
import img1 from "../../images/documentation/guidelines/processed-eeg-data.png";
import img2 from "../../images/documentation/guidelines/sanstracas-working.png";

class ComponentGG extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-10">
          <h1>General guidelines for using Sans Tracas.</h1> <br />
          <p>
            You will find a few general guidelines to help you in the
            integration process on this page. <br /> Before you begin the
            integration process by selecting the steps from the navigation
            panel, here are a few things you should understand about how your
            experiment will be run and how the EEG data from the Muse device
            will be collected, processed, and stored.
          </p>
          <br />
          <img src={img2} alt="img2" className="img-fluid" /> <br />
          <h4> Figure 1 </h4>
          <br /> <br />
          <ol>
            <li>
              <h5>Experiment records file vs EEG records file:</h5>
              As mentioned earlier, the experiment records file from Pavlovia
              (that contains the logs from the experiment such as key pressed
              details, stimuli presented details, etc.) is a separate file from
              the EEG record file (which contains the recorded EEG readings from
              the Muse device used during the experiment) obtained from Sans
              Tracas. It has EEG readings starting from when the connection is
              established, includes the readings during the calibration process
              as well as during the actual experiment, and ends with the ending
              of the experiment. <br /> Even though these two files are
              separate, they can be easily synced together in the analysis phase
              using the timestamps recorded in both files (thus, saving
              timestamps in your Pavlovia log file is extremely important).
              However, when it comes to the researchers getting access to both
              these files, there is an additional step. The EEG files recorded
              from Sans Tracas are automatically stored on its secured servers
              as soon as the experiment is completed but, the experiment log
              files are not sent to the server (due to the lack of communication
              between the Pavlovia module and Sans Tracas). Hence, once the
              experiment is completed, you will have to ask the participants to
              send you the experiment log files. The experiment log file is
              automatically downloaded on the user’s device upon completing the
              Pavlovia experiment. If it is not automatically downloaded, you
              will have to ask the participants to manually download the files
              and send them to you. Unlike the Pavlovia log files, the EEG
              record file is automatically (and securely) sent to the secure
              Sans Tracas servers while also giving the participants an option
              to download it for their amusement. <br />{" "}
              <h5>
                Please don’t forget to add a warning/suggestion to your
                experiments. Ask your participants not to close the experiment
                window before completing the experiment and make sure that the
                log files have been downloaded on their devices.
              </h5>
            </li>
            <br />
            <li>
              <h5>Processed EEG data vs Raw EEG data:</h5>
              Sans Tracas uses the{" "}
              <a href="https://github.com/urish/muse-js">
                ‘muse-js’ library built by Urish Shaked
              </a>{" "}
              to obtain the EEG data from the muse device via web-Bluetooth.
              However, the raw EEG data that we get from the muse-js library is
              not very useful for direct analysis. You have to do some
              processing on it to get it in a readable and understandable
              format. That’s what Sans Tracas does for you; we process the raw
              EEG data from muse-js and present it in a useful form for
              researchers to directly start doing some analysis on it. <br />{" "}
              The raw EEG data obtained from the muse-js library are clustered
              together in such a way that it combines twelve EEG readings into
              one and binds them all with only a single timestamp (essentially
              making the time difference between successive EEG readings be
              approximately 50ms). It is also presented in a disorganized
              manner, with all the channels coming in at random intervals. The
              only field you can use to keep track of the incoming data is an
              index field that is not inherently used by the Muse device itself
              but is added by the muse-js library. <br /> Sans Tracas solves all
              these issues by processing the readings inside each cluster and
              separating the twelve EEG readings of one cluster into twelve
              individual readings with their respective timestamps (effectively
              getting the time difference between successive EEG readings from
              approximately 50ms to approximately 3.9ms). We separate each data
              cluster, but we also index it properly and associate each reading
              with its respective timestamp and muse channel. We organize it
              properly in a column format, with each column containing the
              readings only for its associated muse channels. As shown in the
              image below, the EEG readings are now available in a presentable
              manner. Here, the first column will be the timestamp, the second
              will be the index, and the remaining columns will be their
              respective muse channels (ch_0, ch_1, ch_2, ch_3, AUX), and then
              you get the participant id. The EEG data is presented in a .csv
              file format and can easily be converted to a pandas data frame or
              into another helpful format for analysis purposes.
              <br />
              <img src={img1} alt="img1" className="img-fluid" />
            </li>
          </ol>
          We hope the guidelines have been helpful for you and that you now have
          a better understanding of the current limitations of Sans Tracas.
          Please begin the integration process by selecting Step 1 on the
          navigation panel. If you need any help throughout the entire process,
          you can email us at{" "}
          <a href="mailto:rn331181@dal.ca">rn331181@dal.ca</a>; we are always
          here to help you!
        </div>
      </>
    );
  }
}

export default ComponentGG;
