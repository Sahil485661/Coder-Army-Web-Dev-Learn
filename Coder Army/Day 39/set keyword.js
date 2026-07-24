let arr = [43,23,23,12,31,43];
//Set ek data structure hai jo unique values store karta hai.

//Agar array me duplicate elements hain, to Set unko automatically remove kar deta hai.

let new_arr = [...new Set(arr)]; //Set ko directly print karoge to wo ek object hota hai, array nahi.
console.log(new_arr)