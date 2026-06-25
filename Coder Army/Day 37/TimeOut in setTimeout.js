let alarm = () => console.log("Start your day from this time.");
setTimeout(alarm, 4000);
let timerId = setTimeout(alarm, 4000);
// console.log(timerId)  //It is print the timer Id
clearTimeout(timerId); //It is cancel the setTimeout