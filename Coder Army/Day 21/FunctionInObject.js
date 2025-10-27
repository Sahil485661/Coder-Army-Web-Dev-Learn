let user = {
    name: "Sahil",
    class: "B.tech(cs)",
    Age : 24,
    Passion: "Kuch Nahi ",
    greeting: function(){
        console.log(`hello Sahil ${user.name}`)
        console.log(`hello Sahil ${this.name}`)
        return 20;
}
}

// This keyword is only refer to the current vale of the element. So recomended method is use refer
console.log(user);
let user2 = {
    name: "Rohit",
    class: "B.tech(cs)",
    Age : 24,
    Passion: "Kuch Nahi ",
}
user2.greeting = user.greeting;
user2.greeting();
const va = user2.greeting();

