let arr = [10, 20, 30, 40, 50,60];
console.log(arr.slice(1,4));

console.log("Here we start splice");
// this is use for trim the object arr means it is also remove the main object element  
let barr =[40, 60, 80, 100];
let box = barr.splice(1, 3);
console.log(box);
console.log(barr);
let arr2 = barr.splice(1,3, "Rohit", 19);
console.log(barr);





