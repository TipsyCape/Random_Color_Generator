//weird bug where sometimes one of the lumShift's sets the G=255 and doesnt change. does not happen often but needs to be addressed

let color1 = 0;
let color2 = 0;
let color3 = 0;

function mousePressed(){                                            //detect mouse click, on mouse click, generate random color
    color1 = round(random(0, 255));
    color2 = round(random(0, 255));
    color3 = round(random(0, 255));
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
    satShift(h+45, s, l, 3);
    satShift(h+90, s, l, 4);
    satShift(h+135, s, l, 5);

    lumShift(h, s, l, 2);
    lumShift(h+45, s, l, 3);
    lumShift(h+90, s, l, 4);
    lumShift(h+135, s, l, 5);

    textAlign(CENTER);
    fill(255, 255, 255);
    textSize(windowWidth/35);
    text('Click to generate a random color pallet!', windowWidth/2, windowHeight/2);                //instructions

    let c = get(mouseX, mouseY);
    console.log(c);
    textAlign(RIGHT);
    text('Color = ' + c[0] + 'R, ' + c[1] + 'G, ' + c[2] + 'B', windowWidth - windowWidth/30, 50);    
}