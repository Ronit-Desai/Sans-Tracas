/********************* 
 * Brthcounting Test *
 *********************/

var warnTime = 10; //If 10 seconds go by without a participant response a warning in shown on the screen
var percentWidth = 0.9; //What percent of the width of the screen should the text fill up?

//Used to read .csv file containing instruction and question texts (allows easier modification)
//Stored in the texts[] array
//Note to specify newlines using ~ in the spreadsheet, \n is not parsed properly
var map_key = [];
var texts = []; 
var force_presses = [];
var questionList = [];
var instructionList = [];

$.ajax({
  url: './exp_text.csv',
  dataType: 'text',
  async: false,
}).done(importSpreadsheetText);


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
let expName = 'brthCounting';  // from the Builder filename that created this script
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
//The first loop (instrtrials) just changes the instructions text (since everything cannot fit on one screen)
//This is followed by the BreathCountingRoutine in which the participants completes the task
//After the task, the qtrialslLoop loops through all the survey questions the participant must respond to 
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const instrtrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instrtrialsLoopBegin, instrtrialsLoopScheduler);
flowScheduler.add(instrtrialsLoopScheduler);
flowScheduler.add(instrtrialsLoopEnd);
flowScheduler.add(BreathCountingRoutineBegin());
flowScheduler.add(BreathCountingRoutineEachFrame());
flowScheduler.add(BreathCountingRoutineEnd());
flowScheduler.add(SurveyInstRoutineBegin());
flowScheduler.add(SurveyInstRoutineEachFrame());
flowScheduler.add(SurveyInstRoutineEnd());
const qtrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(qtrialsLoopBegin, qtrialsLoopScheduler);
flowScheduler.add(qtrialsLoopScheduler);
flowScheduler.add(qtrialsLoopEnd);
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

var InstructionsClock;
var instr_text; //instructions text (changes for end loop)
var end_instr_resp; //stores <space> responses (these end the instructions to move to the next scene)
var BreathCountingClock;
var brth_responses; //stores left, right, and space responses for the task
var task_instr; //text displays through entirety of breath counting task
var warningText; //the warning text that is displayed if participant doesn't press within warningTime
var quit_resp; //stores q response that allows participant to end early
var SurveyInstClock;
var SurveyInstrText;
var questionClock;
var questionText;
var answer_text; //stores participant answers to survey questions
var globalClock;
var routineTimer;
function experimentInit() {
  var h = window.screen.height;
  var w = window.screen.width;
  var textWrapWidth = percentWidth*w/h; 
  //textWrapWidth is a value in height units (one height unit is the height of the screen)

  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: textWrapWidth, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  end_instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BreathCounting"
  BreathCountingClock = new util.Clock();
  brth_responses = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  task_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'during_task_instr',
    text: during_task_instr, //lists all key presses
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: textWrapWidth, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });

  warningText = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningText',
    text: warn_text, //has the warning string: 'Please remember to ...'
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: textWrapWidth, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  quit_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SurveyInst" (instructions before survey begins)
  SurveyInstClock = new util.Clock();
  SurveyInstrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'SurveyInstrText',
    text: completion_text, //third cell in spreadsheet has string thanking participants for completing
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: textWrapWidth, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
    // Initialize components for Routine "question"
  questionClock = new util.Clock();
  questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: textWrapWidth, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  answer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'answer_text',
    text: '', //string response is recorded for each question depending what the subject types in
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: textWrapWidth, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });

  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var instrtrials;
