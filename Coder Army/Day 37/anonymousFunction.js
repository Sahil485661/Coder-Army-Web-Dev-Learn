let sum = function(num1, num2){
    return num1 + num2;
}
console.log(sum(23, 34));
console.log(sum((32,32), 54)) //❌ wrong only give two sum
console.log(sum(sum(32,32), 54)) //✅ right give answer
let SumThreeNumbers = function(num1, num2, num3, sumOfTwoNumbers){
    let sum1 = sumOfTwoNumbers(num1, num2)
    return sumOfTwoNumbers(sum1, num3)
}
console.log(SumThreeNumbers(3,5,10, sum));
