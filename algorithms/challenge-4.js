function withdraw(amount) {
//    100, 50 and 20
    let result = [];
    let count = 0

    if(amount >= 100 && result.length !== 1){
        count = Math.floor(amount / 100);
        amount %= 100;
        result.push(count);
    }else{
        result.push(0);
    }

    if(amount >= 50 && result.length !== 2){
        count = Math.floor(amount / 50);
        amount %= 50;
        result.push(count);
    }else{
        result.push(0);
    }

    if(amount >= 20 && result.length !== 3){
        count = Math.floor(amount / 20);
        amount %= 20;
        result.push(count);
    }else{
        result.push(0);
    }

    return result

}

module.exports = withdraw
