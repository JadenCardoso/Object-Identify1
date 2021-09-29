img = "";

function preload(){
    img = loadImage("person.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Human", 70, 70);
    noFill();
    stroke("#FF0000");
    rect(50, 80, 260, 350);
}