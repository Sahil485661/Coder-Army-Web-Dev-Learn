let arr = [34,23,21,423,34];
// arr.forEach(function(num){
//     console.log(num)
// })
// arr.forEach(num => console.log("Here print arrray second time: "+num))
function search ( arr, num){
    arr.forEach(function(i){
        if(num === i){
            return // IN foreach return statement is work like a continue keyword means skip that number. as well as that number is repeated then they the return is also skip repeated num.

            //so if we need break loop than this loop is not good for that work
        }
        console.log(`visited:${i}`);
    })
}
search(arr, 34)