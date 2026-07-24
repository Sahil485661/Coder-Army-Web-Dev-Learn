function checkInventory(){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
        console.log("Checking Inventory")
        //resolve()
        reject(new Error("Checking Inventory Failed.."))
    }, 2000);

    })
    return promise;
}

function createOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            
            console.log("Creating an Order");
            //resolve()
            reject(new Error("Create order failed.."))
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
        }, 2000);
    })
}

function main(){
    // checkInventory().then(createOrder).then(chargePayment).then(sendInvoice).catch((err)=>{
    //     console.log("error", err);       this line only gives when first error find not for indivisually log error if need then do next thing
    //})
    checkInventory()
    .catch((Error)=>{console.log("error", Error)})
    .then(createOrder).catch((Error)=>{console.log(Error)})
    .then(chargePayment)
    .then(sendInvoice)
    
}
main();