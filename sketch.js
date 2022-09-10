let color1 = 0;
let color2 = 0;
let color3 = 0;

function mousePressed(){
    color1 = floor(random(0, 255));
    color2 = floor(random(0, 255));
    color3 = floor(random(0, 255));
}

function decTohex(dec){
    return Math.abs(dec).toString(16);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(color1, color2, color3);
    textSize(32);
    fill(255, 255, 255);
    text('Color = ' + color1 + 'R, ' + color2 + 'G, ' + color3 + 'B',  50, 50);
    text('Hex = #' + decTohex(color1) + decTohex(color2) + decTohex(color3), 50, 100);

}