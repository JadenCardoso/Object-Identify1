img = "";

function preload(){
    img = loadImage("Pets.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Dog", 50, 20);
    text("Cat", 390, 60);
    noFill();
    stroke("#FF0000");
    rect(10, 50, 380, 350);
    rect(370, 80, 250, 300);
}