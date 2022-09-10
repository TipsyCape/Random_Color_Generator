function genShades(H, S, L, height){
    
    let x;
    let y;
    let w = 0;
    var hueBuff = [];

    for(x=1; x < height; x++){
        y = windowHeight - 100 * x;
    }

    for(w = 0; w < 9; w++){
        hueBuff[w] = H + x;
        x = x + 45;
    }

    w = 0;
    for(x = 0; x < hueBuff.length; x++){
        let hueComp = HslToRgb(hueBuff[x], S, L);
        let rP = hueComp[0], gP = hueComp[1], bP = hueComp[2];
        fill(rP, gP, bP);
        square(w*100, y, 100);
        w = w + 1;
    }

}