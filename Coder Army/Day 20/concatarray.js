const arr = [1,2,3,4,5];
const arr1 = [6,7,8,9,10]
const arr2 = [11,12,13,14,15];
// Its main disadvantage is they are create new array where are merged array are stored
// const arr3 = arr.concat(arr1, arr2);
// console.log(arr3);
console.log(...arr, ...arr1, ...arr2);
// Other method is below
const arr3 = [...arr, ...arr1, ...arr2]
console.log(arr3);


