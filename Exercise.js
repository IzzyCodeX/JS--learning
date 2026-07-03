let string = "Hello, World!";
let number = 39;
let isActive = true;
let mySelf = {
    name: "Israel",
    hobby: "Coding",
    color: "blue",
    title: "Mr"
};
let goodnights = ["Gute Nacht", "Bonne nuit", "Buenas noches", "Oyasumi"];



function takeSum(a, b){
    return a + b ;
}
function takeProduct(a, b){
    return a * b ;
}
function takeDifference(a, b){
    return a - b;
}
console.log(takeSum(3, 6))
console.log(takeProduct(4, 6))
console.log(takeDifference(9, 6))


function greetUser(name){
    return `Hello, ${name}! Welcome to JavaScript programming!`;
}
 console.log(greetUser("Israel"))



 function logDataType(value){
    return typeof value;
 }
console.log(logDataType(true))

