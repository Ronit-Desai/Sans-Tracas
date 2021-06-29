/******************** 
 * Masks&Faces Test *
 ********************/

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
let expName = 'Effects of Varying Facial Region Visibility on Perception';  
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
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
flowScheduler.add(Pre_Virtual_Chin_RestRoutineBegin());
flowScheduler.add(Pre_Virtual_Chin_RestRoutineEachFrame());
flowScheduler.add(Pre_Virtual_Chin_RestRoutineEnd());
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
flowScheduler.add(Post_Virtual_Chin_RestRoutineBegin());
flowScheduler.add(Post_Virtual_Chin_RestRoutineEachFrame());
flowScheduler.add(Post_Virtual_Chin_RestRoutineEnd());
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(Instructions_2RoutineBegin());
flowScheduler.add(Instructions_2RoutineEachFrame());
flowScheduler.add(Instructions_2RoutineEnd());
const Face1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Face1LoopBegin, Face1LoopScheduler);
flowScheduler.add(Face1LoopScheduler);
flowScheduler.add(Face1LoopEnd);
const Face2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Face2LoopBegin, Face2LoopScheduler);
flowScheduler.add(Face2LoopScheduler);
flowScheduler.add(Face2LoopEnd);
flowScheduler.add(Instructions_5RoutineBegin());
flowScheduler.add(Instructions_5RoutineEachFrame());
flowScheduler.add(Instructions_5RoutineEnd());
flowScheduler.add(Instructions_6RoutineBegin());
flowScheduler.add(Instructions_6RoutineEachFrame());
flowScheduler.add(Instructions_6RoutineEnd());
flowScheduler.add(Instructions_7RoutineBegin());
flowScheduler.add(Instructions_7RoutineEachFrame());
flowScheduler.add(Instructions_7RoutineEnd());
flowScheduler.add(Instructions_8RoutineBegin());
flowScheduler.add(Instructions_8RoutineEachFrame());
flowScheduler.add(Instructions_8RoutineEnd());
const LearnUpLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(LearnUpLoopBegin, LearnUpLoopScheduler);
flowScheduler.add(LearnUpLoopScheduler);
flowScheduler.add(LearnUpLoopEnd);
const LearnInLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(LearnInLoopBegin, LearnInLoopScheduler);
flowScheduler.add(LearnInLoopScheduler);
flowScheduler.add(LearnInLoopEnd);
flowScheduler.add(Pre_ExperimentRoutineBegin());
flowScheduler.add(Pre_ExperimentRoutineEachFrame());
flowScheduler.add(Pre_ExperimentRoutineEnd());
const ExperimentUpLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ExperimentUpLoopBegin, ExperimentUpLoopScheduler);
flowScheduler.add(ExperimentUpLoopScheduler);
flowScheduler.add(ExperimentUpLoopEnd);
const ExperimentInLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ExperimentInLoopBegin, ExperimentInLoopScheduler);
flowScheduler.add(ExperimentInLoopScheduler);
flowScheduler.add(ExperimentInLoopEnd);
flowScheduler.add(DebreifingRoutineBegin());
flowScheduler.add(DebreifingRoutineEachFrame());
flowScheduler.add(DebreifingRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/m5.png', 'path': 'images/m5.png'},
    {'name': 'images/f3.png', 'path': 'images/f3.png'},
    {'name': 'images/f3 blur.png', 'path': 'images/f3 blur.png'},
    {'name': 'images/f5 blur.png', 'path': 'images/f5 blur.png'},
    {'name': 'Option.Test.Up.A.xlsx', 'path': 'Option.Test.Up.A.xlsx'},
    {'name': 'images/m3 mask.png', 'path': 'images/m3 mask.png'},
    {'name': 'images/Af4 blurIn.png', 'path': 'images/Af4 blurIn.png'},
    {'name': 'images/m2 mask.png', 'path': 'images/m2 mask.png'},
    {'name': 'Option.Up.A.xlsx', 'path': 'Option.Up.A.xlsx'},
    {'name': 'images/f5In.png', 'path': 'images/f5In.png'},
    {'name': 'images/f4 maskIn.png', 'path': 'images/f4 maskIn.png'},
    {'name': 'images/Af1.png', 'path': 'images/Af1.png'},
    {'name': 'images/f4 blurIn.png', 'path': 'images/f4 blurIn.png'},
    {'name': 'images/m2 maskIn.png', 'path': 'images/m2 maskIn.png'},
    {'name': 'image.1.A.xlsx', 'path': 'image.1.A.xlsx'},
    {'name': 'Option.Test.Up.C.xlsx', 'path': 'Option.Test.Up.C.xlsx'},
    {'name': 'images/m1 blurIn.png', 'path': 'images/m1 blurIn.png'},
    {'name': 'images/m5 blurIn.png', 'path': 'images/m5 blurIn.png'},
    {'name': 'images/f4 mask.png', 'path': 'images/f4 mask.png'},
    {'name': 'image.1.B.xlsx', 'path': 'image.1.B.xlsx'},
    {'name': 'images/m5 mask.png', 'path': 'images/m5 mask.png'},
    {'name': 'image.2.B.xlsx', 'path': 'image.2.B.xlsx'},
    {'name': 'images/Af2In.png', 'path': 'images/Af2In.png'},
    {'name': 'images/Af1In.png', 'path': 'images/Af1In.png'},
    {'name': 'images/m3 blur.png', 'path': 'images/m3 blur.png'},
    {'name': 'images/m1.png', 'path': 'images/m1.png'},
    {'name': 'images/Af3.png', 'path': 'images/Af3.png'},
    {'name': 'Option.In.C.xlsx', 'path': 'Option.In.C.xlsx'},
    {'name': 'image.2.C.xlsx', 'path': 'image.2.C.xlsx'},
    {'name': 'images/Af1 blur.png', 'path': 'images/Af1 blur.png'},
    {'name': 'images/f3In.png', 'path': 'images/f3In.png'},
    {'name': 'images/m1 maskIn.png', 'path': 'images/m1 maskIn.png'},
    {'name': 'images/f1 blurIn.png', 'path': 'images/f1 blurIn.png'},
    {'name': 'images/m5In.png', 'path': 'images/m5In.png'},
    {'name': 'images/f1 mask.png', 'path': 'images/f1 mask.png'},
    {'name': 'images/Af5.png', 'path': 'images/Af5.png'},
    {'name': 'images/m1 blur.png', 'path': 'images/m1 blur.png'},
    {'name': 'images/m3 blurIn.png', 'path': 'images/m3 blurIn.png'},
    {'name': 'images/Af5 blurIn.png', 'path': 'images/Af5 blurIn.png'},
    {'name': 'images/Af4 mask.png', 'path': 'images/Af4 mask.png'},
    {'name': 'images/f4.png', 'path': 'images/f4.png'},
    {'name': 'images/f4 blur.png', 'path': 'images/f4 blur.png'},
    {'name': 'images/f3 mask.png', 'path': 'images/f3 mask.png'},
    {'name': 'images/Af3 blur.png', 'path': 'images/Af3 blur.png'},
    {'name': 'images/Af5 mask.png', 'path': 'images/Af5 mask.png'},
    {'name': 'images/Af5In.png', 'path': 'images/Af5In.png'},
    {'name': 'images/m4 blur.png', 'path': 'images/m4 blur.png'},
    {'name': 'images/Af4.png', 'path': 'images/Af4.png'},
    {'name': 'images/Af2.png', 'path': 'images/Af2.png'},
    {'name': 'images/Af1 blurIn.png', 'path': 'images/Af1 blurIn.png'},
    {'name': 'Option.Test.In.B.xlsx', 'path': 'Option.Test.In.B.xlsx'},
    {'name': 'images/Af4In.png', 'path': 'images/Af4In.png'},
    {'name': 'images/Af3In.png', 'path': 'images/Af3In.png'},
    {'name': 'images/Af2 mask.png', 'path': 'images/Af2 mask.png'},
    {'name': 'images/m3.png', 'path': 'images/m3.png'},
    {'name': 'images/f2 mask.png', 'path': 'images/f2 mask.png'},
    {'name': 'images/f2 maskIn.png', 'path': 'images/f2 maskIn.png'},
    {'name': 'images/m3 maskIn.png', 'path': 'images/m3 maskIn.png'},
    {'name': 'image.1.C.xlsx', 'path': 'image.1.C.xlsx'},
    {'name': 'images/Af1 mask.png', 'path': 'images/Af1 mask.png'},
    {'name': 'images/f5 mask.png', 'path': 'images/f5 mask.png'},
    {'name': 'Option.In.A.xlsx', 'path': 'Option.In.A.xlsx'},
    {'name': 'images/f4In.png', 'path': 'images/f4In.png'},
    {'name': 'images/Af1 maskIn.png', 'path': 'images/Af1 maskIn.png'},
    {'name': 'Option.Up.B.xlsx', 'path': 'Option.Up.B.xlsx'},
    {'name': 'images/m4 maskIn.png', 'path': 'images/m4 maskIn.png'},
    {'name': 'images/m3In.png', 'path': 'images/m3In.png'},
    {'name': 'images/m4 mask.png', 'path': 'images/m4 mask.png'},
    {'name': 'images/Af3 mask.png', 'path': 'images/Af3 mask.png'},
    {'name': 'images/f1 blur.png', 'path': 'images/f1 blur.png'},
    {'name': 'images/m1 mask.png', 'path': 'images/m1 mask.png'},
    {'name': 'images/m5 maskIn.png', 'path': 'images/m5 maskIn.png'},
    {'name': 'images/f5 maskIn.png', 'path': 'images/f5 maskIn.png'},
    {'name': 'images/Af5 blur.png', 'path': 'images/Af5 blur.png'},
    {'name': 'images/m1In.png', 'path': 'images/m1In.png'},
    {'name': 'images/Af2 maskIn.png', 'path': 'images/Af2 maskIn.png'},
    {'name': 'images/m2 blur.png', 'path': 'images/m2 blur.png'},
    {'name': 'images/f5 blurIn.png', 'path': 'images/f5 blurIn.png'},
    {'name': 'images/f1.png', 'path': 'images/f1.png'},
    {'name': 'images/m2 blurIn.png', 'path': 'images/m2 blurIn.png'},
    {'name': 'images/Af4 maskIn.png', 'path': 'images/Af4 maskIn.png'},
    {'name': 'images/f2In.png', 'path': 'images/f2In.png'},
    {'name': 'images/f1In.png', 'path': 'images/f1In.png'},
    {'name': 'images/m4.png', 'path': 'images/m4.png'},
    {'name': 'images/Af5 maskIn.png', 'path': 'images/Af5 maskIn.png'},
    {'name': 'images/image12.B.png', 'path': 'images/image12.B.png'},
    {'name': 'images/m5 blur.png', 'path': 'images/m5 blur.png'},
    {'name': 'images/Af3 maskIn.png', 'path': 'images/Af3 maskIn.png'},
    {'name': 'Option.Test.In.C.xlsx', 'path': 'Option.Test.In.C.xlsx'},
    {'name': 'image.2.A.xlsx', 'path': 'image.2.A.xlsx'},
    {'name': 'images/image12.A.png', 'path': 'images/image12.A.png'},
    {'name': 'images/Af2 blurIn.png', 'path': 'images/Af2 blurIn.png'},
    {'name': 'Option.In.B.xlsx', 'path': 'Option.In.B.xlsx'},
    {'name': 'Option.Test.Up.B.xlsx', 'path': 'Option.Test.Up.B.xlsx'},
    {'name': 'images/Af4 blur.png', 'path': 'images/Af4 blur.png'},
    {'name': 'images/m4In.png', 'path': 'images/m4In.png'},
    {'name': 'images/f3 maskIn.png', 'path': 'images/f3 maskIn.png'},
    {'name': 'Option.Test.In.A.xlsx', 'path': 'Option.Test.In.A.xlsx'},
    {'name': 'images/m4 blurIn.png', 'path': 'images/m4 blurIn.png'},
    {'name': 'images/Af3 blurIn.png', 'path': 'images/Af3 blurIn.png'},
    {'name': 'images/f3 blurIn.png', 'path': 'images/f3 blurIn.png'},
    {'name': 'images/f2.png', 'path': 'images/f2.png'},
    {'name': 'images/f2 blur.png', 'path': 'images/f2 blur.png'},
    {'name': 'images/fixation.png', 'path': 'images/fixation.png'},
    {'name': 'Option.Up.C.xlsx', 'path': 'Option.Up.C.xlsx'},
    {'name': 'images/f1 maskIn.png', 'path': 'images/f1 maskIn.png'},
    {'name': 'images/m2In.png', 'path': 'images/m2In.png'},
    {'name': 'images/f5.png', 'path': 'images/f5.png'},
    {'name': 'images/image12.C.png', 'path': 'images/image12.C.png'},
    {'name': 'images/Af2 blur.png', 'path': 'images/Af2 blur.png'},
    {'name': 'images/f2 blurIn.png', 'path': 'images/f2 blurIn.png'},
    {'name': 'images/m2.png', 'path': 'images/m2.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.8';
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


var Pre_Virtual_Chin_RestClock;
var text;
var mouse;
var Instructions_CreditCard_Clock;
var instr_text;
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
var Post_Virtual_Chin_RestClock;
var mouse_2;
var text_2;
var InstructionsClock;
var mouse_3;
var text_3;
var Instructions_2Clock;
var mouse_4;
var text_4;
var Instructions_3Clock;
var mouse_5;
var text_5;
var image_6;
var Instructions_4Clock;
var mouse_6;
var text_6;
var image_7;
var Instructions_5Clock;
var mouse_7;
var text_7;
var Instructions_6Clock;
var mouse_8;
var text_8;
var Instructions_7Clock;
var mouse_9;
var text_9;
var Instructions_8Clock;
var mouse_10;
var text_10;
var trial2Clock;
var image_dot;
var image;
var trialClock;
var image_1;
var image_2;
var image_3;
var image_4;
var image_5;
var resp;
var Pre_ExperimentClock;
var mouse_11;
var text_11;
var DebreifingClock;
var mouse_13;
var text_13;
var globalClock;
var routineTimer;
function experimentInit() {
  var percentWidth = 0.9; //the percent width of the screen that the text will fill up before wrapping around
  var h = window.screen.height; 
  var w = window.screen.width;
  var textWrapWidth = percentWidth*w/h;
  var widthDimPix = w*0.4; //the fixation square and red dot will be set off center (right) by 40% of the screen width

  // Initialize components for Routine "Pre_Virtual_Chin_Rest"
  Pre_Virtual_Chin_RestClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Prior to the experiment you will complete two short pre exercizes. \n(Click anywhere to continue)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  
  // Initialize components for Routine "Instructions_CreditCard_"
  Instructions_CreditCard_Clock = new util.Clock();
  //instructions for the credit card task
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: "Please use any credit card, driver’s license, or card of the same size that you have available.\n Hold the card against the screen and adjust the rectangle to match the card’s size.\n\nTo increase the height of the rectangle, press the ‘up’ arrow key. To decrease the height, press ‘down’ arrow key.\nTo increase the width, press the ‘left’ key. To decrease the width, press the ‘right’ key.\n\n(If you don't have access to a real card, you can use a ruler to ensure the image width is 3.37inches or 85.6mm.)\n\n Make sure you put the card against your screen.\n\nPress the space bar to continue.",
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
  
    //instructions displayed on the screen while doing the task
  modify_size_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'modify_size_text',
    text: "To increase height press ‘up’ to decrease height press ‘down’.\nTo increase width press ‘left’ to decrease width press ‘right’.\nClick the space bar when you are satisfied that the size of the rectangle matches that of the card.\n",
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
    text: 'Instructions \n\n1. Put your finger on space bar on the keyboard.\n\n2. Close your right eye. (Tip: it might be easier to cover your right eye by hand!)\n\n3. Using your left eye, keep your focus on the black square that will appear on the right-hand side.\n\n4. A red ball will disappear as it moves away from the black square (be sure to keep looking at the black square while the red ball moves).\nPress the space bar as soon as the ball disappears from your eyesight. \n\nThis will repeat eight times. Keep your right eye closed and hit the space bar key as fast as you can when the ball disappears!\n\n To start the task, press the space bar.',
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
    ori: 0, pos: [widthDimPix, 0],
    lineWidth: 1, lineColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    fillColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  fixateSquare = new visual.Rect ({
    win: psychoJS.window, name: 'fixateSquare', units : 'pix', 
    width: [20, 20][0], height: [20, 20][1],
    ori: 0, pos: [widthDimPix, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "Post_Virtual_Chin_Rest"
  Post_Virtual_Chin_RestClock = new util.Clock();
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Thank you for completing the short exercises. Now on to the experiment. \n(Click anywhere to continue)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Please wear the eyeglasses or corrective lenses that you feel are best for this viewing distance. \n\n(Click anywhere to continue). ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instructions_2"
  Instructions_2Clock = new util.Clock();
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'For this experiment, we are investigating face perception. On each trial, you will first be shown a single face, and then asked to select that face from within a small set that appears afterwards. \n\n\n\n(Click anywhere to continue).  \n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instructions_3"
  Instructions_3Clock = new util.Clock();
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Each trial will begin with a black dot in the middle of the screen. Look at the dot: this is the location where the target face will then be shown.\n\n\n\n(Click anywhere to continue).  \n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.3)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Instructions_4"
  Instructions_4Clock = new util.Clock();
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'The target face will appear briefly, then automatically replaced with a small set of faces.\n\n(Click anywhere to continue). \n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.2)], size : [0.35, 0.34],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Instructions_5"
  Instructions_5Clock = new util.Clock();
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Once the small set of faces appears, select the face that matches the identity of the target face you just saw. To make your choice, simply click on the face. Typically, this process takes only one to two seconds, although sometimes it may take longer. The goal is to be accurate in your choice.\n\n\n\n(Click anywhere to continue). \n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instructions_6"
  Instructions_6Clock = new util.Clock();
  mouse_8 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_8.mouseClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'If for any reason you need a break; feel free to step away when the small set of faces appears before making your choice. To continue the experiment, simply make your choice. \n\n\n\n(Click anywhere to continue). \n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instructions_7"
  Instructions_7Clock = new util.Clock();
  mouse_9 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_9.mouseClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'If, however, you would like to exit the experiment before it ends, without completing the task, then close the window you are using. This will end the experiment and your data will not be used. \n\n\n\n(Click anywhere to continue).\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instructions_8"
  Instructions_8Clock = new util.Clock();
  mouse_10 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_10.mouseClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Before starting the actual experiment, you will first complete ten practice trials. \n\n\n\nTo begin, click anywhere on the screen. \n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trial2"
  trial2Clock = new util.Clock();
  image_dot = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_dot', units : undefined, 
    image : 'images/fixation.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  resp = new core.Mouse({
    win: psychoJS.window,
  });
  resp.mouseClock = new util.Clock();
  // Initialize components for Routine "trial2"
  trial2Clock = new util.Clock();
  image_dot = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_dot', units : undefined, 
    image : 'images/fixation.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  resp = new core.Mouse({
    win: psychoJS.window,
  });
  resp.mouseClock = new util.Clock();
  // Initialize components for Routine "Pre_Experiment"
  Pre_ExperimentClock = new util.Clock();
  mouse_11 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_11.mouseClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'You have completed the practice trials. \n\n\n\nClick anywhere on the screen to begin the experiment.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trial2"
  trial2Clock = new util.Clock();
  image_dot = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_dot', units : undefined, 
    image : 'images/fixation.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  resp = new core.Mouse({
    win: psychoJS.window,
  });
  resp.mouseClock = new util.Clock();
  // Initialize components for Routine "trial2"
  trial2Clock = new util.Clock();
  image_dot = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_dot', units : undefined, 
    image : 'images/fixation.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  resp = new core.Mouse({
    win: psychoJS.window,
  });
  resp.mouseClock = new util.Clock();
  // Initialize components for Routine "Debreifing"
  DebreifingClock = new util.Clock();
  mouse_13 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_13.mouseClock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'Debriefing\n\nThank you for your participation!\n\nFacial processing and facial recognition are both necessary for our daily social interactions. With masks becoming a mandatory part of life, the question arises of how they affect the way we see faces. Facial processing can be separated into many different aspects, two being facial memory and facial perception. Recent studies have found that facial memory seems to be significantly affected by masks. This information, however, does not explain masks effect on perception. Facial perception speaks specifically to the initial processes to depict facial properties. These properties include such things as facial features (eyes, mouth, nose), and individualistic spots that vary from person to person. This experiment wanted to investigate perception and how masks may hinder that within a wide range of populations.\n\nUnlike face memory, we think masks may not hinder facial perception to the extent previously thought. During face perception, people attend mostly to the eye regions of the face. As masks only cover the nose and mouth, it is possible the apparent deficit in face processing may not be due to perception. We hope to answer some of the questions posed, and better understand how masks affect this one aspect of face processing, face perception.\n\nIf you require any further information regarding this research project or your participation in the study, you may contact Jamie Cochrane (cochrj1@mcmaster.ca). If you have any questions about your rights as a research participant or the conduct of this study, you may contact the McMaster Research Ethics Board (MREB) at 905-525-9140, ext. 23142, or email at (srebsec@mcmaster.ca).\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _end_instr_allKeys;
