let arr =[1,-6,5,7,-98];
for(let i = 0; i<arr.length; i++){
    if(arr[i]< 0){
        continue;
    }
    else{
        console.log(arr[i]);
    }
}