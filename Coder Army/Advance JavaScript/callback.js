function checkInventory(callback){
    setTimeout(() => {
        console.log("Checking Inventory")
        callback()
    }, 2000);
}

function createOrder(callback){
    setTimeout(() => {
        
        console.log("Creating an Order");
        callback()
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
        createOrder(()=>{
            chargePayment(()=>{
                sendInvoice(()=>{
                    console.log("Process is completed Now")
                });
            })
        });
    });

    //Output: Checking Inventory
    // Inventory is full
    // Creating an Order
    // Charging the payment
    // Sending the Invoice..
    // Process is completed Now
    // This was solved order problem in our coding

    //here in main function we are performed callback function we see that the code is too much messy and not readable means too much callback. that is create readability problem. 'that is called callback hell. too much nesting'

}
main()