const str1 = "Sahil Babu";
const str2 = 'Sahil Vishwakarma';
const str3 = `Sahil ji`;
console.log(str1);
console.log(str2);
console.log(str3);
const day = 18;
const str4 = `Strike is coming on ${day}`;
console.log(str4);
const str5 = `Here we cut the letter by using slice in java script`;
console.log(str5.slice(5,15));
const str6 = str1 + str2;
console.log(str6);
const str7 ="Anil Sahil Rahul Anas Rohit Avi";
console.log(str7.split(" "));
const today = new Date();

console.log(today.toString());
console.log(today.getMilliseconds());
// Here we can create our own date
// Month me 0 to 11 hota hai means jan = 0, Dec = 11
const now = new Date(2025,8,20,8,25,16,125);
console.log(now.toString());

// here we are find time stamp
// const timestamp = Date.now();
const timechange = new Date(-302395346345);
console.log(timechange);




