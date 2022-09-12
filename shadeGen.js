/*
todo - 1. rework the hueshift function... not working as i would like it to
        a.shift the hue, and generate a pallet based off of that shifted color instead of generating a bunch of different colors with the hue shifted
       2. add the hue shift to the middle to separate the luminance and saturation pallets
*/

function hueShift(H, S, L, height){
    let x;
    let y;
    let w = 0;
    var hueBuff = [];

    for(x=1; x < height; x++){
        y = windowHeight - windowWidth/20 * x;
    }

    for(w = 0; w < 8; w++){
        hueBuff[w] = H + x;
        x = x + 45;
        if(hueBuff[w] > 360){
            hueBuff[w] = hueBuff - 360;
        }
    }

    w = 8;
    for(x = 0; x < hueBuff.length; x++){
        let hueComp = HslToRgb(hueBuff[x], S, L);
        let rP = hueComp[0], gP = hueComp[1], bP = hueComp[2];
        fill(rP, gP, bP);
        square(windowWidth - w*windowWidth/20, y, windowWidth/20);
        w = w + 1;
    }
}



function satShift(H, S, L, height){
    let x;
    let y;
    let w = 0;
    let u = 0;
    var satBuff = [];

    for(x=1; x < height; x++){
        y = windowHeight - windowWidth/20 * x;
    }

    for(w = 5; w >= 0; w--){
        satBuff[w] = S - S*0.1*u;
        u++;
        if(satBuff[w] > 1){
            satBuff[w] = satBuff[w] - 1;
        }
    }

    w = 0;
    for(x = 0; x < satBuff.length; x++){
        let satComp = HslToRgb(H, satBuff[x], L);
        let rP = satComp[0], gP = satComp[1], bP = satComp[2];
        fill(rP, gP, bP);
        square(windowWidth - w*windowWidth/20, y, windowWidth/20);
        w = w + 1;
    }
}

function lumShift(H, S, L, height){
    let x;
    let y;
    let w = 0;
    let u = 0;
    var lumBuff = [];

    for(x=1; x < height; x++){
        y = windowHeight - windowWidth/20 * x;
    }

    for(w = 5; w >= 0; w--){
        lumBuff[w] = L - L*0.1*u;
        L = lumBuff[w];
        u++;
    }

    w = 0;
    for(x = 0; x < lumBuff.length - 1; x++){
        let lumComp = HslToRgb(H, S, lumBuff[x]);
        let rP = lumComp[0], gP = lumComp[1], bP = lumComp[2];
        fill(rP, gP, bP);
        square(w*windowWidth/20, y, windowWidth/20);
        w = w + 1;
    }
}