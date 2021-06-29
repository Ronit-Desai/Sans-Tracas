/*****************
 * Xab_Task Test *
 *****************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// set the experiment details
const virtualChinrest = true;
const numBlocks = 3; // first block is practice trials if practiceTrialsBoolean === true
const numReps = 6; // number of repetitions per experimental block
const numTrials = 16 // number of trials per repetition
const folderPath = 'faces/';
var blockConditions = randomChoice([['young', 'young', 'old'], ['young', 'old', 'young']]); // faces to use for each block
var totalTrials = 0; // completed so far
var degrees = [0,1] // the angles of the faces to be used as face X - values from 0 (centre) to 4 (far facing left/right)
var degreeNumTrials = Math.ceil(numTrials/degrees.length); // the number of times each face angle should be used per repetition - approx. equal for each degree
var practiceTrialsBoolean = true; // sets the first block to be practice trials
var faces = [];
var avoidFaces = [];
var correct_side;
var face_X;
var face_A;
var face_B;
var correctScore = 0;
var correctScoreByBreak = 0;
var correctPercent = 0;
var correctPercentByBreak = 0;
var trialNumByBreak = 0;
var curBlock = 0;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'XAB_task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

// creating image set
function successFunction(data) {
    var allRows = data.split('\n'); // split rows at new line
    for (let i=0; i<allRows.length; i++) {
      faces.push(allRows[i]);
    }
}

// accessing csv file with image names
$.ajax({
  url: './all_faces.csv',
  dataType: 'text',
  async: false,
}).done(successFunction);

// creating degreeRecords to track the number of times each face angle is used as face X per rep
// used to ensure that each angle is used an equal number of times
// note that it counts downwards from degreeNumTrials when the face degree is used
var degreeRecords = {};
for (let k = 0; k<degrees.length; k++){
  degreeRecords[degrees[k]] = degreeNumTrials;
}

// choosing timing of break display screens depending on the presence of practice trials
var breakDisplayTrials = [];
var numExpTrials;
if (practiceTrialsBoolean === true){
    numExpTrials = (numReps*(numBlocks-1))*numTrials; // does not include practice trials
    breakDisplayTrials.push(Math.floor(numTrials+0.25*numExpTrials-1));
    breakDisplayTrials.push(Math.floor(numTrials+0.5*numExpTrials-1));
    breakDisplayTrials.push(Math.floor(numTrials+0.75*numExpTrials-1));
}
else if (practiceTrialsBoolean === false){
    numExpTrials = numReps*numTrials*numBlocks;
    breakDisplayTrials.push(Math.floor(0.25*numExpTrials-1));
    breakDisplayTrials.push(Math.floor(0.5*numExpTrials-1));
    breakDisplayTrials.push(Math.floor(0.75*numExpTrials-1));
}

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
if (virtualChinrest === true){
  flowScheduler.add(Instructions_CreditCard_RoutineBegin());
  flowScheduler.add(Instructions_CreditCard_RoutineEachFrame());
  flowScheduler.add(Instructions_CreditCard_RoutineEnd());
  flowScheduler.add(CreditCardResizeRoutineBegin());
  flowScheduler.add(CreditCardResizeRoutineEachFrame());
  flowScheduler.add(CreditCardResizeRoutineEnd());
  flowScheduler.add(Instructions_BlindSpotRoutineBegin());
  flowScheduler.add(Instructions_BlindSpotRoutineEachFrame());
  flowScheduler.add(Instructions_BlindSpotRoutineEnd());
  const trialsLoopSchedulerVC = new Scheduler(psychoJS);
  flowScheduler.add(trialsLoopBeginVC, trialsLoopSchedulerVC);
  flowScheduler.add(trialsLoopSchedulerVC);
  flowScheduler.add(trialsLoopEndVC);
}
flowScheduler.add(screenAdjustmentRoutineBegin());
flowScheduler.add(screenAdjustmentRoutineEachFrame());
flowScheduler.add(screenAdjustmentRoutineEnd());
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
flowScheduler.add(leftDemoRoutineBegin());
flowScheduler.add(leftDemoRoutineEachFrame());
flowScheduler.add(leftDemoRoutineEnd());
flowScheduler.add(rightDemoRoutineBegin());
flowScheduler.add(rightDemoRoutineEachFrame());
flowScheduler.add(rightDemoRoutineEnd());
flowScheduler.add(BeginRoutineBegin());
flowScheduler.add(BeginRoutineEachFrame());
flowScheduler.add(BeginRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(endingRoutineBegin());
flowScheduler.add(endingRoutineEachFrame());
flowScheduler.add(endingRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined'){
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  }else{
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess
    }

  // add info from the URL:
  util.addInfoFromUrl(expInfo);

  return Scheduler.Event.NEXT;
}

// variables for virtual chinrest
var Instructions_CreditCard_Clock;
var text;
var end_instr;
var CreditCardResizeClock;
var creditCard;
var modify_size;
var modify_size_text;
var force_end_space;
var Instructions_BlindSpotClock;
var instruction_test;
var end_instr_movingdot;
var movingDotTrialClock;
var resp_enteredBlindSpot;
var movingDot;
var fixateSquare;
var percentWidth = 0.9;
var h = window.screen.height;
var w = window.screen.width;
var textWrapWidth = percentWidth*w/h;

// variables for XAB task
var screenAdjustmentClock;
var checkScreen;
var checkScreenResp;
var WelcomeScreenClock;
var instructions;
var keyInstructions;
var leftDemoClock;
var left_face_1;
var right_face_1;
var left_demo_text;
var left_demo_key;
var rightDemoClock;
var left_face_2;
var right_face_2;
var right_demo_text;
var right_demo_key;
var BeginClock;
var starting_text;
var trialClock;
var faceX;
var faceA;
var faceB;
var resp;
var fixation;
var breakScreenClock;
var break_screen_text;
var key_resp;
var afterPracticeClock;
var after_practice_text;
var endingClock;
var finalBlockResults;
var endTask;
var globalClock;
var routineTimer;


function experimentInit() {
  ///////////////////////////////
  /* VARIABLES FOR VIRTUAL CHINREST */
  ///////////////////////////////
  // Initialize components for Routine "Instructions_CreditCard_"
  Instructions_CreditCard_Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "In the following task you will be shown a white rectangle in the center of the screen.\nPlace a credit card on top of the rectangle and change the size of the rectangle to match the size of the card.\n\nTo increase the height of the rectangle press the 'up' key. To decrease the height, press 'down'\nTo increase the width, press the 'left' key. To decrease the width press the 'right' key. \n\nWhen you are satisfied with the size of the rectangle press the space bar to move onto the next task.\n",
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  end_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "CreditCardResize"
  CreditCardResizeClock = new util.Clock();
  creditCard = new visual.Rect ({
    win: psychoJS.window, name: 'creditCard', units : 'pix',
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: 0, interpolate: true,
  });

  modify_size = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  force_end_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

    modify_size_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'modify_size_text',
    text: "To increase height press the 'up' key. To decrease height, press 'down'\nTo increase  width, press the 'left' key. To decrease width press the 'right' key. \nWhen you are satisfied with the size press the space bar.\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.04,  wrapWidth: textWrapWidth, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });

  // Initialize components for Routine "Instructions_BlindSpot"
  Instructions_BlindSpotClock = new util.Clock();
  instruction_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_test',
    text: 'Fixate on the black square with your right eye covered.\nA red dot will move from right to left.\nWhen it seems to disappear, press the space bar.\n\nPosition yourself 40 cm away from the screen.\nPress the space bar to begin.',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  end_instr_movingdot = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "movingDotTrial"
  movingDotTrialClock = new util.Clock();
  resp_enteredBlindSpot = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  movingDot = new visual.Polygon ({
    win: psychoJS.window, name: 'movingDot', units : 'pix',
    edges: 10, size:[20, 20],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    fillColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    opacity: 1, depth: -1, interpolate: true,
  });

  fixateSquare = new visual.Rect ({
    win: psychoJS.window, name: 'fixateSquare', units : 'pix',
    width: [20, 20][0], height: [20, 20][1],
    ori: 0, pos: [500, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });


  ///////////////////////////////
  /* VARIABLES FOR XAB TASK */
  ///////////////////////////////
  // Initialize components for Routine "screenAdjustment"
  screenAdjustmentClock = new util.Clock();
  checkScreen = new visual.TextStim({
    win: psychoJS.window,
    name: 'checkScreen',
    text: 'Please ensure that the entire screen is visible with minimal glare from your surroundings.\n\nPlease position yourself to be an arm length\'s distance from the screen.\n\nPress any key to continue.',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  checkScreenResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'In this task, a face will appear very briefly in the middle of the screen. You will then see two faces, side by side. Your task is to report if the left or right face matches the identity of the face shown previously by pressing the left or right arrow key on your keyboard, respectively.\n\nPlease respond as quickly and as accurately as you can.\nThere will be four blocks of trials. At the end of each block, you will be provided with feedback on how accurate you were in that block.\n\nPress any key to continue.',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  keyInstructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "leftDemo"
  leftDemoClock = new util.Clock();
  left_face_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_face_1', units : undefined,
    image : 'faces/male_1_centre_young.png', mask : undefined,
    ori : 0, pos : [(- 0.3), 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0
  });
  right_face_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_face_1', units : undefined,
    image : 'faces/male_2_centre_young.png', mask : undefined,
    ori : 0, pos : [0.3, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
  left_demo_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'left_demo_text',
    text: 'This is a demonstration to show you how to use the response keys. \nPlease press the left arrow on your keyboard to continue.',
    font: 'Arial',
    units: undefined,
    pos: [0, 0.3], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0
  });

  left_demo_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "rightDemo"
  rightDemoClock = new util.Clock();
  left_face_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_face_2', units : undefined,
    image : 'faces/male_1_centre_young.png', mask : undefined,
    ori : 0, pos : [(- 0.3), 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0
  });
  right_face_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_face_2', units : undefined,
    image : 'faces/male_2_centre_young.png', mask : undefined,
    ori : 0, pos : [0.3, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
  right_demo_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_demo_text',
    text: 'This is a demonstration to show you how to use the response keys. \nPlease press the right arrow on your keyboard to continue.',
    font: 'Arial',
    units: undefined,
    pos: [0, 0.3], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0
  });

  right_demo_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Begin"
  BeginClock = new util.Clock();
  starting_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Starting practice trials. \nHit escape key to abort experiment.',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  faceX = new visual.ImageStim({
    win : psychoJS.window,
    name : 'faceX', units : undefined,
    image : 'faces/female_1_centre_young.png', // image gets changed later - just needs to be initialized with a value
    mask : undefined,
    ori : 0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0
  });
  faceA = new visual.ImageStim({
    win : psychoJS.window,
    name : 'faceA', units : undefined,
    image : 'faces/female_1_centre_young.png', // image gets changed later - just needs to be initialized with a value
    mask : undefined,
    ori : 0, pos : [(- 0.4), 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
  faceB = new visual.ImageStim({
    win : psychoJS.window,
    name : 'faceB', units : undefined,
    image : 'faces/female_1_centre_young.png', // image gets changed later - just needs to be initialized with a value
    mask : undefined,
    ori : 0, pos : [0.4, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0
  });
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation',
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });

  // Initialize components for Routine "breakScreen"
  breakScreenClock = new util.Clock();
  break_screen_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_screen_text',
    text: 'You may want to take a short break at this time.\nIn this block, you were correct on __ % of trials.\n\nPress any button when you are ready to continue.',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "afterPractice"
  afterPracticeClock = new util.Clock();
  after_practice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'after_practice_text',
    text: 'Practice trials completed.\nStarting experimental trials.',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  // Initialize components for Routine "ending"
  endingClock = new util.Clock();
  finalBlockResults = new visual.TextStim({
    win: psychoJS.window,
    name: 'finalBlockResults',
    text: '', // text gets updated within experiment
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  endTask = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine

  return Scheduler.Event.NEXT;
}

var t;
var frameN;

/////////////////////////////////////////////////////////////////
/* BEGINNING OF VIRTUAL CHINREST ROUTINES */
/////////////////////////////////////////////////////////////////
var _end_instr_allKeys;
var Instructions_CreditCard_Components;
 function Instructions_CreditCard_RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions_CreditCard_'-------
    t = 0;
    Instructions_CreditCard_Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    end_instr.keys = undefined;
    end_instr.rt = undefined;
    _end_instr_allKeys = [];
    // keep track of which components have finished
    Instructions_CreditCard_Components = [];
    Instructions_CreditCard_Components.push(text);
    Instructions_CreditCard_Components.push(end_instr);

    for (const thisComponent of Instructions_CreditCard_Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
 function Instructions_CreditCard_RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions_CreditCard_'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions_CreditCard_Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index

      text.setAutoDraw(true);
    }


    // *end_instr* updates
    if (t >= 0.0 && end_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr.tStart = t;  // (not accounting for frame time here)
      end_instr.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr.clearEvents(); });
    }

    if (end_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_allKeys = _end_instr_allKeys.concat(theseKeys);
      if (_end_instr_allKeys.length > 0) {
        end_instr.keys = _end_instr_allKeys[_end_instr_allKeys.length - 1].name;  // just the last key pressed
        end_instr.rt = _end_instr_allKeys[_end_instr_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions_CreditCard_Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


 function Instructions_CreditCard_RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions_CreditCard_'-------
    for (const thisComponent of Instructions_CreditCard_Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_instr.keys', end_instr.keys);
    if (typeof end_instr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_instr.rt', end_instr.rt);
        routineTimer.reset();
        }

    end_instr.stop();
    // the Routine "Instructions_CreditCard_" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _modify_size_allKeys;
var _force_end_space_allKeys;
var CreditCardResizeComponents;
 function CreditCardResizeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'CreditCardResize'-------
    var ppc = 37.79;
    var creditCardWidthCm = 8.56;
    var creditCardHeightCm = 5.398;
    var creditCardWidthPix = creditCardWidthCm*ppc;
    var creditCardHeightPix = creditCardHeightCm*ppc;
    t = 0;
    CreditCardResizeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    creditCard.setSize([creditCardWidthPix, creditCardHeightPix]);//creditCard.setSize([200, 150]);
    modify_size.keys = undefined;
    modify_size.rt = undefined;
    _modify_size_allKeys = [];
    force_end_space.keys = undefined;
    force_end_space.rt = undefined;
    _force_end_space_allKeys = [];
    // keep track of which components have finished
    CreditCardResizeComponents = [];
    CreditCardResizeComponents.push(creditCard);
    CreditCardResizeComponents.push(modify_size);
    CreditCardResizeComponents.push(force_end_space);
    CreditCardResizeComponents.push(modify_size_text);

    for (const thisComponent of CreditCardResizeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


 function CreditCardResizeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'CreditCardResize'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CreditCardResizeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *creditCard* updates
    if (t >= 0.0 && creditCard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      creditCard.tStart = t;  // (not accounting for frame time here)
      creditCard.frameNStart = frameN;  // exact frame index

      creditCard.setAutoDraw(true);
    }

    // *modify_size_text* updates
    if (t >= 0.0 && modify_size_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      modify_size_text.tStart = t;  // (not accounting for frame time here)
      modify_size_text.frameNStart = frameN;  // exact frame index
      
      modify_size_text.setAutoDraw(true);
    }

    // *modify_size* updates
    if (t >= 0.0 && modify_size.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      modify_size.tStart = t;  // (not accounting for frame time here)
      modify_size.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { modify_size.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { modify_size.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { modify_size.clearEvents(); });
    }

    if (modify_size.status === PsychoJS.Status.STARTED) {
      let theseKeys = modify_size.getKeys({keyList: ['up', 'down', 'left', 'right'], waitRelease: false});
      var h = creditCard.size[1];
      var w = creditCard.size[0];
      var key = theseKeys[theseKeys.length-1];
      if(theseKeys.length!==0){
        if (key.name === 'up'){
          creditCard.setSize([w,h+10]);
        }
        else if (key.name === 'down'){
          creditCard.setSize([w,h-10]);
        }
        else if (key.name === 'left'){
          creditCard.setSize([w+15.85,h]);
        }
        else if (key.name === 'right'){
          creditCard.setSize([w-15.85,h]);
        }
      }

      _modify_size_allKeys = _modify_size_allKeys.concat(theseKeys);
      if (_modify_size_allKeys.length > 0) {
        modify_size.keys = _modify_size_allKeys[_modify_size_allKeys.length - 1].name;  // just the last key pressed
        modify_size.rt = _modify_size_allKeys[_modify_size_allKeys.length - 1].rt;
      }
    }


    // *force_end_space* updates
    if (t >= 0.0 && force_end_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      force_end_space.tStart = t;  // (not accounting for frame time here)
      force_end_space.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { force_end_space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { force_end_space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { force_end_space.clearEvents(); });
    }

    if (force_end_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = force_end_space.getKeys({keyList: ['space'], waitRelease: false});
      _force_end_space_allKeys = _force_end_space_allKeys.concat(theseKeys);
      if (_force_end_space_allKeys.length > 0) {
        force_end_space.keys = _force_end_space_allKeys[_force_end_space_allKeys.length - 1].name;  // just the last key pressed
        force_end_space.rt = _force_end_space_allKeys[_force_end_space_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CreditCardResizeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


 function CreditCardResizeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'CreditCardResize'-------
    for (const thisComponent of CreditCardResizeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('modify_size.keys', modify_size.keys);
    if (typeof modify_size.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('modify_size.rt', modify_size.rt);
        }

    modify_size.stop();
    psychoJS.experiment.addData('force_end_space.keys', force_end_space.keys);
    if (typeof force_end_space.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('force_end_space.rt', force_end_space.rt);
        routineTimer.reset();
        }

    psychoJS.experiment.addData('creditCard_height',creditCard.size[1]);
    psychoJS.experiment.addData('creditCard_weight', creditCard.size[0]);

    force_end_space.stop();
    // the Routine "CreditCardResize" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _end_instr_movingdot_allKeys;
var Instructions_BlindSpotComponents;
 function Instructions_BlindSpotRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions_BlindSpot'-------
    t = 0;
    Instructions_BlindSpotClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    end_instr_movingdot.keys = undefined;
    end_instr_movingdot.rt = undefined;
    _end_instr_movingdot_allKeys = [];
    // keep track of which components have finished
    Instructions_BlindSpotComponents = [];
    Instructions_BlindSpotComponents.push(instruction_test);
    Instructions_BlindSpotComponents.push(end_instr_movingdot);

    for (const thisComponent of Instructions_BlindSpotComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


 function Instructions_BlindSpotRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions_BlindSpot'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions_BlindSpotClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *instruction_test* updates
    if (t >= 0.0 && instruction_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_test.tStart = t;  // (not accounting for frame time here)
      instruction_test.frameNStart = frameN;  // exact frame index

      instruction_test.setAutoDraw(true);
    }


    // *end_instr_movingdot* updates
    if (t >= 0.0 && end_instr_movingdot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_movingdot.tStart = t;  // (not accounting for frame time here)
      end_instr_movingdot.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_movingdot.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_movingdot.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_movingdot.clearEvents(); });
    }

    if (end_instr_movingdot.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_movingdot.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_movingdot_allKeys = _end_instr_movingdot_allKeys.concat(theseKeys);
      if (_end_instr_movingdot_allKeys.length > 0) {
        end_instr_movingdot.keys = _end_instr_movingdot_allKeys[_end_instr_movingdot_allKeys.length - 1].name;  // just the last key pressed
        end_instr_movingdot.rt = _end_instr_movingdot_allKeys[_end_instr_movingdot_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions_BlindSpotComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


 function Instructions_BlindSpotRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions_BlindSpot'-------
    for (const thisComponent of Instructions_BlindSpotComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_instr_movingdot.keys', end_instr_movingdot.keys);
    if (typeof end_instr_movingdot.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_instr_movingdot.rt', end_instr_movingdot.rt);
        routineTimer.reset();
        }

    end_instr_movingdot.stop();
    // the Routine "Instructions_BlindSpot" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var trialsVC;
var currentLoopVC;
function trialsLoopBeginVC(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trialsVC = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 8, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trialsVC); // add the loop to the experiment
  currentLoopVC = trialsVC;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trialsVC) {
    const snapshot = trialsVC.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(movingDotTrialRoutineBegin(snapshot));
    thisScheduler.add(movingDotTrialRoutineEachFrame(snapshot));
    thisScheduler.add(movingDotTrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIterationVC(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEndVC() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _resp_enteredBlindSpot_allKeys;
var movingDotTrialComponents;
 function movingDotTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'movingDotTrial'-------
    t = 0;
    movingDotTrialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(45.000000);
    // update component parameters for each repeat
    resp_enteredBlindSpot.keys = undefined;
    resp_enteredBlindSpot.rt = undefined;
    _resp_enteredBlindSpot_allKeys = [];
    // keep track of which components have finished
    movingDotTrialComponents = [];
    movingDotTrialComponents.push(resp_enteredBlindSpot);
    movingDotTrialComponents.push(movingDot);
    movingDotTrialComponents.push(fixateSquare);

    for (const thisComponent of movingDotTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
 function movingDotTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'movingDotTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = movingDotTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *resp_enteredBlindSpot* updates
    if (t >= 0.0 && resp_enteredBlindSpot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_enteredBlindSpot.tStart = t;  // (not accounting for frame time here)
      resp_enteredBlindSpot.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_enteredBlindSpot.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_enteredBlindSpot.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_enteredBlindSpot.clearEvents(); });
    }

    frameRemains = 0.0 + 45 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (resp_enteredBlindSpot.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resp_enteredBlindSpot.status = PsychoJS.Status.FINISHED;
  }

    if (resp_enteredBlindSpot.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_enteredBlindSpot.getKeys({keyList: ['space'], waitRelease: false});
      _resp_enteredBlindSpot_allKeys = _resp_enteredBlindSpot_allKeys.concat(theseKeys);
      if (_resp_enteredBlindSpot_allKeys.length > 0) {
        resp_enteredBlindSpot.keys = _resp_enteredBlindSpot_allKeys[_resp_enteredBlindSpot_allKeys.length - 1].name;  // just the last key pressed
        resp_enteredBlindSpot.rt = _resp_enteredBlindSpot_allKeys[_resp_enteredBlindSpot_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *movingDot* updates
    if (t >= 0.0 && movingDot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movingDot.tStart = t;  // (not accounting for frame time here)
      movingDot.frameNStart = frameN;  // exact frame index

      movingDot.setAutoDraw(true);
    }

    frameRemains = 0.0 + 45 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (movingDot.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      movingDot.setAutoDraw(false);
    }
//speedModify is a multiplier to maintain speed at 1.5 cm/s
	var CC_cm = 8.56; 
    var speedModify = (creditCard.size[0]/CC_cm)/40;	

    if (movingDot.status === PsychoJS.Status.STARTED){ // only update if being drawn
      movingDot.setPos([(500 - (speedModify * frameN)), 0]);
    }

    // *fixateSquare* updates
    if (t >= 0.0 && fixateSquare.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixateSquare.tStart = t;  // (not accounting for frame time here)
      fixateSquare.frameNStart = frameN;  // exact frame index

      fixateSquare.setAutoDraw(true);
    }

    frameRemains = 0.0 + 45 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixateSquare.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixateSquare.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of movingDotTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


 function movingDotTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'movingDotTrial'-------
    for (const thisComponent of movingDotTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('resp_enteredBlindSpot.keys', resp_enteredBlindSpot.keys);
    if (typeof resp_enteredBlindSpot.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_enteredBlindSpot.rt', resp_enteredBlindSpot.rt);
        routineTimer.reset();
        }

    resp_enteredBlindSpot.stop();
    return Scheduler.Event.NEXT;
  };
}


 function endLoopIterationVC(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}
/////////////////////////////////////////////////////////////////
/* END OF VIRTUAL CHINREST ROUTINES */
/////////////////////////////////////////////////////////////////

var _checkScreenResp_allKeys;
var screenAdjustmentComponents;
function screenAdjustmentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'screenAdjustment'-------
    t = 0;
    screenAdjustmentClock.reset(); // clock
    frameN = -1;
    checkScreen.setAlignHoriz('center');
    
    // update component parameters for each repeat
    checkScreenResp.keys = undefined;
    checkScreenResp.rt = undefined;
    _checkScreenResp_allKeys = [];
    // keep track of which components have finished
    screenAdjustmentComponents = [];
    screenAdjustmentComponents.push(checkScreen);
    screenAdjustmentComponents.push(checkScreenResp);

    for (const thisComponent of screenAdjustmentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function screenAdjustmentRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'screenAdjustment'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = screenAdjustmentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *checkScreen* updates
    if (t >= 0.0 && checkScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      checkScreen.tStart = t;  // (not accounting for frame time here)
      checkScreen.frameNStart = frameN;  // exact frame index

      checkScreen.setAutoDraw(true);
    }


    // *checkScreenResp* updates
    if (t >= 0.0 && checkScreenResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      checkScreenResp.tStart = t;  // (not accounting for frame time here)
      checkScreenResp.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { checkScreenResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { checkScreenResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { checkScreenResp.clearEvents(); });
    }

    if (checkScreenResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = checkScreenResp.getKeys({keyList: [], waitRelease: false});
      _checkScreenResp_allKeys = _checkScreenResp_allKeys.concat(theseKeys);
      if (_checkScreenResp_allKeys.length > 0) {
        checkScreenResp.keys = _checkScreenResp_allKeys[_checkScreenResp_allKeys.length - 1].name;  // just the last key pressed
        checkScreenResp.rt = _checkScreenResp_allKeys[_checkScreenResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of screenAdjustmentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function screenAdjustmentRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'screenAdjustment'-------
    for (const thisComponent of screenAdjustmentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    if (typeof checkScreenResp.keys !== 'undefined') {  // we had a response
        routineTimer.reset();
        }

    checkScreenResp.stop();
    // the Routine "screenAdjustment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}

var _keyInstructions_allKeys;
var WelcomeScreenComponents;

function WelcomeScreenRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'WelcomeScreen'-------
    t = 0;
    WelcomeScreenClock.reset(); // clock
    frameN = -1;
    instructions.setAlignHoriz('center');
    // update component parameters for each repeat
    keyInstructions.keys = undefined;
    keyInstructions.rt = undefined;
    _keyInstructions_allKeys = [];
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(instructions);
    WelcomeScreenComponents.push(keyInstructions);

    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function WelcomeScreenRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'WelcomeScreen'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1; // number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index

      instructions.setAutoDraw(true);
    }


    // *keyInstructions* updates
    if (t >= 0.0 && keyInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyInstructions.tStart = t;  // (not accounting for frame time here)
      keyInstructions.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyInstructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyInstructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyInstructions.clearEvents(); });
    }

    if (keyInstructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyInstructions.getKeys({keyList: [], waitRelease: false});
      _keyInstructions_allKeys = _keyInstructions_allKeys.concat(theseKeys);
      if (_keyInstructions_allKeys.length > 0) {
        keyInstructions.keys = _keyInstructions_allKeys[_keyInstructions_allKeys.length - 1].name;  // just the last key pressed
        keyInstructions.rt = _keyInstructions_allKeys[_keyInstructions_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function WelcomeScreenRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'WelcomeScreen'-------
    for (const thisComponent of WelcomeScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _left_demo_key_allKeys;
var leftDemoComponents;
function leftDemoRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'leftDemo'-------
    t = 0;
    leftDemoClock.reset(); // clock
    frameN = -1;
    left_demo_text.setAlignHoriz('center');
    // update component parameters for each repeat
    left_demo_key.keys = undefined;
    left_demo_key.rt = undefined;
    _left_demo_key_allKeys = [];
    // keep track of which components have finished
    leftDemoComponents = [];
    leftDemoComponents.push(left_face_1);
    leftDemoComponents.push(right_face_1);
    leftDemoComponents.push(left_demo_text);
    leftDemoComponents.push(left_demo_key);

    for (const thisComponent of leftDemoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


function leftDemoRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'leftDemo'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = leftDemoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *left_face_1* updates
    if (t >= 0.0 && left_face_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_face_1.tStart = t;  // (not accounting for frame time here)
      left_face_1.frameNStart = frameN;  // exact frame index

      left_face_1.setAutoDraw(true);
    }


    // *right_face_1* updates
    if (t >= 0.0 && right_face_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_face_1.tStart = t;  // (not accounting for frame time here)
      right_face_1.frameNStart = frameN;  // exact frame index

      right_face_1.setAutoDraw(true);
    }


    // *left_demo_text* updates
    if (t >= 0.0 && left_demo_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_demo_text.tStart = t;  // (not accounting for frame time here)
      left_demo_text.frameNStart = frameN;  // exact frame index

      left_demo_text.setAutoDraw(true);
    }


    // *left_demo_key* updates
    if (t >= 0.0 && left_demo_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_demo_key.tStart = t;  // (not accounting for frame time here)
      left_demo_key.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { left_demo_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { left_demo_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { left_demo_key.clearEvents(); });
    }

    if (left_demo_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = left_demo_key.getKeys({keyList: ['left'], waitRelease: false});
      _left_demo_key_allKeys = _left_demo_key_allKeys.concat(theseKeys);
      if (_left_demo_key_allKeys.length > 0) {
        left_demo_key.keys = _left_demo_key_allKeys[_left_demo_key_allKeys.length - 1].name;  // just the last key pressed
        left_demo_key.rt = _left_demo_key_allKeys[_left_demo_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of leftDemoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function leftDemoRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'leftDemo'-------
    for (const thisComponent of leftDemoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('left_demo_key.keys', left_demo_key.keys);
    if (typeof left_demo_key.keys !== 'undefined') {  // we had a response
        routineTimer.reset();
        }

    left_demo_key.stop();
    // the Routine "leftDemo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _right_demo_key_allKeys;
var rightDemoComponents;
function rightDemoRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rightDemo'-------
    t = 0;
    rightDemoClock.reset(); // clock
    frameN = -1;
    right_demo_text.setAlignHoriz('center');
    // update component parameters for each repeat
    right_demo_key.keys = undefined;
    right_demo_key.rt = undefined;
    _right_demo_key_allKeys = [];
    // keep track of which components have finished
    rightDemoComponents = [];
    rightDemoComponents.push(left_face_2);
    rightDemoComponents.push(right_face_2);
    rightDemoComponents.push(right_demo_text);
    rightDemoComponents.push(right_demo_key);

    for (const thisComponent of rightDemoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


function rightDemoRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'rightDemo'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = rightDemoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *left_face_2* updates
    if (t >= 0.0 && left_face_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_face_2.tStart = t;  // (not accounting for frame time here)
      left_face_2.frameNStart = frameN;  // exact frame index

      left_face_2.setAutoDraw(true);
    }


    // *right_face_2* updates
    if (t >= 0.0 && right_face_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_face_2.tStart = t;  // (not accounting for frame time here)
      right_face_2.frameNStart = frameN;  // exact frame index

      right_face_2.setAutoDraw(true);
    }


    // *right_demo_text* updates
    if (t >= 0.0 && right_demo_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_demo_text.tStart = t;  // (not accounting for frame time here)
      right_demo_text.frameNStart = frameN;  // exact frame index

      right_demo_text.setAutoDraw(true);
    }


    // *right_demo_key* updates
    if (t >= 0.0 && right_demo_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_demo_key.tStart = t;  // (not accounting for frame time here)
      right_demo_key.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { right_demo_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { right_demo_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { right_demo_key.clearEvents(); });
    }

    if (right_demo_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = right_demo_key.getKeys({keyList: ['right'], waitRelease: false});
      _right_demo_key_allKeys = _right_demo_key_allKeys.concat(theseKeys);
      if (_right_demo_key_allKeys.length > 0) {
        right_demo_key.keys = _right_demo_key_allKeys[_right_demo_key_allKeys.length - 1].name;  // just the last key pressed
        right_demo_key.rt = _right_demo_key_allKeys[_right_demo_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rightDemoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rightDemoRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'rightDemo'-------
    for (const thisComponent of rightDemoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('right_demo_key.keys', right_demo_key.keys);
    if (typeof right_demo_key.keys !== 'undefined') {  // we had a response
        routineTimer.reset();
        }

    right_demo_key.stop();
    // the Routine "rightDemo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var BeginComponents;
function BeginRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Begin'-------
    t = 0;
    BeginClock.reset(); // clock
    starting_text.setAlignHoriz('center');
    if (practiceTrialsBoolean === false){
        starting_text.text = 'Starting experimental trials.\nHit escape key to abort experiment.'; // change text to remove mention of practice trials
    }
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    BeginComponents = [];
    BeginComponents.push(starting_text);

    for (const thisComponent of BeginComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function BeginRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Begin'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = BeginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *starting_text* updates
    if (t >= 0.0 && starting_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      starting_text.tStart = t;  // (not accounting for frame time here)
      starting_text.frameNStart = frameN;  // exact frame index

      starting_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (starting_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      starting_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BeginComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BeginRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Begin'-------
    for (const thisComponent of BeginComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var blocks;
var currentLoop;
function blocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: numBlocks, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlock of blocks) {
    const snapshot = blocks.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler)
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);

    if ((practiceTrialsBoolean === true) && (blocks.thisN === 0)){
      thisScheduler.add(afterPracticeRoutineBegin(snapshot));
      thisScheduler.add(afterPracticeRoutineEachFrame(snapshot));
      thisScheduler.add(afterPracticeRoutineEnd(snapshot));
    }
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function setFaceLists(curBlock){
    var centreFaces = [];
    var faceXFaces = [];
    var femaleCentreFaces = [];
    var maleCentreFaces = [];

  for (let i=0; i<faces.length; i++){
    let search = new RegExp(blockConditions[curBlock]);
    if (search.test(faces[i])){
      // centre facing list
      if (/centre/.test(faces[i])){
        centreFaces.push(faces[i]);
      }
      // list for all X faces, accounting for all angles specified in degrees variable
      else if ((/left/.test(faces[i]))||(/right/.test(faces[i]))) {
        let degree = faces[i].split("_");
        degree = Number(degree[3]);
        if (degrees.includes(degree)){
          faceXFaces.push(faces[i]);
        }
      }
      // sorting by gender
      if ((/^female/.test(faces[i])) && (/centre/.test(faces[i]))){
        femaleCentreFaces.push(faces[i]);
      }
      else if ((/^male/.test(faces[i])) && (/centre/.test(faces[i]))){
        maleCentreFaces.push(faces[i]);
      }}
    }

  if (degrees.includes(0)){
    faceXFaces = faceXFaces.concat(centreFaces);
  }
  let myFaceLists = [centreFaces, faceXFaces, femaleCentreFaces, maleCentreFaces];

  return myFaceLists;
}

var trials;
function trialsLoopBegin(thisScheduler){
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: numReps*numTrials, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });

  if ((practiceTrialsBoolean === true) && (curBlock === 0)){
    trials.nReps = numTrials;
  }

  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  var [centreFaces, faceXFaces, femaleCentreFaces, maleCentreFaces] = setFaceLists(curBlock);

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {

    if (trials.thisN % numTrials === 0){ // updates at the start of each rep
      var availFaces = centreFaces.slice(0); // keeps track of the target faces used in each rep
      var degreeCounter = Object.assign({},degreeRecords); // keeps track of the number of degrees used for face X in each rep
    }

    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(centreFaces, faceXFaces, femaleCentreFaces, maleCentreFaces, availFaces, totalTrials, degreeCounter, snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(totalTrials, snapshot));

    if (breakDisplayTrials.includes(totalTrials)){ // present inter-block display screen every 1/4 of experimental trials
      thisScheduler.add(breakScreenRoutineBegin(snapshot));
      thisScheduler.add(breakScreenRoutineEachFrame(snapshot));
      thisScheduler.add(breakScreenRoutineEnd(snapshot));
    }
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
    totalTrials++;
  }

  return Scheduler.Event.NEXT;
}

function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  curBlock++;  // increases current block number

  return Scheduler.Event.NEXT;
}

function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}

function conditionsGenerator(centreFaces, faceXFaces, femaleCentreFaces, maleCentreFaces, availFaces, totalTrials, degreeCounter){
  // passes previous trial's faces to ensure that they are not used in the current trial
  if (totalTrials > 0){
    avoidFaces = avoidFacesFunc(face_A, face_B);
  }

  // set target face
  var target;
  while (true){
      target = randomChoice(availFaces);
      if (!avoidFaces.includes(target)){
          break;
  }}
  let faceDetails = target.split("_");

  // remove face from availFaces so that it is not used again in this rep
  let removeIndex = availFaces.indexOf(target);
  availFaces.splice(removeIndex, 1);

  face_X = setFaceX(centreFaces, faceXFaces, femaleCentreFaces, maleCentreFaces, target, degreeCounter);

  // set correct response side
  correct_side = randomChoice(['left', 'right']);

  // set other response face (the incorrect option)
  if (correct_side === "left"){
    face_A = target;
    if (faceDetails[0] === "female"){ // the faces are female
      while (true){
        face_B = randomChoice(femaleCentreFaces);
        if (!(face_B === face_A)&&(!avoidFaces.includes(face_B))){
          if (availFaces.length > 1){
            break;
          }
          else if (!availFaces.includes(face_B)){
            break;
    }}}}
    else{ // the faces are male
      while (true){
        face_B = randomChoice(maleCentreFaces);
        if (!(face_B === face_A)&&(!avoidFaces.includes(face_B))){
          if (availFaces.length > 1){
            break;
          }
          else if (!availFaces.includes(face_B)){
            break;
    }}}}
  }
  else if (correct_side === "right"){
    face_B = target;
    if (faceDetails[0] === "female"){ // the faces are female
      while (true){
        face_A = randomChoice(femaleCentreFaces);
        if (!(face_A === face_B)&&(!avoidFaces.includes(face_A))){
          if (availFaces.length > 1){
            break;
          }
          else if (!availFaces.includes(face_A)){
            break;
    }}}}
    else{ // the faces are male
      while (true){
        face_A = randomChoice(maleCentreFaces);
        if (!(face_A === face_B)&&(!avoidFaces.includes(face_A))){
          if (availFaces.length > 1){
            break;
          }
          else if (!availFaces.includes(face_A)){
            break;
}}}}}

    let myFaces = [face_X, face_A, face_B];
    return myFaces;
}

function setFaceX(centreFaces, faceXFaces, femaleCentreFaces, maleCentreFaces, target, degreeCounter){

  let faceDetails = target.split("_");
  faceDetails = faceDetails[0].concat("_", faceDetails[1]);
  var faceXpsble = []; // all options of varying degrees matching the target's identity
  for (let i=0; i<faceXFaces.length; i++){
    if (faceXFaces[i].startsWith(faceDetails)){
      faceXpsble.push(faceXFaces[i]);
  }}

  // remove the degrees that have been used a maximum number of times (degreeNumTrials) from faceXpsble
  for (let a = 0; a<Object.keys(degreeCounter).length; a++){
    let k = Object.keys(degreeCounter)[a];
    if (degreeCounter[k] === 0){
      if (k === '0'){ // remove centre faces from possible options for face X
        faceXpsble = faceXpsble.filter(x => !centreFaces.includes(x));
      }
      else{ // remove other face angles
        for (let m = faceXpsble.length-1; m>=0; m--){ // must count down due to the nature of splice - indices are changing
          let degree = faceXpsble[m].split("_")[3];
          if (k === degree){
            faceXpsble.splice(m,1);
  }}}}}

  face_X = randomChoice(faceXpsble);

  // record the degree of face_X by updating the counter
  // note that the counter decreases from degreeNumTrials to zero
  if (/centre/.test(face_X)){
    degreeCounter[0] = degreeCounter[0] - 1;
  }
  else{
    let deg = face_X.split("_")[3];
    degreeCounter[deg] = degreeCounter[deg] - 1;
  }

  return face_X;
}

function randomChoice(choices) {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// ensuring that these faces are not used in consecutive trials
function avoidFacesFunc(face_A, face_B){
  avoidFaces = [];
  let faceA_identity = face_A.split("_");
  faceA_identity = faceA_identity[0].concat('_',faceA_identity[1]);
  let faceB_identity = face_B.split("_");
  faceB_identity = faceB_identity[0].concat('_',faceB_identity[1]);

  for (let i=0; i<faces.length; i++){
    if ((faces[i].startsWith(faceA_identity)) || (faces[i].startsWith(faceB_identity))){
      avoidFaces.push(faces[i]);
    }
  }

  return avoidFaces;
}


var _resp_allKeys;
var trialComponents;
function trialRoutineBegin(centreFaces, faceXFaces, femaleCentreFaces, maleCentreFaces, availFaces, totalTrials, degreeCounter, trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];

    // set face images at each trial
    let myFaces = conditionsGenerator(centreFaces, faceXFaces, femaleCentreFaces, maleCentreFaces, availFaces, totalTrials, degreeCounter);
    faceX.image = folderPath.concat(myFaces[0]);
    faceA.image = folderPath.concat(myFaces[1]);
    faceB.image = folderPath.concat(myFaces[2]);

    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(faceX);
    trialComponents.push(faceA);
    trialComponents.push(faceB);
    trialComponents.push(resp);
    trialComponents.push(fixation);

    psychoJS.experiment.addData('face_X', myFaces[0]);
    psychoJS.experiment.addData('face_A', myFaces[1]);
    psychoJS.experiment.addData('face_B', myFaces[2]);

    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *faceX* updates
    if (t >= 2 && faceX.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      faceX.tStart = t;  // (not accounting for frame time here)
      faceX.frameNStart = frameN;  // exact frame index

      faceX.setAutoDraw(true);
    }

    frameRemains = 2 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (faceX.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      faceX.setAutoDraw(false);
    }

    // *faceA* updates
    if (t >= 2.5 && faceA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      faceA.tStart = t;  // (not accounting for frame time here)
      faceA.frameNStart = frameN;  // exact frame index

      faceA.setAutoDraw(true);
    }


    // *faceB* updates
    if (t >= 2.5 && faceB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      faceB.tStart = t;  // (not accounting for frame time here)
      faceB.frameNStart = frameN;  // exact frame index

      faceB.setAutoDraw(true);
    }


    // *resp* updates
    if (t >= 2.5 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      resp.clock.reset();
      resp.start();
    }

    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[_resp_allKeys.length - 1].name;  // just the last key pressed
        resp.rt = _resp_allKeys[_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }


    // *fixation* updates
    if (t >= 1.5 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index

      fixation.setAutoDraw(true);
    }

    frameRemains = 1.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(totalTrials, trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('resp.keys', resp.keys);
    if (typeof resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp.rt', resp.rt);
        routineTimer.reset();
        }

    resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    var curRep = Math.floor(totalTrials/numTrials);

    // updating experimental trial number of current break section
    if (((practiceTrialsBoolean === true) && (curRep > 0))||(practiceTrialsBoolean === false)){
        trialNumByBreak++;
    }

    psychoJS.experiment.addData('total_trials', totalTrials);
    psychoJS.experiment.addData('correct_response', correct_side)

    // updating correct response score
    if (resp.keys === correct_side){
        psychoJS.experiment.addData('correct', 1);
        if (((practiceTrialsBoolean === true) && (curRep > 0))||(practiceTrialsBoolean === false)){
            correctScore++; // the correct score does not include practice trials
            correctScoreByBreak++;
    }}
    else{
        psychoJS.experiment.addData('correct', 0);
    }

    // updating results file
    if ((practiceTrialsBoolean === true) && (curRep === 0)){
        psychoJS.experiment.addData('trial_type', 'practice');
    }
    else{
        psychoJS.experiment.addData('trial_type', 'experimental');
    }

    if (((practiceTrialsBoolean === true) && (curRep > 0))||(practiceTrialsBoolean === false)){
        if (practiceTrialsBoolean === true){
            correctPercent = (correctScore/(totalTrials-numTrials+1))*100; // only counts experimental trials
        }
        else{
            correctPercent = (correctScore/(totalTrials+1))*100;
        }
        correctPercentByBreak = (correctScoreByBreak/trialNumByBreak)*100;
        psychoJS.experiment.addData('correctScore', correctScore);
        psychoJS.experiment.addData('correctScoreByBreak', correctScoreByBreak);
        psychoJS.experiment.addData('correctPercent', correctPercent);
        psychoJS.experiment.addData('correctPercentByBreak', correctPercentByBreak);
    }

    return Scheduler.Event.NEXT;
  };
}

var _key_resp_allKeys;
var breakScreenComponents;
function breakScreenRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'breakScreen'-------
    // update display message
    break_screen_text.text = `You may want to take a short break at this time.\nIn this block, you were correct on ${Math.round(correctPercentByBreak * 10) / 10}% of trials.\n\nPress any key when you are ready to continue.`;
    break_screen_text.setAlignHoriz('center');

    t = 0;
    breakScreenClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    breakScreenComponents = [];
    breakScreenComponents.push(break_screen_text);
    breakScreenComponents.push(key_resp);

    for (const thisComponent of breakScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    // reset counters
    correctPercentByBreak = 0;
    correctScoreByBreak = 0;
    trialNumByBreak = 0;

    return Scheduler.Event.NEXT;
  };
}


function breakScreenRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'breakScreen'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = breakScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *break_screen_text* updates
    if (t >= 0.0 && break_screen_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_screen_text.tStart = t;  // (not accounting for frame time here)
      break_screen_text.frameNStart = frameN;  // exact frame index

      break_screen_text.setAutoDraw(true);
    }


    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: [], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of breakScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function breakScreenRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'breakScreen'-------
    for (const thisComponent of breakScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "breakScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}

var afterPracticeComponents;
function afterPracticeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'afterPractice'-------
    t = 0;
    afterPracticeClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    after_practice_text.setAlignHoriz('center');
    // update component parameters for each repeat
    // keep track of which components have finished
    afterPracticeComponents = [];
    afterPracticeComponents.push(after_practice_text);

    for (const thisComponent of afterPracticeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


function afterPracticeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'afterPractice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = afterPracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *after_practice_text* updates
    if (t >= 0.0 && after_practice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      after_practice_text.tStart = t;  // (not accounting for frame time here)
      after_practice_text.frameNStart = frameN;  // exact frame index

      after_practice_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (after_practice_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      after_practice_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of afterPracticeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function afterPracticeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'afterPractice'-------
    for (const thisComponent of afterPracticeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _endTask_allKeys;
var endingComponents;
function endingRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ending'-------
    // update display message
    finalBlockResults.text = `You have completed the task.\nIn this final block, you were correct on ${Math.round(correctPercentByBreak * 10) / 10}% of trials.\n\nPress any key to indicate that you have finished the task.`
    finalBlockResults.setAlignHoriz('center');

    t = 0;
    endingClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    endTask.keys = undefined;
    endTask.rt = undefined;
    _endTask_allKeys = [];
    // keep track of which components have finished
    endingComponents = [];
    endingComponents.push(finalBlockResults);
    endingComponents.push(endTask);

    for (const thisComponent of endingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


function endingRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ending'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *finalBlockResults* updates
    if (t >= 0.0 && finalBlockResults.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finalBlockResults.tStart = t;  // (not accounting for frame time here)
      finalBlockResults.frameNStart = frameN;  // exact frame index

      finalBlockResults.setAutoDraw(true);
    }


    // *endTask* updates
    if (t >= 0.0 && endTask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endTask.tStart = t;  // (not accounting for frame time here)
      endTask.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endTask.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endTask.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endTask.clearEvents(); });
    }

    if (endTask.status === PsychoJS.Status.STARTED) {
      let theseKeys = endTask.getKeys({keyList: [], waitRelease: false});
      _endTask_allKeys = _endTask_allKeys.concat(theseKeys);
      if (_endTask_allKeys.length > 0) {
        endTask.keys = _endTask_allKeys[_endTask_allKeys.length - 1].name;  // just the last key pressed
        endTask.rt = _endTask_allKeys[_endTask_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endingRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ending'-------
    for (const thisComponent of endingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    if (typeof endTask.keys !== 'undefined') {  // we had a response
        routineTimer.reset();
        }

    endTask.stop();
    // the Routine "ending" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
