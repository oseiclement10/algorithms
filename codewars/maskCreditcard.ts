const maskify = (cc: string): string => {

    if (cc.length < 4) {
        return cc;
    }

    const ccArray = cc.split("");
    const firstPart = ccArray.splice(0, ccArray.length - 4).map(elem => "#").join("");
    const lastPart = ccArray.splice(ccArray.length - 4, ccArray.length).join("");
    
    return `${firstPart}${lastPart}`;
}

