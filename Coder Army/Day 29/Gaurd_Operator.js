let loggedIn = true;
let username = "Sahil";
let result = loggedIn && username; 
// result = "Sahil"
console.log(result);

let loggedIn = false;
let username = "Sahil";
let result = loggedIn && username; 
// result = false
console.log(result);

let loggedIn = true;
let username = null;
let result = loggedIn && username; 
// result = null
console.log(result);

//Gaurd Operator: value && defaultValue
//Behavior: अगर A truthy है तो result B होगा, वरना result A होगा।