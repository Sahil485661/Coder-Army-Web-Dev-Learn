let alarm = () => console.log("Start your day from this time."); //It is use for run repeat the function in a time.
setInterval(alarm, 1000);
let intervalId = setInterval(alarm, 1000);
clearInterval(intervalId);