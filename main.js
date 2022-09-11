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
    textSize(windowWidth/35);
    fill(255, 255, 255);
    textAlign(LEFT);
    text('Color = ' + color1 + 'R, ' + color2 + 'G, ' + color3 + 'B', 25, 50);                          //display rgb colors
    text('Hex = #' + decTohex(color1) + decTohex(color2) + decTohex(color3), 25, 100);                  //display hex color
    text('HSL = ' + h + '\u00B0, ' + round(s * 100) + '%, ' + round(l * 100) + '%', 25, 150);           //display hsl colors

    // hueShift(h, s, l, 11);
    // hueShift(h+10, s, l, 10);
    // hueShift(h+20, s, l, 9);
    // hueShift(h+30, s, l, 8);



    satShift(h, s, l, 2);
    satShift(h, s - 0.1*s, l, 3);
    satShift(h, s - 0.2*s, l, 4);
    satShift(h, s - 0.3*s, l, 5)

    lumShift(h, s, l-0.3*l, 2);
    lumShift(h, s, l-0.2*l, 3);
    lumShift(h, s, l-0.1*l, 4);
    lumShift(h, s, l, 5);

    textAlign(CENTER);
    fill(255, 255, 255);
    textSize(windowWidth/35)
    text('Click to generate a random color pallet!', windowWidth/2, windowHeight/2);                //instructions
}