img = "";

function preload(){
    img = loadImage("Table.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Table", 20, 10);
    noFill();
    stroke("#FF0000");
    rect(20, 1, 620, 420);
}