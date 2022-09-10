function RgbToHsl(R, G, B){                                         //too much complicated math to explain in the next two functions
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
    } else if(L== 0){
        S = 0;
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

    if(S == 0){
        H = 0;
    }
    
    H = round(H * 60);

    if(H < 0){
        H = H + 360;
    }

    return [H, S, L];
}

function HslToRgb(H, S, L){
    if(H > 360){
        H = H - 360;
    }
    if(S > 1){
        S = S - 1;
    }
    if(L > 1){
        L = L - 1;
    }

    let R, G, B;
    let tempR, tempG, tempB;
    let temp1, temp2;

    if(L < 0.5){
        temp1 = L * (1 + S);
    } else if (L >= 0.5){
        temp1 = L + S - L * S;
    }

    temp2 = 2 * L - temp1;

    H = H / 360;

    tempR = H + 0.3333333;
    tempG = H;
    tempB = H - 0.3333333;
    
    if(tempR < 0){
        tempR = tempR + 1;
    }
    if(tempR > 1){
        tempR = tempR - 1;
    }
    if(tempG < 0){
        tempG = tempG + 1;
    }
    if (tempG > 1){
        tempG = tempG - 1;
    }
    if(tempB < 0){
        tempB = tempB + 1;
    }
    if (tempB > 1){
        tempB = tempB - 1;
    }

    R = 6 * tempR;
    if (R < 1){
        R = temp2 + (temp1 - temp2) * 6 * tempR;
    } 
    if(R > 1){
        R = 2 * tempR;
        if(R < 1){
            R = temp1;
        }
    }
    if(R > 1){
        R = 3 * tempR;
        if(R < 2){
            R = temp2 + (temp1 - temp2) * (0.66666 - tempR) * 6;
        }
    }
    if(R > 2){
        R = temp2;
    }
    

    G = 6 * tempG;
    if (G < 1){
        G = temp2 + (temp1 - temp2) * 6 * tempG;
    } 
    if(G > 1){
        G = 2 * tempG;
        if(G < 1){
            G = temp1;
        }
    }
    if(G > 1){
        G = 3 * tempG;
        if(G < 2){
            G = temp2 + (temp1 - temp2) * (0.66666 - tempG) * 6;
        }
    }
    if(G > 2){
        G = temp2;
    }

    B = 6 * tempB;
    if (B < 1){
        B = temp2 + (temp1 - temp2) * 6 * tempB;
    } 
    if(B > 1){
        B = 2 * tempB;
        if(B < 1){
            B = temp1;
        }
    }
    if(B > 1){
        B = 3 * tempB;
        if(B < 2){
            B = temp2 + (temp1 - temp2) * (0.66666 - tempB) * 6;
        }
    }
    if(B > 2){
        B = temp2;
    }

    R = round(R * 255);
    G = round(G * 255);
    B = round(B * 255);

    return [R, G, B];
    
}                                   