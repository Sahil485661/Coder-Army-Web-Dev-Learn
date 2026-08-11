// How to create shallow copy of object?

// By using Spread operator
const original = { a: 1, b: 2 };
const copy = { ...original };

console.log(copy); // { a: 1, b: 2 }

//If the object contains nested objects or arrays, shallow copy methods do not create a deep clone.

//for deep clone use that 'structuredClone'
const obj = {
    a:23,
    b:13,
    c: {age:34}
}
const deepCopy = structuredClone(obj);
deepCopy.c.age= 12;
console.log("obj age:", obj.c.age)
console.log("deepCopy Age:", deepCopy.c.age)