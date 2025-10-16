// Here we write a mullti level  array into the flat
let a = [12,43,52,5,[3,5,3,4,[42,432,65,77,5,667,12,[432,56,77,88,990],67,54],56,32,676,],676,8,9,88,76677,344556]
let b = a.flat();
console.log(b)
// for access the only [432,56,77,88,990] this is possible by this way
console.log(a[4][4][7]);
// IF i need to flat the every level on the array
let c = a.flat(Infinity)
console.log(c);


