let addNumber = ()=>{
    console.log("Hello Sahil");
    
}
addNumber()
let addNumber2 = (num1, num2, num3, num4, num5) => {
    let sum = num1+num2+num3+num4+num5;
    console.log(sum);
    
}
addNumber2(32,43,44,21,32)

let name = num => num*num;      //If you have only single varable than you can ut direct variable without bracket
console.log(name(12))

let details = () => ({name: "sahil",
    class: "B.tech(CSE)",
    Age: 20,
    College: 'AKS University'
})

console.log(details());
 