
setTimeout(() => {
    console.log("Hello Mis Universe")
}, 3000);   // IT is like a alarm which are run when their time is come. time set in mili second

let alarm= () => {
    console.log("Start your day from this time.")
}
setTimeout(alarm, 4000);
console.log('Alarm was set');
