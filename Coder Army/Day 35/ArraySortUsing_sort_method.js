let arr = [345,432,534,5643,65345,23,123,11,535];
arr.sort(); //This method is only sort the array inn lexical graphy method( dictionary method)
console.log(arr)
arr.sort((a,b) => a-b); //This method is use for sort array in assending order if you want descending just do  b-a and all set
console.log(arr)
arr.sort((a,b) => b-a);
console.log(arr);