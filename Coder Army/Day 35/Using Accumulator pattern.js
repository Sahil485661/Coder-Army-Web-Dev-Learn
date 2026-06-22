let arr = ['KG', 'Coding', 'JS', 'Course', 'is', 'best'];
let[a,b,c,d,e,g] = arr; //accumulator method
console.log(a +" "+ b +" "+ c +" "+ d +" "+ e +" "+ g);

// Another accumulator method
let result = "";
for(let i = 0; i<arr.length;i++){
    result += arr[i] + ' ';
}
console.log(result);
console.log(arr.join(","))