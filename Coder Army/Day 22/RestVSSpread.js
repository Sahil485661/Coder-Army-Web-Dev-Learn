function greetAll(...names) {
  for (let name of names) {
    console.log(`Hello, ${name}`);
  }
}

const people = ["Sahil", "Aman", "Riya"];
greetAll(...people); // Spread used to pass array as args

function sum(...nums) {     //Rest operator
  console.log(nums); // [1, 2, 3, 4]
}
sum(1, 2, 3, 4);


const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]
