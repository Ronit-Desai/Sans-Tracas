/******************************* 
 * Twotaskvirtualchinrest Test *
 *******************************/

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
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'TwoTaskVirtualChinrest';  // from the Builder filename that created this script
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
flowScheduler.add(Instructions_CreditCard_RoutineBegin());
flowScheduler.add(Instructions_CreditCard_RoutineEachFrame());
flowScheduler.add(Instructions_CreditCard_RoutineEnd());
flowScheduler.add(CreditCardResizeRoutineBegin());
flowScheduler.add(CreditCardResizeRoutineEachFrame());
flowScheduler.add(CreditCardResizeRoutineEnd());
flowScheduler.add(Instructions_BlindSpotRoutineBegin());
flowScheduler.add(Instructions_BlindSpotRoutineEachFrame());
flowScheduler.add(Instructions_BlindSpotRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
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
  expInfo['psychopyVersion'] = '2020.1.3';
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
var globalClock;
var routineTimer;
function experimentInit() {
  var percentWidth = 0.9;
  var h = window.screen.height;
  var w = window.screen.width;
  var textWrapWidth = percentWidth*w/h;

  // Initialize components for Routine "Instructions_CreditCard_"
  Instructions_CreditCard_Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "In the following task you will be shown a black rectangle in the center of the screen.\nPlace a credit card on top of the rectangle and change the size of the rectangle to match the size of the card.\n\nTo increase the height of the rectangle press the 'up' key. To decrease the height, press 'down'\nTo increase the width, press the 'left' key. To decrease the width press the 'right' key. \n\nWhen you are satisfied with the size of the rectangle press the space bar to move onto the next task.\n",
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
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
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
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
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


var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 8, method: TrialHandler.Method.RANDOM,
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
    thisScheduler.add(movingDotTrialRoutineBegin(snapshot));
    thisScheduler.add(movingDotTrialRoutineEachFrame(snapshot));
    thisScheduler.add(movingDotTrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
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
