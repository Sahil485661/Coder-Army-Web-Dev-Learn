let a = [12,13,14,21,28,34];
console.log(a.slice(0, a.length));
let b = a.slice(0, a.length);
console.log(b);
b[0] = null;
console.log(b);
console.log(`a = ${a}`);