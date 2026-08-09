const name  =  "Hello World";
const reverse = name.split('').reverse().join('')
console.log(reverse)
let str = '';
// How it works:str.split("") ['h', 'e', 'l', 'l', 'o'] (String to Array)
// .reverse()  ['o', 'l', 'l', 'e', 'h'] (Reverses Array)
// .join("")  "olleh" (Array back to String)

//Other Logical Method like DSA
for(let i = name.length-1; i>=0; i--){
    str +=  name[i];
}
console.log(str)