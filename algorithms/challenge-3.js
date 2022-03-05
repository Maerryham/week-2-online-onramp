function increment(arr, value) {
    let result = [];
    for(let val of arr){
        let newValue = val.val + value;
        result.push({val: newValue})
    }
    return result;
}

module.exports = increment
