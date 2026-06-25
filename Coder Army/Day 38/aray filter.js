let arr= [34,21,444,545,65];
let srr = arr.filter((index) => {if(index % 2 === 0){   
    return true;                                 //filter is only return and store only true waali value. and store it in new array
}
else{
    return false;
}})

console.log(srr)
let new_arr = arr.filter((num) => num%2 ===1);  //filter is only return true waali value. and store it in new array
console.log(new_arr)  