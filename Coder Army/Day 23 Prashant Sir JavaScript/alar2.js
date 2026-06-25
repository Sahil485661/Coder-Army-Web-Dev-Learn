console.info("Hello Sahil");
console.warn("Hello Sahil");
alert("Hello Sahil");
confirm('Are you under 40')
var a = prompt('Enter Your Age')
if(a<40){
    console.log("You are Young");
}else{
    console.log("You are Old");
}
console.log(a);
let Unit = prompt("Enter your Electricity Unit")
        if( 100< Unit){
            console.log(Unit * 15, "rs")
        }
        else if(Unit > 50){
            console.log(Unit * 20, "rs")
        }
        else{
            console.log(Unit * 25, "rs")
        }
console.log(`Your Unit is ${Unit}`)
a>Unit? console.log('Age bada hai Unit se'): console.log('Unit bda hai age se')
while(Unit>100){
    console.log("Bijli kam Use kare")
    Unit++
    if(Unit == 122){
        break
    }
}

