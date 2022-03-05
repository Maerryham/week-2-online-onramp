function arraySum(arr1, arr2) {
    let result = [];
    let arrLen = arr2.length;
    for(let i = 0; i < arr1.length; i++){
        if(!arr2[i]){
            arr2[i] = arr2[i - arrLen];
        }
        result.push(arr1[i] + arr2[i]);
        console.log(arr1[i], arr2[i], arr2, i, arrLen);
    }
    return result;
}

module.exports = arraySum
