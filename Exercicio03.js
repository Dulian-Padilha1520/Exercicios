function countBs(mundo){
    let counter = 0;
    for(let index = 0; index < mundo.length; index++){
        mundo.charAt(index) === 'B' ? counter += 1 : counter;
    }
    return counter;
}
function countChar(mundo, carta){
    let counter = 0;
    for(let index = 0; index < mundo.lenght; index++){
        mundo.charAt(index) === carta ? counter += 1 : counter;
    }
    return counter;
}
console.log(countBs('BBC'));
console.log(countBs('bbc'));
console.log(countChar("kakkerlak", "k"));
console.log(countChar("kakkerlak", "a"));