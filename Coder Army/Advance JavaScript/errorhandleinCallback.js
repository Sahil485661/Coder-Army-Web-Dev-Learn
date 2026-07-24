//Here we see how to handle error

function checkInventory(callback){
    setTimeout(() => {
        console.log("Checking Inventory")
        callback()
    }, 2000);
}

function createOrder(callback){
    setTimeout(() => {
        
        console.log("Creating an Order");
        const error = new Error("Creating Order Failed")  //here we created error
        
        callback(error)
    }, 1000);
}

function chargePayment(callback){
    setTimeout(() => {
        
        console.log('Charging the payment')
        callback()
    }, 1000);
}

function sendInvoice(callback){
    setTimeout(() => {
        console.log('Sending the Invoice..')
        callback()
    }, 2000);
}

function main(){
    checkInventory(()=>{
        console.log("Inventory is full");
        createOrder((error)=>{
            if(error){    //here we handle the error
                console.log(error);
            }
            chargePayment(()=>{
                sendInvoice(()=>{
                    console.log("Process is completed Now")
                });
            })
        });
    });
}
main();