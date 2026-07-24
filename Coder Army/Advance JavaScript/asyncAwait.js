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
    console.log("Stock in store",stock)
    setTimeout(()=>{
        console.log("Other Process is working")
    },3000)
    await createOrder()
    await chargePayment()
    await sendInvoice()
    
}
main()