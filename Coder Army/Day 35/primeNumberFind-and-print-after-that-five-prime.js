let num = 4;
function primeTest(num){
    for(let i = 2; i<num; i++){
        if(num % i === 0){
            return false;
        }
        
    }
    return true;
}
    
    let i = 0;
    while(true){
        if(primeTest(num)){
            console.log(num);
            i++;

        }
        if(i>=5){
            break;
        }
        num++;
    }
    
