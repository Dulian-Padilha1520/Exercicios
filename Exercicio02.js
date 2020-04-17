function isEven(n){
    if (n === 0 || n === 1)
        return n % 2 === 0;
    else if (n < 0)
        return isEven (n * -1);
    else
        return isEven (n - 2);
}
console.log(isEven(10));
console.log(isEven(0));
console.log(isEven(-1));
console.log(isEven(170));
console.log(isEven(8));
console.log(isEven(4));
console.log(isEven(60));