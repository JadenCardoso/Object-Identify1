img = "";

function preload(){
    img = loadImage("Cars.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Car", 50, 190);
    text("Car", 370, 180);
    noFill();
    stroke("#FF0000");
    rect(50, 200, 320, 230);
    rect(370, 200, 230, 200);
}