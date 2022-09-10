let color1 = 0;
let color2 = 0;
let color3 = 0;

function mousePressed(){                                            //detect mouse click, on mouse click, generate random color
    color1 = floor(random(0, 255));
    color2 = floor(random(0, 255));
    color3 = floor(random(0, 255));
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    resizeCanvas(windowWidth, windowHeight);
    let hsl = RgbToHsl(color1, color2, color3);                                                         //get results from RgbToHsl()
    let h = hsl[0], s = hsl[1], l = hsl[2];

    background(color1, color2, color3);
    textSize(32);
    fill(255, 255, 255);
    textAlign(LEFT);
    text('Color = ' + color1 + 'R, ' + color2 + 'G, ' + color3 + 'B', 25, 50);                          //display rgb colors
    text('Hex = #' + decTohex(color1) + decTohex(color2) + decTohex(color3), 25, 100);                  //display hex color
    text('HSL = ' + h + '\u00B0, ' + round(s * 100) + '%, ' + round(l * 100) + '%', 25, 150);           //display hsl colors

    let hComp = HslToRgb(h + 180, s, l);
    let rP = hComp[0], gP = hComp[1], bP = hComp[2];
    fill(rP,gP,bP);
    square(0, windowHeight - 200, 100);

    let h2 = HslToRgb(h, s - s * 0.1, l);
    let r2 = h2[0], g2 = h2[1], b2 = h2[2];
    fill(r2,g2,b2);
    square(0, windowHeight - 100, 100);

    let h3 = HslToRgb(h, s - s * 0.2, l);
    let r3 = h3[0], g3 = h3[1], b3 = h2[2];
    fill(r3,g3,b3);
    square(100, windowHeight - 100, 100);

    let h4 = HslToRgb(h, s - s * 0.3, l);
    let r4 = h4[0], g4 = h4[1], b4 = h4[2];
    fill(r4,g4,b4);
    square(200, windowHeight - 100, 100);

    textAlign(CENTER);
    fill(255, 255, 255);
    text('Click any button to generate a random color!', windowWidth/2, windowHeight/2);                //instructions
}