let Darumad;
let face = "Best font ever \n+ \n";
function preload() {
 Darumad = loadFont("ClashDisplay.ttf");
}
function setup() {
 createCanvas(500, 500);
}
function draw() {
 background(255,100,10,5);
 fill(0);
 textFont(Darumad);
 textSize(50);
 textAlign(CENTER, CENTER);
 text(face, width / 2, mouseY);
}