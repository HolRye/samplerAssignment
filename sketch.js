let sounds = new Tone.Players({
  'MrJoestar': "assets/MrJoestar.mp3",
  'MoriRadio': "assets/MoriRadio.mp3",
  'YareYare': "assets/YareYare.mp3",
  'WARUDO': "assets/WARUDO.mp3",
  'NoTime': "assets/NoTime.mp3"
});

let delAmt = new Tone.FeedbackDelay ("8n", 0.5);
let distAmt = new Tone.Distortion(0.5);

let button1, button2, button3, button4, button5;
let menacingBackground;
let delaySlider, fbSlider, distSlider;

sounds.connect(delAmt);
delAmt.connect(distAmt);
distAmt.toDestination();
sounds.toDestination();

function preload() {
  menacingBackground = loadImage("assets/menacingBackground.jpg");
}

function setup() {
  createCanvas(400, 400);

  button1 = createButton('MrJoestar');
  button1.position(10, 150);
  button1.mousePressed(() => sounds.player('MrJoestar').start());

  button2 = createButton('MoriRadio');
  button2.position(90, 150);
  button2.mousePressed(() => sounds.player('MoriRadio').start());

  button3 = createButton('YareYare');
  button3.position(170, 150);
  button3.mousePressed(() => sounds.player('YareYare').start());

  button4 = createButton('WARUDO');
  button4.position(250, 150);
  button4.mousePressed(() => sounds.player('WARUDO').start());

  button5 = createButton('NoTime');
  button5.position(330, 150);
  button5.mousePressed(() => sounds.player('NoTime').start());

  delaySlider = createSlider (0., 0.9, 0, 0.05);
  delaySlider.position (120,300);
  delaySlider.mouseMoved(() => delAmt.delayTime.value = delaySlider.value());

  fbSlider = createSlider (0., 0.9, 0, 0.05);
  fbSlider.position (120,330);
  fbSlider.mouseMoved(() => delAmt.feedback.value = fbSlider.value());

  distSlider = createSlider (0., 0.9, 0, 0.05);
  distSlider.position (120,360);
  distSlider.mouseMoved(() => delAmt.distortion = distSlider.value());
}

function draw() {
    background(0);
    image(menacingBackground, 0, 0, width, height);
  
    fill(0, 0, 255); 
  
    textSize(12);
  
    text("Delay Slider", delaySlider.x + delaySlider.width + 10, delaySlider.y + 10);
    text("Feedback Slider", fbSlider.x + fbSlider.width + 10, fbSlider.y + 10);
    text("Distortion Slider", distSlider.x + distSlider.width + 10, distSlider.y + 10);
}


