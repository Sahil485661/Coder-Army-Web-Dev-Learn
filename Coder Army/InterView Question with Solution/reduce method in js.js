// reduce() ko ek simple real-life example se samjho:
// Mano tumhare paas ek Gullak (Piggy Bank) hai.
// Shuru me Gullak me ₹0 hain (initialValue = 0).
// Tum ek pockets se coins nikalte ho: [10, 20, 30, 40] (array).
// Pehla coin (10) nikala Gullak me dala Gullak me ab ₹10 hain.
// Doosra coin (20) nikala Gullak me dala Gullak me ab ₹30 hain.
// Teesra coin (30) nikala Gullak me dala Gullak me ab ₹60 hain.
// Chautha coin (40) nikala Gullak me dala Gullak me ab ₹100 hain.
// reduce() ka kaam bas itna hi hai: Poore array ko ghuma kar ek single total value (Gullak ka final balance) banana.

// Coding ki bhasha me hum in do words ko bolte hain:

//accumulator (Gullak): Yeh wo variable hai jo har step par purana hisab/total yaad rakhta hai.
//currentValue (CurrentItem): Array ka wo element jo abhi process ho raha hai.

// Key Takeaway 
// reduce() ka formula simple hai:Initial Value (0, {}, [], etc.) tay karti hai ki final Output kya banega.
// Agar initial value 0 di toh output Number aayega.
// Agar initial value {} di toh output Object aayega.
// Agar initial value [] di toh output Array aayega.

let a = [2,3,4,5,6,7,8,9,10]
let sum =  a.reduce((accumulator, currentIndex)=> accumulator+currentIndex) //you can find sum of all array by using reduce method
console.log(sum) // o/p: 55

// Dekho loop andar kaise chala:
// Step 1: acc = 0, curr = 10  Return 0 + 10 = 10 (Ab acc ban gaya 10)
// Step 2: acc = 10, curr = 20 Return 10 + 20 = 30 (Ab acc ban gaya 30)
// Step 3: acc = 30, curr = 30 Return 30 + 30 = 60 (Ab acc ban gaya 60)
// Step 4: acc = 60, curr = 40 Return 60 + 40 = 100 (Loop khatam!)

let max =  a.reduce((acc, ci)=> ci> acc ?ci : acc) //Bina Math.max() ke sabse bada number nikalna you can find max value of array by reduce method
console.log(max) // o/p:10


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  // Agar fruit pehle se object me hai toh count + 1, nahi toh 1 set karo
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {}); // <-- Yahan initial value ek empty object {} hai
console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }



const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, curr) => {
  return acc.concat(curr); // Dono arrays ko jodh do
}, []); // <-- Yahan initial value ek empty array [] hai
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
