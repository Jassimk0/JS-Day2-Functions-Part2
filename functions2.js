function isOdd(n){
if ( n % 2 === 0 ) {
    return false;
} else {
    return true;
}

}
let result = isOdd(13);

console.log(result)

function squareOrDouble(n){
    if ( n % 2 === 0 ) {
        return n * 2;
    } else {
        return n**2;
    }

}
let result2 = squareOrDouble(3);
console.log(result2);

function oddsSmallerThan(n) {
    if ( n % 2 === 1 ){
      return (n - 1 )/ 2
    }
}
let result3 = oddsSmallerThan(51);
console.log(result3);