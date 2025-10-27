let user = {
    name: "Sahil",
    class: "B.tech(cs)",
    Age : 24,
    Passion: "Kuch Nahi "
}
console.log(user);
user.name = "Sahil Vishwakarma";
console.log(user);
user.aadhar = 493848339;
console.log(user);
console.log(user.Age);
delete user.aadhar;
console.log(user);

// Important these lines. it is print the all value in array
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
