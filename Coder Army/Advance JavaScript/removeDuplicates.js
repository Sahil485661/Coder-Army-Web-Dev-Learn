// Here we see how to remove duplicates from array without using '...new Set()'
//This question is asked with me in interview
const arr= [1,2,3,4,5,6,7,6];
const output= []
for(let i of arr){
    if(!output[i]){
        output.push(i)
    }
}
console.log(output)