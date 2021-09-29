img = "";

function preload(){
    img = loadImage("Furniture.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Sofa", 0, 10);
    noFill();
    stroke("#FF0000");
    rect(0, 0, 560, 420);
}