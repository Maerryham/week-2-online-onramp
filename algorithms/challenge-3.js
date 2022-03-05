function increment(arr, value) {
    result = [];
    for(let val of arr){
        let newValue = val.val + value;
        result.push({val: newValue})
    }
    return result;
}

module.exports = increment
