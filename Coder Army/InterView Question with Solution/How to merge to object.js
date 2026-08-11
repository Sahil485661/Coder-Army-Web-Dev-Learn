const obj1 = {
    name: "sahil",
    age: 22
}
const obj2 = {
    name: "Suhail",
    age: 21
}
const merge =  {...obj1, ...obj2}
console.log(JSON.stringify(merge))

// If you don't want obj2 to overwrite obj1's values, merge them into an array of values instead:

const merged = {
  name: [obj1.name, obj2.name],
  age: [obj1.age, obj2.age]
};

console.log(merged); 
// Output: { name: ["sahil", "Suhail"], age: [22, 21] }