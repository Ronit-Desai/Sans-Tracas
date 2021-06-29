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

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
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
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


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
var right_demo_key_;
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
  // Initialize components for Routine "screenAdjustment"
  screenAdjustmentClock = new util.Clock();
  checkScreen = new visual.TextStim({
    win: psychoJS.window,
    name: 'checkScreen',
    text: 'Some text about viewing distance.\nPress any key to continue. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  checkScreenResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'In this task, a face will appear very briefly in the middle of the screen. You will then see two faces, side by side. Your task is to report if the left or right face matches the identity of the face shown previously by pressing the left or right button, respectively.\nPlease respond as quickly and as accurately as you can.\nThere will be four blocks of trials. At the end of each block, you will be provided with feedback on how accurate you were in that block.\n\nPress any button to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
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
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
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
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  right_demo_key_ = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Begin"
  BeginClock = new util.Clock();
  starting_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'starting_text',
    text: 'Starting practice trials. \nHit escape key to abort experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  faceX = new visual.ImageStim({
    win : psychoJS.window,
    name : 'faceX', units : undefined, 
    image : 'faces/male_1_centre_young.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  faceA = new visual.ImageStim({
    win : psychoJS.window,
    name : 'faceA', units : undefined, 
    image : 'faces/male_1_left_4_young.png', mask : undefined,
    ori : 0, pos : [(- 0.3), 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  faceB = new visual.ImageStim({
    win : psychoJS.window,
    name : 'faceB', units : undefined, 
    image : 'faces/male_1_right_4_young.png', mask : undefined,
    ori : 0, pos : [0.3, 0], size : [0.3, 0.3],
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
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
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
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ending"
  endingClock = new util.Clock();
  finalBlockResults = new visual.TextStim({
    win: psychoJS.window,
    name: 'finalBlockResults',
    text: 'You have completed the task.\nIn this final block, you were correct on __% of trials.\n\nPress any button to indicate that you have finished the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
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
var _checkScreenResp_allKeys;
var screenAdjustmentComponents;
function screenAdjustmentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'screenAdjustment'-------
    t = 0;
    screenAdjustmentClock.reset(); // clock
    frameN = -1;
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
    psychoJS.experiment.addData('checkScreenResp.keys', checkScreenResp.keys);
    if (typeof checkScreenResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('checkScreenResp.rt', checkScreenResp.rt);
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


function WelcomeScreenRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'WelcomeScreen'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
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
        psychoJS.experiment.addData('left_demo_key.rt', left_demo_key.rt);
        routineTimer.reset();
        }
    
    left_demo_key.stop();
    // the Routine "leftDemo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _right_demo_key__allKeys;
var rightDemoComponents;
function rightDemoRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rightDemo'-------
    t = 0;
    rightDemoClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    right_demo_key_.keys = undefined;
    right_demo_key_.rt = undefined;
    _right_demo_key__allKeys = [];
    // keep track of which components have finished
    rightDemoComponents = [];
    rightDemoComponents.push(left_face_2);
    rightDemoComponents.push(right_face_2);
    rightDemoComponents.push(right_demo_text);
    rightDemoComponents.push(right_demo_key_);
    
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

    
    // *right_demo_key_* updates
    if (t >= 0.0 && right_demo_key_.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_demo_key_.tStart = t;  // (not accounting for frame time here)
      right_demo_key_.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { right_demo_key_.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { right_demo_key_.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { right_demo_key_.clearEvents(); });
    }

    if (right_demo_key_.status === PsychoJS.Status.STARTED) {
      let theseKeys = right_demo_key_.getKeys({keyList: ['right'], waitRelease: false});
      _right_demo_key__allKeys = _right_demo_key__allKeys.concat(theseKeys);
      if (_right_demo_key__allKeys.length > 0) {
        right_demo_key_.keys = _right_demo_key__allKeys[_right_demo_key__allKeys.length - 1].name;  // just the last key pressed
        right_demo_key_.rt = _right_demo_key__allKeys[_right_demo_key__allKeys.length - 1].rt;
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
    psychoJS.experiment.addData('right_demo_key_.keys', right_demo_key_.keys);
    if (typeof right_demo_key_.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('right_demo_key_.rt', right_demo_key_.rt);
        routineTimer.reset();
        }
    
    right_demo_key_.stop();
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
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
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
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(afterPracticeRoutineBegin(snapshot));
    thisScheduler.add(afterPracticeRoutineEachFrame(snapshot));
    thisScheduler.add(afterPracticeRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(breakScreenRoutineBegin(snapshot));
    thisScheduler.add(breakScreenRoutineEachFrame(snapshot));
    thisScheduler.add(breakScreenRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var _resp_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(faceX);
    trialComponents.push(faceA);
    trialComponents.push(faceB);
    trialComponents.push(resp);
    trialComponents.push(fixation);
    
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


function trialRoutineEnd(trials) {
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
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var breakScreenComponents;
function breakScreenRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'breakScreen'-------
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
    psychoJS.experiment.addData('endTask.keys', endTask.keys);
    if (typeof endTask.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('endTask.rt', endTask.rt);
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
