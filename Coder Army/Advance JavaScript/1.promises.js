function checkInventory(){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
        console.log("Checking Inventory")
        resolve()
    }, 2000);

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
        }, 2000);
    })
}

function main(){

    //this method is also looking like 'CallBack Hell' so just we transform this to 
    // checkInventory().then(()=>{
    //     console.log("Inventory Done")
    //     createOrder()
    // })
    checkInventory()
    .then(createOrder)
    .then(chargePayment)
    .then(sendInvoice)

    console.log("Other process is working....")



    //'callback Hell'
    // checkInventory(()=>{
    //     console.log("Inventory is full");
    //     createOrder(()=>{
    //         chargePayment(()=>{
    //             sendInvoice(()=>{
    //                 console.log("Process is completed Now")
    //             });
    //         })
    //     });
    // });
}
main()