var currentLoop;
function instrtrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  instrtrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: instructionList,
    seed: undefined, name: 'instrtrials'
  });
  psychoJS.experiment.addLoop(instrtrials); // add the loop to the experiment
  currentLoop = instrtrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisInstrtrial of instrtrials) {
    const snapshot = instrtrials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(InstructionsRoutineBegin(snapshot));
    thisScheduler.add(InstructionsRoutineEachFrame(snapshot));
    thisScheduler.add(InstructionsRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function instrtrialsLoopEnd() {
  psychoJS.experiment.removeLoop(instrtrials);

  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var InstructionsComponents;
var _end_instr_resp_allKeys;
function InstructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    end_instr_resp.keys = undefined;
    end_instr_resp.rt = undefined;
    _end_instr_resp_allKeys = [];

    instr_text.setText(instr); //every iteration of loop resets the text element in instr_text
    if(instr_text.text.length>750){ //if there are more than 750 characters, the height is reduced
      instr_text.setHeight(0.03);
    } else {
      instr_text.setHeight(0.05);
    }

    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(instr_text);
    InstructionsComponents.push(end_instr_resp);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function InstructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }

    
    // *end_instr_resp* updates
    if (t >= 0.0 && end_instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_resp.tStart = t;  // (not accounting for frame time here)
      end_instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_resp.clearEvents(); });
    }

    if (end_instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_resp.getKeys({keyList: [must_press], waitRelease: false});
      _end_instr_resp_allKeys = _end_instr_resp_allKeys.concat(theseKeys);
      if (_end_instr_resp_allKeys.length > 0) {
        end_instr_resp.keys = _end_instr_resp_allKeys[_end_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        end_instr_resp.rt = _end_instr_resp_allKeys[_end_instr_resp_allKeys.length - 1].rt;
        // a response ends the routine - if space is pressed, move onto next trial 
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
    for (const thisComponent of InstructionsComponents)
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


function InstructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions'-------
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    end_instr_resp.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}



var _brth_responses_allKeys;
var _quit_resp_allKeys;
var BreathCountingComponents;
function BreathCountingRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'BreathCounting'-------
    t = 0;
    BreathCountingClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    brth_responses.keys = [];
    brth_responses.rt = [];
    _brth_responses_allKeys = [];
    quit_resp.keys = undefined;
    quit_resp.rt = undefined;
    _quit_resp_allKeys = [];
    // keep track of which components have finished
    BreathCountingComponents = [];
    BreathCountingComponents.push(brth_responses);
    BreathCountingComponents.push(task_instr);
    BreathCountingComponents.push(warningText);
    BreathCountingComponents.push(quit_resp);
    
    for (const thisComponent of BreathCountingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

var forced_end_flag = false; //keeps track of if participant ended early
var frameRemains;
function BreathCountingRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'BreathCounting'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = BreathCountingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *brth_responses* updates
    if (t >= 0.0 && brth_responses.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      brth_responses.tStart = t;  // (not accounting for frame time here)
      brth_responses.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { brth_responses.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { brth_responses.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { brth_responses.clearEvents(); });
    }

    frameRemains = 0.0 + 1200 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (brth_responses.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      brth_responses.status = PsychoJS.Status.FINISHED;
    }

    if (brth_responses.status === PsychoJS.Status.STARTED) {
      let theseKeys = brth_responses.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _brth_responses_allKeys = _brth_responses_allKeys.concat(theseKeys);
      if (_brth_responses_allKeys.length > 0) {
        brth_responses.keys = _brth_responses_allKeys.map((key) => key.name);  // storing all keys
        brth_responses.rt = _brth_responses_allKeys.map((key) => key.rt);
      }
    }
    
    // *task_instr* updates
    if (t >= 0.0 && task_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_instr.tStart = t;  // (not accounting for frame time here)
      task_instr.frameNStart = frameN;  // exact frame index
      
      task_instr.setAutoDraw(true);
    }
    
    // *warningText* updates
    if ((warningText.status === PsychoJS.Status.NOT_STARTED || warningText.status === PsychoJS.Status.STOPPED) && ((brth_responses.rt.length > 0 && t>=warnTime+brth_responses.rt[brth_responses.rt.length-1]) || (brth_responses.rt.length === 0 && t>=warnTime))) {
      //this conditional checks to see if it has been greater than 10 seconds since a button has been pressed. it also makes sure that the warningText isn't currently on the screen (status is NOT_STARTED or STOPPED)
      // keep track of start time/frame for later
      warningText.tStart = t;  // (not accounting for frame time here)
      warningText.frameNStart = frameN;  // exact frame index
      
      warningText.setAutoDraw(true);
    }

    if ((warningText.status === PsychoJS.Status.STARTED) && (brth_responses.rt.length > 0 && t<warnTime+brth_responses.rt[brth_responses.rt.length-1])) {
      //if the warning text is on the screen and the participant responds it will go away
      warningText.setAutoDraw(false);
    }
    


    // *quit_resp* updates
    if (t >= 0.0 && quit_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quit_resp.tStart = t;  // (not accounting for frame time here)
      quit_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { quit_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { quit_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { quit_resp.clearEvents(); });
    }

    if (quit_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = quit_resp.getKeys({keyList: ['q'], waitRelease: false});
      _quit_resp_allKeys = _quit_resp_allKeys.concat(theseKeys);
      if (_quit_resp_allKeys.length > 0) {
        quit_resp.keys = _quit_resp_allKeys[_quit_resp_allKeys.length - 1].name;  // just the last key pressed
        quit_resp.rt = _quit_resp_allKeys[_quit_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
        forced_end_flag = true; //this flag changes the text displayed in the SurveyInstrRoutine
      }
    }


    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0)    {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine || t >= frameRemains) {  // a component has requested a forced-end of Routine (or time has exceeded)
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BreathCountingComponents)
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


function BreathCountingRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'BreathCounting'-------
    for (const thisComponent of BreathCountingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('brth_responses.keys', brth_responses.keys);//saves the keys that were pressed
    if (typeof brth_responses.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('brth_responses.rt', brth_responses.rt); //saves the times that keys were pressed (relative to start to routine)
        }
    
    brth_responses.stop();
    psychoJS.experiment.addData('quit_resp.keys', quit_resp.keys);
    if (typeof quit_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('quit_resp.rt', quit_resp.rt);
        routineTimer.reset();
        }
    
    quit_resp.stop();
    // the Routine "BreathCounting" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _end_instr_resp_allKeys;
var SurveyInstComponents;
function SurveyInstRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SurveyInst'-------
    t = 0;
    SurveyInstClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    end_instr_resp.keys = undefined;
    end_instr_resp.rt = undefined;
    _end_instr_resp_allKeys = [];
    if(forced_end_flag){
      SurveyInstrText.setText(quit_early_text); //this text is thanks the participant but also says the the experiment ended early
    }

    // keep track of which components have finished
    SurveyInstComponents = [];
    SurveyInstComponents.push(SurveyInstrText);
    SurveyInstComponents.push(end_instr_resp);
    
    for (const thisComponent of SurveyInstComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function SurveyInstRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SurveyInst'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SurveyInstClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SurveyInstrText* updates
    if (t >= 0.0 && SurveyInstrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SurveyInstrText.tStart = t;  // (not accounting for frame time here)
      SurveyInstrText.frameNStart = frameN;  // exact frame index
      
      SurveyInstrText.setAutoDraw(true);
    }

    
    // *end_instr_resp* updates
    if (t >= 0.0 && end_instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_resp.tStart = t;  // (not accounting for frame time here)
      end_instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_resp.clearEvents(); });
    }

    if (end_instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_resp.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_resp_allKeys = _end_instr_resp_allKeys.concat(theseKeys);
      if (_end_instr_resp_allKeys.length > 0) {
        end_instr_resp.keys = _end_instr_resp_allKeys[_end_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        end_instr_resp.rt = _end_instr_resp_allKeys[_end_instr_resp_allKeys.length - 1].rt;
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
    for (const thisComponent of SurveyInstComponents)
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


function SurveyInstRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SurveyInst'-------
    for (const thisComponent of SurveyInstComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    end_instr_resp.stop();
    // the Routine "SurveyInst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var qtrials;
var currentLoop;
function qtrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  qtrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: questionList,
    seed: undefined, name: 'qtrials'
  });
  psychoJS.experiment.addLoop(qtrials); // add the loop to the experiment
  currentLoop = qtrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisQtrial of qtrials) {
    const snapshot = qtrials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(questionRoutineBegin(snapshot));
    thisScheduler.add(questionRoutineEachFrame(snapshot));
    thisScheduler.add(questionRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function qtrialsLoopEnd() {
  psychoJS.experiment.removeLoop(qtrials);

  return Scheduler.Event.NEXT;
}

var modify; //keeps track if shift is used (only changes subsequent character then turns off)
var capsLock; //keeps track if caplock is on
var questionComponents;
function questionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'question'-------
    t = 0;
    questionClock.reset(); // clock
    frameN = -1;
    modify = false;
    capsLock = false; //assumes that participant doesn't have caplocks on initially
    questionText.setText(prompt);
    answer_text.setText('');
    // update component parameters for each repeat
    // keep track of which components have finished
    questionComponents = [];
    questionComponents.push(questionText);
    questionComponents.push(answer_text);
    
    for (const thisComponent of questionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

var addText;
function questionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'question'-------
    continueRoutine = true; // until we're told otherwise (when return is pressed)
    // get current time
    t = questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *questionText* updates
    if (t >= 0.0 && questionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionText.tStart = t;  // (not accounting for frame time here)
      questionText.frameNStart = frameN;  // exact frame index
      
      questionText.setAutoDraw(true);
    }

    typer(answer_text); //typer is a function that modifies the answer_text.text depending on the keyboard responses - scroll to the bottom of this script to see how it works

    // *answer_text* updates
    if (t >= 0.0 && answer_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_text.tStart = t;  // (not accounting for frame time here)
      answer_text.frameNStart = frameN;  // exact frame index
      
      answer_text.setAutoDraw(true);
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
    for (const thisComponent of questionComponents)
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


function questionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'question'-------
    for (const thisComponent of questionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //save all questions and answers in spreadsheet
    psychoJS.experiment.addData('Question',questionText.text);
    psychoJS.experiment.addData('Answer',answer_text.text);
    // the Routine "question" was not non-slip safe, so reset the non-slip timer
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


function typer(textObject){
  let theseKeys = psychoJS.eventManager.getKeys(); //get the most recent keypress

  if (theseKeys.length > 0) {  // at least one key was pressed
    addText = theseKeys[theseKeys.length-1]; 
  }

  if (addText === 'return') {
    addText = '';  // Add nothing
    continueRoutine = false;  // End routine
  } else if (addText === 'space') {
    addText = ' ';  // Add a space
  } else if (addText === 'backspace') {
    textObject.text = textObject.text.slice(0, -1);
    addText = undefined;
  } else if (addText === 'lcontrol') {
    addText = ''; //Add nothing
  } else if (addText === 'rcontrol') {
    addText = ''; //Add nothing
  } else if (addText === 'lcommand') {
    addText = ''; //Add nothing
  } else if (addText === 'loption') {
    addText = ''; //Add nothing
  } else if (addText === 'roption') {
    addText = ''; //Add nothing
  } else if (addText === 'left') {
    addText = ''; //Add nothing
  } else if (addText === 'right') {
    addText = ''; //Add nothing
  } else if (addText === 'up') {
    addText = ''; //Add nothing
  } else if (addText === 'down') {
    addText = ''; //Add nothing
  } else if (addText === 'tab') {
    addText = '\t'; 
  } else if (addText === 'apostrophe') {
    addText = "'";
  } else if (addText === 'comma') {
    addText = ",";
  } else if (addText === 'period') {
    addText = ".";
  } else if (addText === 'semicolon') {
    addText = ";";
  } else if (addText === 'backslash') {
    addText = '\\'; //shows up as \
  } else if (addText === 'slash') {
    addText = "/";
  } else if (addText === 'grave') {
    addText = "`";
  } else if (addText === 'equal') {
    addText = "=";
  } else if (addText === 'minus') {
    addText = "-";
  } else if (addText === 'bracketleft') {
    addText = "[";
  } else if (addText === 'bracketright') {
    addText = "]";
  } else if (['lshift', 'rshift'].includes(addText)) {
    modify = true; //will modify the next character is pressed
  } else if(addText==='capslock'){ 
    capsLock = !capsLock; //if caplock is pressed the state switches
    addText = '';  //nothing added
  } else if (addText !== undefined) {
    var shiftKeyList = [',','.',';','\\','|','/','`','[',']','1','2','3','4','5','6','7','8','9','0','=','-']; //non-alphabet characters accessed through the shift key (when modify is true)
    if (modify !== capsLock && !shiftKeyList.includes(addText)) {      
      textObject.text = textObject.text + addText.toUpperCase(); //alphabetic characters become uppercase with shift
      modify = false;  
    } else {
      if (modify && shiftKeyList.includes(addText)){
        shiftKeys(addText); //shift key function is called to switch addText to shift-key equivalent character
      }
      textObject.text = textObject.text + addText;
      modify = false; 
    }
    addText = undefined;
  }
}


function shiftKeys(key){
  if (key === ","){
    addText = '<';
  } else if (key === "'"){
    addText = '"';
  } else if (key === "."){
    addText = '>';
  } else if (key === ";"){
    addText = ':';
  } else if (key === "\\"){
    addText = '|';
  } else if (key === "/"){
    addText = '?';
  } else if (key === "`"){
    addText = '~';
  } else if (key === "["){
    addText = '{';
  } else if (key === "]"){
    addText = '}';
  } else if (key === "1"){
    addText = '!';
  } else if (key === "2"){
    addText = '@';
  } else if (key === "3"){
    addText = '#';
  } else if (key === "4"){
    addText = '$';
  } else if (key === "5"){
    addText = '%';
  } else if (key === "6"){
    addText = '^';
  } else if (key === "7"){
    addText = '&';
  } else if (key === "8"){
    addText = '*';
  } else if (key === "9"){
    addText = '(';
  } else if (key === "0"){
    addText = ')';
  } else if (key === "="){
    addText = '+';
  } else if (key === "-"){
    addText === '_';
  }
}


function importSpreadsheetText(data) {
    var allRows = data.split('\n'); // split rows at new line
    var headings = allRows[0].split(';');
    var key_index = headings.indexOf('keys');
    var text_index = headings.indexOf('text_elements');
    var must_press_index = headings.indexOf('must_press');
    for (let i=1; i<allRows.length; i++) {
      var strtok = allRows[i].split(';');
      for(let j=0;j<strtok.length;j++){
        strtok[j] = strtok[j].replace(/"/g,'');
        strtok[j]=strtok[j].replace(/~/g,'\n'); //*note to use tildas in .csv file to indicate newline (\n doesn't parse properly)
      }
      if(strtok[key_index]==="instr_demo"){
        let params = {instr: strtok[text_index], must_press: strtok[must_press_index]};
        instructionList.push(params);
      } else if(strtok[key_index]==="end_question"){
        let params = {prompt: strtok[text_index]};
        questionList.push(params);
      } else {
        window[strtok[key_index]]=strtok[text_index];
      }
    }
}