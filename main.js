peter_pan = "";
harry_potter = "";

function preload(){
    peter_pan = loadSound("peter_pan.mp3");
    harry_potter = loadSound("harry_potter.mp3");
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 400);
}