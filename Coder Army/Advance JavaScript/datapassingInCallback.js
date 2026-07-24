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
        const error = null;
        const chargedAmount = 100;

        callback(error, chargedAmount)      //In callback always pass first write error than data
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
            chargePayment((error, chargedAmount)=>{
                if(error){
                    console.log(error);
                    return;
                }
                console.log("Charged Amount:" + chargedAmount) // here we are print the passed data
                
                sendInvoice(()=>{
                    console.log("Process is completed Now");
                    
                });
            })
        });
    });
}
main();

//Now we see that how our code is looking too much complicated