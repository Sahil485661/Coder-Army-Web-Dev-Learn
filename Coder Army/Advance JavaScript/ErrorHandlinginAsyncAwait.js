function checkInventory(){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
        console.log("Checking Inventory")
        const instock = 400; 
        // resolve(instock)   //data passing in the promises
        reject(new Error("Stock was not found"));
    }, 1000);
    })
    return promise;
}

function createOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            
            console.log("Creating an Order");
            resolve()
        }, 1000);

    })
    
}

function chargePayment(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            
            console.log('Charging the payment')
            resolve(/*here we pass data*/);
        }, 1000);

    })
}

function sendInvoice(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Sending the Invoice..')
            resolve()
        }, 1000);
    })
}

async function main(){
    //Error Handling in all function in single time
    try{
        const stock = await checkInventory()
        console.log("Stock in store",stock)
        setTimeout(()=>{
            console.log("Other Process is working")
        },3000)
        await createOrder()
        await chargePayment()
        await sendInvoice()
    }
    catch(Error){
        console.log(Error)
    }
    //Error handling indivisualy one by one
    try{
        await checkInventory();
    }
    catch(Error){
        console.log(Error)
    }
    try{
        await createOrder();
    }
    catch(Error){
        console.log(Error)
    }
    try{
        await chargePayment()
    }
    catch(Error){
        console.log(Error)
    }
    try{
        await sendInvoice()
    }
    catch(Error){
        console.log(Error)
    }
}
main()