XAB Facial Recognition Task 
=============================

Experiment Description
_______________________

Each trial of this task consists of a fixation cross, followed by a target face, and then two face stimuli side by side (one matches the target identity, one is a distractor). The target face is termed "face X" and the following two faces are termed "face A" and "face B" throughout the code for this experiment. The goal of the task is to identify whether face A or face B matches the identity of face X, as quickly and accurately as possible. Face X can be centre-facing or can be chosen from a range of degrees off-centre (variations of left or right facing), as specified in the beginning variables of the experiment code. Faces A and B are always centre-facing for ease of identification. 

 
Experiment Details
____________________

Note: all of these variables are set at the beginning of the script and can be modified to your own preferences

Stimuli: 
 - Number of unique faces: 32 (16 young, 16 old, equally male and female) 
 - Number of viewpoints: 3 (centre, left, right)
 - Total images: 32x3 = 96 


Trials: 
- Number of blocks: 3 
    - Block 1: practice trials 
    - Block 2: young faces 
    - Block 3: old faces
    - Note that the order of young and old faces is randomized for each participant - half the participants have block 2 old and block 3 young 
- Number of repetitions per block: 6 (except for the first block used as practice trials, which has 1 repetition) 
- Number of trials per repetition: 16
- Practice trials: yes (first block is used as practice with 16 trials) 

Trial Timing: 
- 1.5 seconds of black screen 
- 500 ms fixation cross
- 250 ms face X 
- 250 ms black screen 
- unlimited time to select either face A or face B
- the next trial begins once a response key (left or right) is pressed 

Randomization: 

Young faces are shown for one block and old faces are shown for the other block, with the order of the blocks randomized for every participant. Both blocks have 6 repetitions. Each repetition consists of 16 trials, with each trial using a different target face as face X. The target faces are pseudo-randomized across repetitions, such that the order of each identity as face X is randomly chosen, but all 16 faces will be shown before any of them are repeated in the next repetition. Additionally, none of the identities used in one trial will be shown on a consecutive trial, including the target and distractor identities. Any given trial uses only male or only female faces, with the gender of the trials presented in a random order. Finally, if you choose to select multiple angles of direction for face X (specified in the "degrees" variable), each angle will be used an equal number of times per repetition but in a random order. Note that the experiment is currently using the degrees of 0 and 1, meaning that half of the trials will show face X as centre-facing and the other half will use slightly angled left and right-facing stimuli. 

Changing the Face Stimuli
___________________________
The folder "extra_faces" has many more face stimuli from a variety of viewpoints (angles 1-4). In order to use these faces in the experiment, you must move them into the "resources/faces" folder. You also must update the "all_faces.csv" file with the image file names. Remember to also change the "degrees" variable at the beginning of the script if you wish to incorporate these viewpoints. If you choose to upload more of your own images, you must follow the same instructions.


Analyzing the Data
____________________

After completing the experiment, you will be able to download your results as an .xlsx or .csv file. Your reaction time for each trial will be displayed under the column "resp.rt". Your correct score is displayed under "correctScore" and your percentage of correct responses is shown under "correctPercent". Note that the correct response measures do not include practice trials. 


