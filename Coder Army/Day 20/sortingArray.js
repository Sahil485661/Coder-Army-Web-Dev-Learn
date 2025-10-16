// here sorting is done based on the ASCII value of the given string and in int based on the numbers value on ascii
const a = ["Rohit","Jhon","Dev","Atul","Sahil","depali"];
console.log(a.sort());
console.log(a.reverse());
// Here above method is not sort the integer based on the their original value means ascending order or dcending order
// Here comes the a function 
let b = [110,210,230,120,50,60,70]
console.log(b.sort((a,b)=> a-b));   //For Ascending order
console.log(b.sort((a,b)=> b-a));   //For Descending order

