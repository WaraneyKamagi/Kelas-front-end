// // // IIFE dan Callback Function
// 1. IIFE (Immediately Invoked Function Expression)
// Self-Executing Anonymous Function
(function() {
    console.log("Hello World");
})();
// IIFE dengan Parameter
let output1 = (function(fullName) {
    return ("Hello, " + fullName);
})("John Doe");

console.log(output1);

// 2. Callback Function

function greetings(callback){
    let result = callback("John Doe");
    return result;
}

// Callback harus anonymous function
let output = greetings(function(fullName) {
    return ("Hello, " + fullName);
});

console.log(output);
