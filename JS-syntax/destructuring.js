let a = 10;
let b = 20;
console.log('before swapping');
console.log(`a-> `+ a);
console.log(`b-> `+ b);

[a, b] = [b, a];

console.log('After swapping');
console.log(`a-> `+a);
console.log(`b-> `+b);

////////////////////////////////

let subjects = ["Maths","english","hinci","french","biology"];

const [first ,second, third, ...extra] = subjects

console.log(first +" "+ second+ " "+ third);
console.log(extra);

const student = {
    name: "afzal",
    age: 22,
    USN: "4SF29430290"
}

const {name, age, USN} = student;

console.log(name);
console.log(age);
console.log(USN);
