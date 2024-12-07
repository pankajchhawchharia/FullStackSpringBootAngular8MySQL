// fibonacci series till the number of terms
function fibonaci(num) {
    let fib = [];
    if(num<=0) {
        return num;
    }
    if(num === 1) {
        return num;
    }
    fib = [0,1];
    for (let i=2;i<num;i++) {
        let nextTerm = fib[i-1] + fib[i-2];
        fib.push(nextTerm);
    }
    return `${fib} number of terms: ${num}`;
}
console.log("fibonacci series: ",fibonaci(3));