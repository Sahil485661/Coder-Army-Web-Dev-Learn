const addNumber = function(...Num){
    let sum = 0;
    for(let n of Num){
    sum+=n;
    }
    console.log(sum);
}
addNumber(2,4,5,3,2,12);
