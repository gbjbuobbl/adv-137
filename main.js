status = "";
object = [];

function preload() {
    img = loadSound("important257.wav");
}

function setup() {
  
  canvas = createCanvas(380 , 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide()
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML = "Status = Detecting Objects"
}

function modelLoaded(){
      console.log("model loaded");
      status = true;
      objectDetector.detect(img , gotResult);
}

function gotResult(error,results) {
    if(error) {
      console.log(error);
    }
    console.log(results);
    object = results;
  }

function draw() {
    image(video, 0 , 0 , 380 , 380);
  }