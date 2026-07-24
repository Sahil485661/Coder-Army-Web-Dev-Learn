// current all function are working in syncronuous form
/*
function checkInventory(){
    console.log("Checking Inventory")
}

function createOrder(){
    console.log("Creating an Order");
}

function chargePayment(){
    console.log('Charging the payment')
}

function sendInvoice(){
    console.log('Sending the Invoice..')
}

function main(){
    checkInventory();
    createOrder();
    chargePayment()
    sendInvoice();
}
main()*/


//here I am add some asyncronuous function

function checkInventory(){
    setTimeout(() => {
        console.log("Checking Inventory")
        
    }, 2000);
}

function createOrder(){
    setTimeout(() => {
        
        console.log("Creating an Order");
    }, 1000);
}

function chargePayment(){
    setTimeout(() => {
        
        console.log('Charging the payment')
    }, 1000);
}

function sendInvoice(){
    setTimeout(() => {
        console.log('Sending the Invoice..')
        
    }, 2000);
}

function main(){
    checkInventory();
    createOrder();
    chargePayment()
    sendInvoice();
    console.log("Other request are processing")
}
main()
// Output: Creating an Order
// Charging the payment
// Checking Inventory
// Sending the Invoice..
// Here we see that order was changed in this method show this method is not relaible for the our web development. so we found new thing which 'callback'.