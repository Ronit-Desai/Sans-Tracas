import React from "react";
import img1 from "../../images/documentation/guidelines/processed-eeg-data.png";

class ComponentGG extends React.Component {
  render() {
    return (
      <>
        <h1>General guidelines for using Sans Tracas.</h1> <br />
        <p>
          Welcome to the official documentation of Sans Tracas. You will find a
          few general guidelines to help you in the integration process on this
          page. <br /> Before you begin the integration process by selecting the
          steps from the navigation panel, here are a few things you should
          understand about how your experiment will be run and how the EEG data
          from the Muse device will be collected, processed, and stored.
        </p>
        <br />
        <ol>
          <li>
            <h5>Timestamps:</h5>
            Sans Tracas runs your Pavlovia experiments on an added screen layer
            on top of the existing Sans Tracas layer. Any experiment designed in
            Sans Tracas will run natively on the platform’s index screen,
            whereas any experiment imported from Pavlovia will run on the second
            screen layer; this results in a lack of communication between the
            live Pavlovia experiment and the Sans Tracas platform. The main
            problem this creates is that while EEG data is being recorded in the
            background, the Pavlovia experiment won’t be able to send any
            trigger responses when it is running and presenting a stimulus on
            the screen. Thus, you will need to incorporate and save timestamps
            for all the stimuli you want to present on the screen. By saving the
            timestamps, you will be able to sync your experiment response file
            (the participant can download that after completing the experiment)
            and the processed EEG file (that is received from Sans Tracas).
            Whether it is implemented in Pavlovia or Sans Tracas, both
            timestamps are taken from the participant’s browser in runtime
            (which takes it from the participant’s system).
            <br /> To sum it up;{" "}
            <h5>
              saving the timestamps for all your experiment stimuli is extremely
              important.
            </h5>
            <br />
            However, incorporating timestamps into your experiments from
            Pavlovia has its own set of minor issues. Such as{" "}
            <a href="https://discourse.psychopy.org/t/timing-issue-with-psychojs/8478/6">
              this thread explains
            </a>{" "}
            why there is always bound to be some milliseconds of difference for
            when a stimulus is presented, how long it is presented, and what is
            stored in the log file. This issue usually happens due to various
            factors such as operating system, browser choice, and how you code
            the experiment in Psychopy/PsychoJS. <br />
            Please also look at{" "}
            <a href="https://discourse.psychopy.org/t/response-times-in-log-files-key-press-vs-release-and-exp-log-messages/19127">
              this post,
            </a>{" "}
            which reflects how response time in Log Files differs for when a key
            is actually pressed and when it is released.
            <h5>
              Running time-sensitive experiments in a web browser might result
              in minute differences in the recorded timings as the systems
              participants use may not always be uniform.
            </h5>
            <br />
            If you want to add timestamps to your experiment via PsychoPy, then
            you can do so by incoving the "time.time()" function after importing
            the "time" module. Alternatively, you can also use the
            "datetime.now()" function after importing the "datetime" module.
            Both of these functions will give you similar results. Please follow{" "}
            <a href="https://discourse.psychopy.org/t/adding-precise-measure-of-system-clock-to-psychopy-output/8426">
              this thread
            </a>{" "}
            for more details. Please also refer to{" "}
            <a href="https://discourse.psychopy.org/t/saving-timestamps/2890">
              this thread on saving timestamps
            </a>{" "}
            if you need help clearing up whether and how to add those timestamps
            to the log file.
            <br />
            However, if you prefer to incorporate timestamps to your experiment
            using a JavaScript librabry such as PsychoJS or jsPsych, you can do
            so by simply incoving the standard "Date.now()" function of
            JavaScript.
          </li>
          <br />
          <li>
            <h5>Experiment records file vs EEG records file:</h5>
            As mentioned earlier, the experiment records file from Pavlovia
            (that contains the logs from the experiment such as key pressed
            details, stimuli presented details, etc.) is a separate file from
            the EEG record file (which contains the recorded EEG readings from
            the Muse device used during the experiment) obtained from Sans
            Tracas. It has EEG readings starting from when the connection is
            established, includes the readings during the calibration process as
            well as during the actual experiment, and ends with the ending of
            the experiment. <br /> Even though these two files are separate,
            they can be easily synced together in the analysis phase using the
            timestamps recorded in both files (thus, saving timestamps in your
            Pavlovia log file is extremely important). However, when it comes to
            the researchers getting access to both these files, there is an
            additional step. The EEG files recorded from Sans Tracas are
            automatically stored on its secured servers as soon as the
            experiment is completed but, the experiment log files are not sent
            to the server (due to the lack of communication between the Pavlovia
            module and Sans Tracas). Hence, once the experiment is completed,
            you will have to ask the participants to send you the experiment log
            files. The experiment log file is automatically downloaded on the
            user’s device upon completing the Pavlovia experiment. If it is not
            automatically downloaded, you will have to ask the participants to
            manually download the files and send them to you. Unlike the
            Pavlovia log files, the EEG record file is automatically (and
            securely) sent to the secure Sans Tracas servers while also giving
            the participants an option to download it for their amusement.{" "}
            <br />{" "}
            <h5>
              Please don’t forget to add a warning/suggestion to your
              experiments. Ask your participants not to close the experiment
              window before completing the experiment and make sure that the log
              files have been downloaded on their devices.
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
            not very useful for direct analysis. You have to do some processing
            on it to get it in a readable and understandable format. That’s what
            Sans Tracas does for you; we process the raw EEG data from muse-js
            and present it in a useful form for researchers to directly start
            doing some analysis on it. <br /> The raw EEG data obtained from the
            muse-js library are clustered together in such a way that it
            combines twelve EEG readings into one and binds them all with only a
            single timestamp (essentially making the time difference between
            successive EEG readings be approximately 50ms). It is also presented
            in a disorganized manner, with all the channels coming in at random
            intervals. The only field you can use to keep track of the incoming
            data is an index field that is not inherently used by the Muse
            device itself but is added by the muse-js library. <br /> Sans
            Tracas solves all these issues by processing the readings inside
            each cluster and separating the twelve EEG readings of one cluster
            into twelve individual readings with their respective timestamps
            (effectively getting the time difference between successive EEG
            readings from approximately 50ms to approximately 3.9ms). We
            separate each data cluster, but we also index it properly and
            associate each reading with its respective timestamp and muse
            channel. We organize it properly in a column format, with each
            column containing the readings only for its associated muse
            channels. As shown in the image below, the EEG readings are now
            available in a presentable manner. Here, the first column will be
            the timestamp, the second will be the index, and the remaining
            columns will be their respective muse channels (ch_0, ch_1, ch_2,
            ch_3, AUX), and then you get the participant id. The EEG data is
            presented in a .csv file format and can easily be converted to a
            pandas data frame or into another helpful format for analysis
            purposes.
            <img src={img1} alt="img1" className="img-fluid" />
          </li>
        </ol>
        We hope the guidelines have been helpful for you and that you now have a
        better understanding of the current limitations of Sans Tracas. Please
        begin the integration process by selecting Step 1 on the navigation
        panel. If you need any help throughout the entire process, you can email
        us at <a href="mailto:rn331181@dal.ca">rn331181@dal.ca</a>; we are
        always here to help you!
      </>
    );
  }
}

export default ComponentGG;
