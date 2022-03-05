function missingNumber(numArr) {
    numArr.sort();

    let missing = [];
    let numArrLen = numArr.length;
    for(let i = 0; i < numArrLen; i++){
        if (i === 0) {
            if(numArr[i] !== 1) missing.push(1);
        }else if(i === numArrLen - 1){
            let remaining = 9 - numArr[numArrLen -1];
            for (let j = 0; j < remaining; j++){
                missing.push( numArr[numArrLen -1] + j + 1);
                console.log(i, numArr[i - 1] + 1, numArr[i], 'Last');
            }
        }else{
            if (numArr[i] !== numArr[i - 1] + 1) {
                missing.push(numArr[i - 1] + 1);
                console.log(i, numArr[i - 1] + 1, numArr[i]);
            }
        }
    }
    return missing;
}

module.exports = missingNumber
