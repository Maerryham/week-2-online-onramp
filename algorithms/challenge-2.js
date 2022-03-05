function numSwap(number = 123456 ) {
    //numSwap(1234) to return 2143
    let ans = '';
    number = number.toString();
    //Split into twos
    let numLen = number.length;
    for(let i = 0; i <= numLen/2; i++){
        let slice;
        if (i !== 0 && i % 2 !== 0) continue;
        if (i+2 >= numLen) {
             slice = number.slice(i)
        }else{
            slice = number.slice(i, i+2);
        }
        ans += slice.split('').reverse().join('');
        console.log(ans)
    }
    return ans;
}
module.exports = numSwap
