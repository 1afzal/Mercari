/// ...spread operator.
const A1 = [10,20,30];
const A2 = [30,40,50];

const A3 = [...A1,...A2];

console.log(A3);


let fruits = ["Apple","Banana","Mango"];
let vegetables = ["Cabbage","tomato","cucumber"];

let basket = [...fruits,...vegetables,"radish","carrot"];
console.log(basket);