var gotValidClick;
function random_character() {
    var chars = "ABC";
    return chars.substr( Math.floor(Math.random() * 3), 1);
}
var condition = random_character();
var Pre_Virtual_Chin_RestComponents;
function Pre_Virtual_Chin_RestRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Pre_Virtual_Chin_Rest'-------
    t = 0;
    Pre_Virtual_Chin_RestClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Pre_Virtual_Chin_RestComponents = [];
    Pre_Virtual_Chin_RestComponents.push(text);
    Pre_Virtual_Chin_RestComponents.push(mouse);
    
    for (const thisComponent of Pre_Virtual_Chin_RestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var prevButtonState;
var _mouseButtons;
var continueRoutine;
function Pre_Virtual_Chin_RestRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Pre_Virtual_Chin_Rest'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Pre_Virtual_Chin_RestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
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
    for (const thisComponent of Pre_Virtual_Chin_RestComponents)
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


function Pre_Virtual_Chin_RestRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Pre_Virtual_Chin_Rest'-------
    for (const thisComponent of Pre_Virtual_Chin_RestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Pre_Virtual_Chin_Rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

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
    Instructions_CreditCard_Components.push(instr_text);
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
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
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
        if (key.name === 'up'){ //increase height if up key is pressed
          creditCard.setSize([w,h+10]);
        }
        else if (key.name === 'down'){ //decrease height if down key is pressed
          creditCard.setSize([w,h-10]);
        }
        else if (key.name === 'left'){ //increase width if left key is pressed
          creditCard.setSize([w+15.85,h]);
        }
        else if (key.name === 'right'){ //decrease height if right key is pressed
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
    var CC_cm = 8.56; 
    var w = window.screen.width;
    var start_pos = w*0.4;
    var distanceToLeftMargin_pix = start_pos*2.25; 
    var distanceToLeftMargin_cm = distanceToLeftMargin_pix*CC_cm/creditCard.size[0];
    var stop_time = (distanceToLeftMargin_cm+3)/1.5;
    //need the above calcs to input stop_time into routineTimer

    //------Prepare to start Routine 'movingDotTrial'-------
    document.body.style.cursor='none';
    t = 0;
    movingDotTrialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(stop_time); 
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
var times_list = []; //use this list for calculating an average time (when implementing with another experiment -use average value to calculate distance_across)
function movingDotTrialRoutineEachFrame(trials) {
  return function () {
    var CC_cm = 8.56; 
    var w = window.screen.width;
    var start_pos = w*0.4;
    var distanceToLeftMargin_pix = start_pos*2.25; 
    //speedModify is a multiplier to maintain speed at 1.5 cm/s (repeat calcs from before)  
   //creditCard.size[0] is the credit card width in pixels
    var speedModify = (creditCard.size[0]/creditCardWidthCm)/40; 
    var distanceToLeftMargin_cm = distanceToLeftMargin_pix*creditCardWidthCm/creditCard.size[0];
    //routine will stop 3 cm after the red dot leaves the edge of the screen
    var stop_time = (distanceToLeftMargin_cm+3)/1.5;

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

    frameRemains = 0.0 + stop_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + stop_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (movingDot.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      movingDot.setAutoDraw(false);
    }

    if (movingDot.status === PsychoJS.Status.STARTED){ // only update if being drawn
      movingDot.setPos([(start_pos - (speedModify * frameN)), 0]);
    }
    
    // *fixateSquare* updates
    if (t >= 0.0 && fixateSquare.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixateSquare.tStart = t;  // (not accounting for frame time here)
      fixateSquare.frameNStart = frameN;  // exact frame index
      
      fixateSquare.setAutoDraw(true);
    }

    frameRemains = 0.0 + stop_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    
    if (typeof resp_enteredBlindSpot.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_enteredBlindSpot.rt', resp_enteredBlindSpot.rt);
        times_list.push(resp_enteredBlindSpot.rt);
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


var Post_Virtual_Chin_RestComponents;
function Post_Virtual_Chin_RestRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Post_Virtual_Chin_Rest'-------
    document.body.style.cursor='auto';
    t = 0;
    Post_Virtual_Chin_RestClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Post_Virtual_Chin_RestComponents = [];
    Post_Virtual_Chin_RestComponents.push(mouse_2);
    Post_Virtual_Chin_RestComponents.push(text_2);
    
    for (const thisComponent of Post_Virtual_Chin_RestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function Post_Virtual_Chin_RestRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Post_Virtual_Chin_Rest'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Post_Virtual_Chin_RestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
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
    for (const thisComponent of Post_Virtual_Chin_RestComponents)
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


function Post_Virtual_Chin_RestRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Post_Virtual_Chin_Rest'-------
    for (const thisComponent of Post_Virtual_Chin_RestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Post_Virtual_Chin_Rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(mouse_3);
    InstructionsComponents.push(text_3);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
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


function InstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions'-------
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Instructions_2Components;
function Instructions_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions_2'-------
    t = 0;
    Instructions_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_4
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Instructions_2Components = [];
    Instructions_2Components.push(mouse_4);
    Instructions_2Components.push(text_4);
    
    for (const thisComponent of Instructions_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
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
    for (const thisComponent of Instructions_2Components)
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


function Instructions_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions_2'-------
    for (const thisComponent of Instructions_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Face1;
var currentLoop;
function Face1LoopBegin(Face1LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  Face1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: (("image.1." + condition) + ".xlsx"),
    seed: undefined, name: 'Face1'
  });
  psychoJS.experiment.addLoop(Face1); // add the loop to the experiment
  currentLoop = Face1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisFace1 of Face1) {
    const snapshot = Face1.getSnapshot();
    Face1LoopScheduler.add(importConditions(snapshot));
    Face1LoopScheduler.add(Instructions_3RoutineBegin(snapshot));
    Face1LoopScheduler.add(Instructions_3RoutineEachFrame(snapshot));
    Face1LoopScheduler.add(Instructions_3RoutineEnd(snapshot));
    Face1LoopScheduler.add(endLoopIteration(Face1LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function Face1LoopEnd() {
  psychoJS.experiment.removeLoop(Face1);

  return Scheduler.Event.NEXT;
}


var Face2;
function Face2LoopBegin(Face2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  Face2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: (("image.2." + condition) + ".xlsx"),
    seed: undefined, name: 'Face2'
  });
  psychoJS.experiment.addLoop(Face2); // add the loop to the experiment
  currentLoop = Face2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisFace2 of Face2) {
    const snapshot = Face2.getSnapshot();
    Face2LoopScheduler.add(importConditions(snapshot));
    Face2LoopScheduler.add(Instructions_4RoutineBegin(snapshot));
    Face2LoopScheduler.add(Instructions_4RoutineEachFrame(snapshot));
    Face2LoopScheduler.add(Instructions_4RoutineEnd(snapshot));
    Face2LoopScheduler.add(endLoopIteration(Face2LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function Face2LoopEnd() {
  psychoJS.experiment.removeLoop(Face2);

  return Scheduler.Event.NEXT;
}


var LearnUp;
function LearnUpLoopBegin(LearnUpLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  LearnUp = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: (("Option.Test.Up." + condition) + ".xlsx"),
    seed: undefined, name: 'LearnUp'
  });
  psychoJS.experiment.addLoop(LearnUp); // add the loop to the experiment
  currentLoop = LearnUp;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisLearnUp of LearnUp) {
    const snapshot = LearnUp.getSnapshot();
    LearnUpLoopScheduler.add(importConditions(snapshot));
    LearnUpLoopScheduler.add(trial2RoutineBegin(snapshot));
    LearnUpLoopScheduler.add(trial2RoutineEachFrame(snapshot));
    LearnUpLoopScheduler.add(trial2RoutineEnd(snapshot));
    LearnUpLoopScheduler.add(trialRoutineBegin(snapshot));
    LearnUpLoopScheduler.add(trialRoutineEachFrame(snapshot));
    LearnUpLoopScheduler.add(trialRoutineEnd(snapshot));
    LearnUpLoopScheduler.add(endLoopIteration(LearnUpLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function LearnUpLoopEnd() {
  psychoJS.experiment.removeLoop(LearnUp);

  return Scheduler.Event.NEXT;
}


var LearnIn;
function LearnInLoopBegin(LearnInLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  LearnIn = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: (("Option.Test.In." + condition) + ".xlsx"),
    seed: undefined, name: 'LearnIn'
  });
  psychoJS.experiment.addLoop(LearnIn); // add the loop to the experiment
  currentLoop = LearnIn;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisLearnIn of LearnIn) {
    const snapshot = LearnIn.getSnapshot();
    LearnInLoopScheduler.add(importConditions(snapshot));
    LearnInLoopScheduler.add(trial2RoutineBegin(snapshot));
    LearnInLoopScheduler.add(trial2RoutineEachFrame(snapshot));
    LearnInLoopScheduler.add(trial2RoutineEnd(snapshot));
    LearnInLoopScheduler.add(trialRoutineBegin(snapshot));
    LearnInLoopScheduler.add(trialRoutineEachFrame(snapshot));
    LearnInLoopScheduler.add(trialRoutineEnd(snapshot));
    LearnInLoopScheduler.add(endLoopIteration(LearnInLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function LearnInLoopEnd() {
  psychoJS.experiment.removeLoop(LearnIn);

  return Scheduler.Event.NEXT;
}


var ExperimentUp;
function ExperimentUpLoopBegin(ExperimentUpLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  ExperimentUp = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 20, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: (("Option.Up." + condition) + ".xlsx"),
    seed: undefined, name: 'ExperimentUp'
  });
  psychoJS.experiment.addLoop(ExperimentUp); // add the loop to the experiment
  currentLoop = ExperimentUp;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisExperimentUp of ExperimentUp) {
    const snapshot = ExperimentUp.getSnapshot();
    ExperimentUpLoopScheduler.add(importConditions(snapshot));
    ExperimentUpLoopScheduler.add(trial2RoutineBegin(snapshot));
    ExperimentUpLoopScheduler.add(trial2RoutineEachFrame(snapshot));
    ExperimentUpLoopScheduler.add(trial2RoutineEnd(snapshot));
    ExperimentUpLoopScheduler.add(trialRoutineBegin(snapshot));
    ExperimentUpLoopScheduler.add(trialRoutineEachFrame(snapshot));
    ExperimentUpLoopScheduler.add(trialRoutineEnd(snapshot));
    ExperimentUpLoopScheduler.add(endLoopIteration(ExperimentUpLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function ExperimentUpLoopEnd() {
  psychoJS.experiment.removeLoop(ExperimentUp);

  return Scheduler.Event.NEXT;
}


var ExperimentIn;
function ExperimentInLoopBegin(ExperimentInLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  ExperimentIn = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 20, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: (("Option.In." + condition) + ".xlsx"),
    seed: undefined, name: 'ExperimentIn'
  });
  psychoJS.experiment.addLoop(ExperimentIn); // add the loop to the experiment
  currentLoop = ExperimentIn;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisExperimentIn of ExperimentIn) {
    const snapshot = ExperimentIn.getSnapshot();
    ExperimentInLoopScheduler.add(importConditions(snapshot));
    ExperimentInLoopScheduler.add(trial2RoutineBegin(snapshot));
    ExperimentInLoopScheduler.add(trial2RoutineEachFrame(snapshot));
    ExperimentInLoopScheduler.add(trial2RoutineEnd(snapshot));
    ExperimentInLoopScheduler.add(trialRoutineBegin(snapshot));
    ExperimentInLoopScheduler.add(trialRoutineEachFrame(snapshot));
    ExperimentInLoopScheduler.add(trialRoutineEnd(snapshot));
    ExperimentInLoopScheduler.add(endLoopIteration(ExperimentInLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function ExperimentInLoopEnd() {
  psychoJS.experiment.removeLoop(ExperimentIn);

  return Scheduler.Event.NEXT;
}


var Instructions_3Components;
function Instructions_3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions_3'-------
    t = 0;
    Instructions_3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_5
    gotValidClick = false; // until a click is received
    image_6.setImage(target);
    // keep track of which components have finished
    Instructions_3Components = [];
    Instructions_3Components.push(mouse_5);
    Instructions_3Components.push(text_5);
    Instructions_3Components.push(image_6);
    
    for (const thisComponent of Instructions_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_5* updates
    if (t >= 0.0 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
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
    for (const thisComponent of Instructions_3Components)
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


function Instructions_3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions_3'-------
    for (const thisComponent of Instructions_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Instructions_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Instructions_4Components;
function Instructions_4RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions_4'-------
    t = 0;
    Instructions_4Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_6
    gotValidClick = false; // until a click is received
    image_7.setImage(target);
    // keep track of which components have finished
    Instructions_4Components = [];
    Instructions_4Components.push(mouse_6);
    Instructions_4Components.push(text_6);
    Instructions_4Components.push(image_7);
    
    for (const thisComponent of Instructions_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_4RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions_4'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_6* updates
    if (t >= 0.0 && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *image_7* updates
    if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
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
    for (const thisComponent of Instructions_4Components)
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


function Instructions_4RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions_4'-------
    for (const thisComponent of Instructions_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Instructions_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Instructions_5Components;
function Instructions_5RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions_5'-------
    t = 0;
    Instructions_5Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_7
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Instructions_5Components = [];
    Instructions_5Components.push(mouse_7);
    Instructions_5Components.push(text_7);
    
    for (const thisComponent of Instructions_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_5RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions_5'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_7* updates
    if (t >= 0.0 && mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_7.tStart = t;  // (not accounting for frame time here)
      mouse_7.frameNStart = frameN;  // exact frame index
      
      mouse_7.status = PsychoJS.Status.STARTED;
      mouse_7.mouseClock.reset();
      prevButtonState = mouse_7.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
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
    for (const thisComponent of Instructions_5Components)
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


function Instructions_5RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions_5'-------
    for (const thisComponent of Instructions_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Instructions_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Instructions_6Components;
function Instructions_6RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions_6'-------
    t = 0;
    Instructions_6Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_8
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Instructions_6Components = [];
    Instructions_6Components.push(mouse_8);
    Instructions_6Components.push(text_8);
    
    for (const thisComponent of Instructions_6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_6RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions_6'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions_6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_8* updates
    if (t >= 0.0 && mouse_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_8.tStart = t;  // (not accounting for frame time here)
      mouse_8.frameNStart = frameN;  // exact frame index
      
      mouse_8.status = PsychoJS.Status.STARTED;
      mouse_8.mouseClock.reset();
      prevButtonState = mouse_8.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_8.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_8.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
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
    for (const thisComponent of Instructions_6Components)
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


function Instructions_6RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions_6'-------
    for (const thisComponent of Instructions_6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Instructions_6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Instructions_7Components;
function Instructions_7RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions_7'-------
    t = 0;
    Instructions_7Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_9
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Instructions_7Components = [];
    Instructions_7Components.push(mouse_9);
    Instructions_7Components.push(text_9);
    
    for (const thisComponent of Instructions_7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_7RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions_7'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions_7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_9* updates
    if (t >= 0.0 && mouse_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_9.tStart = t;  // (not accounting for frame time here)
      mouse_9.frameNStart = frameN;  // exact frame index
      
      mouse_9.status = PsychoJS.Status.STARTED;
      mouse_9.mouseClock.reset();
      prevButtonState = mouse_9.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_9.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_9.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
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
    for (const thisComponent of Instructions_7Components)
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


function Instructions_7RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions_7'-------
    for (const thisComponent of Instructions_7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Instructions_7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Instructions_8Components;
function Instructions_8RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions_8'-------
    t = 0;
    Instructions_8Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_10
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Instructions_8Components = [];
    Instructions_8Components.push(mouse_10);
    Instructions_8Components.push(text_10);
    
    for (const thisComponent of Instructions_8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_8RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions_8'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions_8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_10* updates
    if (t >= 0.0 && mouse_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_10.tStart = t;  // (not accounting for frame time here)
      mouse_10.frameNStart = frameN;  // exact frame index
      
      mouse_10.status = PsychoJS.Status.STARTED;
      mouse_10.mouseClock.reset();
      prevButtonState = mouse_10.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_10.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_10.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
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
    for (const thisComponent of Instructions_8Components)
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


function Instructions_8RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions_8'-------
    for (const thisComponent of Instructions_8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Instructions_8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial2Components;
function trial2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial2'-------
    document.body.style.cursor='none';
    t = 0;
    trial2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    image.setImage(target);
    // keep track of which components have finished
    trial2Components = [];
    trial2Components.push(image_dot);
    trial2Components.push(image);
    
    for (const thisComponent of trial2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var frameRemains;
function trial2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_dot* updates
    if (t >= 0.0 && image_dot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_dot.tStart = t;  // (not accounting for frame time here)
      image_dot.frameNStart = frameN;  // exact frame index
      
      image_dot.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image_dot.status === PsychoJS.Status.STARTED || image_dot.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image_dot.setAutoDraw(false);
    }
    
    // *image* updates
    if (t >= 1.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 1.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image.status === PsychoJS.Status.STARTED || image.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image.setAutoDraw(false);
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
    for (const thisComponent of trial2Components)
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


function trial2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial2'-------
    for (const thisComponent of trial2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    document.body.style.cursor='auto';
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    image_1.setPos([0.2, 0.3]);
    image_1.setImage(image1);
    image_2.setPos([(- 0.2), 0.3]);
    image_2.setImage(image2);
    image_3.setPos([0.4, (- 0.3)]);
    image_3.setImage(image3);
    image_4.setPos([0, (- 0.3)]);
    image_4.setImage(image4);
    image_5.setPos([(- 0.4), (- 0.3)]);
    image_5.setImage(image5);
    // setup some python lists for storing info about the resp
    // current position of the mouse:
    resp.x = [];
    resp.y = [];
    resp.leftButton = [];
    resp.midButton = [];
    resp.rightButton = [];
    resp.time = [];
    resp.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image_1);
    trialComponents.push(image_2);
    trialComponents.push(image_3);
    trialComponents.push(image_4);
    trialComponents.push(image_5);
    trialComponents.push(resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_1* updates
    if (t >= 0.2 && image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1.tStart = t;  // (not accounting for frame time here)
      image_1.frameNStart = frameN;  // exact frame index
      
      image_1.setAutoDraw(true);
    }

    
    // *image_2* updates
    if (t >= 0.2 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    
    // *image_3* updates
    if (t >= 0.2 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    
    // *image_4* updates
    if (t >= 0.2 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    
    // *image_5* updates
    if (t >= 0.2 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }

    // *resp* updates
    if (t >= 0.2 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      resp.status = PsychoJS.Status.STARTED;
      resp.mouseClock.reset();
      prevButtonState = resp.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = resp.getPos();
          resp.x.push(_mouseXYs[0]);
          resp.y.push(_mouseXYs[1]);
          resp.leftButton.push(_mouseButtons[0]);
          resp.midButton.push(_mouseButtons[1]);
          resp.rightButton.push(_mouseButtons[2]);
          resp.time.push(resp.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_1,image_2,image_3,image_4,image_5]) {
            if (obj.contains(resp)) {
              gotValidClick = true;
              resp.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
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


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    if (resp.x) {  psychoJS.experiment.addData('resp.x', resp.x[0])};
    if (resp.y) {  psychoJS.experiment.addData('resp.y', resp.y[0])};
    if (resp.leftButton) {  psychoJS.experiment.addData('resp.leftButton', resp.leftButton[0])};
    if (resp.midButton) {  psychoJS.experiment.addData('resp.midButton', resp.midButton[0])};
    if (resp.rightButton) {  psychoJS.experiment.addData('resp.rightButton', resp.rightButton[0])};
    if (resp.time) {  psychoJS.experiment.addData('resp.time', resp.time[0])};
    if (resp.clicked_name) {  psychoJS.experiment.addData('resp.clicked_name', resp.clicked_name[0])};
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Pre_ExperimentComponents;
function Pre_ExperimentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Pre_Experiment'-------
    t = 0;
    Pre_ExperimentClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_11
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Pre_ExperimentComponents = [];
    Pre_ExperimentComponents.push(mouse_11);
    Pre_ExperimentComponents.push(text_11);
    
    for (const thisComponent of Pre_ExperimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function Pre_ExperimentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Pre_Experiment'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Pre_ExperimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_11* updates
    if (t >= 0.0 && mouse_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_11.tStart = t;  // (not accounting for frame time here)
      mouse_11.frameNStart = frameN;  // exact frame index
      
      mouse_11.status = PsychoJS.Status.STARTED;
      mouse_11.mouseClock.reset();
      prevButtonState = mouse_11.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_11.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_11.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
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
    for (const thisComponent of Pre_ExperimentComponents)
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


function Pre_ExperimentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Pre_Experiment'-------
    for (const thisComponent of Pre_ExperimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Pre_Experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var DebreifingComponents;
function DebreifingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Debreifing'-------
    t = 0;
    DebreifingClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_13
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    DebreifingComponents = [];
    DebreifingComponents.push(mouse_13);
    DebreifingComponents.push(text_13);
    
    for (const thisComponent of DebreifingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function DebreifingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Debreifing'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = DebreifingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_13* updates
    if (t >= 0.0 && mouse_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_13.tStart = t;  // (not accounting for frame time here)
      mouse_13.frameNStart = frameN;  // exact frame index
      
      mouse_13.status = PsychoJS.Status.STARTED;
      mouse_13.mouseClock.reset();
      prevButtonState = mouse_13.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_13.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_13.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
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
    for (const thisComponent of DebreifingComponents)
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


function DebreifingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Debreifing'-------
    for (const thisComponent of DebreifingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "Debreifing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
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
