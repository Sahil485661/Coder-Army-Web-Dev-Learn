function greeting(){

    console.log("Hello Sahil");
    
}
greeting();
function sum(num1, num2){
    sum = num1 + num2;
    console.log(sum);
    
}
sum(12,5);
function addNumber(...num){         //It name is rest opertor
    let sum = 0;
    for(let n in num){      // ye for in loop→ Iterates over keys (indexes or property names)
// Ye object ya array ke keys pe loop karta hai.
// Mostly used for objects.
        sum += num[n];
    }
    console.log(sum);
    
}
//for of loop → Iterates over values directly
// Ye array, string, Map, Set jaise iterable ke values pe loop karta hai.
// Mostly used for arrays.
addNumber(4,6,2,6,3,2,1,8,997,6,5,44,544,21);
