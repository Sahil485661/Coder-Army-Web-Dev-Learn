let user = {
    name: "Sahil",
    class: "B.tech(cs)",
    Age : 24,
    Passion: "Kuch Nahi "
}
for(let keys in user){
    console.log(keys);
    console.log(keys, user[keys]);
    
}
console.log("Second Loop Here start");
// It is same work as loop one means output not change. if i change let key to let value.
for(let value in user){
    console.log(value);
    console.log(value, user[value]);   
}

// "for in" loop is not recommended method. Do we use the "for of loop" in the object
for(let values of Object.entries(user)){
    console.log(values);
    
}
for(let [keys, values] of Object.entries(user)){    //This line will print normal object 
    console.log(keys, values);
    
}