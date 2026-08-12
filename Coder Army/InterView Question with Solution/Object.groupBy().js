// Object.groupBy() is a static method introduced in ES2024 that groups elements of an iterable (like an array) based on the string value returned by a callback function.

//Before Object.groupBy(), developers usually had to write a custom Array.prototype.reduce() implementation to group items.
//Syntax: Object.groupBy(items, callbackFn)
// items: The array or iterable to group.
// callbackFn: A function executed for each element. It should return a key (string or symbol) indicating the group for the current element.