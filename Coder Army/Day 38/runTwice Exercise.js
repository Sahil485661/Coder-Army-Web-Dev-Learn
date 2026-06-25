let show = ()=> {
    console.log("Jee mere laal")
}
let runTwice = inputFunction=> {
    inputFunction();
inputFunction();
}

console.log(runTwice(show))