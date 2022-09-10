let color1 = 0;
let color2 = 0;
let color3 = 0;

function mousePressed(){
    color1 = floor(random(0, 255));
    color2 = floor(random(0, 255));
    color3 = floor(random(0, 255));
}

function RgbToHsl(R, G, B){
    let H;
    let S;
    let L;
    R = R / 255;
    G = G / 255;
    B = B / 255;

    let max = Math.max(R, G, B);
    let min = Math.min(R, G, B);

    L = (min + max) / 2;

    if(L <= 0.5){
        S = (max-min)/(max+min);
    } else if(L > 0.5){
        S = (max-min)/(2.0-max-min);
    }

    switch(max){
        case R:
            H = (G-B)/(max-min);
        break;

        case G:
            H = 2.0 + (B-R)/(max-min);
        break;

        case B:
            H = 4.0 + (R-G)/(max-min);
        break;
    }
    
    H = round(H * 60);

    if(H < 0){
        H = H + 360;
    }

    return [H, S, L];
}

function HslToRgb(H, S, L){

}

function decTohex(dec){
    return Math.abs(dec).toString(16);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    let hsl = RgbToHsl(color1, color2, color3);
    let h = hsl[0];
    let s = hsl[1];
    let l = hsl[2];
    background(color1, color2, color3);
    textSize(32);
    fill(255, 255, 255);
    text('Color = ' + color1 + 'R, ' + color2 + 'G, ' + color3 + 'B',  50, 50);
    text('Hex = #' + decTohex(color1) + decTohex(color2) + decTohex(color3), 50, 100);
    text('HSL = ' + h + '\u00B0, ' + round(s * 100) + '%, ' + round(l * 100) + '%', 50, 150);
}