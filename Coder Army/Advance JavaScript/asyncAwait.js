function checkInventory(){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
        console.log("Checking Inventory")
        const instock = 400; 
        resolve(instock)   //data passing in the promises
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
    
    
    const stock = await checkInventory()
    console.log("Stock in store",stock) //jo bhi data return karega wo calling ke baad access hoga. jaise yaha resolve ke saath data return hua stock ka.
    setTimeout(()=>{
        console.log("Other Process is working")  //THis request will be completed after 3 seconds. and They not block the main thread
    },3000)
    await createOrder()  //Here we say that wait for this request to complete after that move on next request
    await chargePayment()
    await sendInvoice()
    
}
main()

//Async function kya return karta hai?" — Answer: hamesha ek Promise return karta hai, chahe tum explicitly Promise return karo ya normal value.