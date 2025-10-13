// Destructuring and Module

// 1.Destructuring
let numbers = [1, 2, 3, 4, 5];


// Destructuring array ES5
let num1 = numbers[0];
let num2 = numbers[1];
let num3 = numbers[2];
console.log(num1); 
console.log(num2);
console.log(num3);

// Destructuring array ES6
let [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);

// Destrucuuring Array dengan rest paramater
let [angka1, angka2, ...rest] = numbers;
console.log(angka1);
console.log(angka2)
console.log(rest);

// Destructuring Object ES5
const student1 = {
    name: "ompe",
    age: 20,
    status: "active"
};

let studentName = student1.name;
let studentAge = student1.age;
let studentStatus = student1.status;
console.log(studentName);
console.log(studentAge);
console.log(studentStatus);

// Destructuring Object ES6
let {name, age, status} = student1;
console.log(name);
console.log(age);
console.log(status);

// Destructuring Object dengan rest parameter
let {name: studentNama, ...restObj} = student1; 
console.log(studentNama);
console.log(restObj);

// 2. Module
// Module adalah sebuah file yang berisi kode program yang dapat digunakan kembali di file lain
// Cara membuat module adalah dengan mengekspor (export) kode program dari file module
// dan mengimpor (import) kode program dari file module ke file lain
// Contoh membuat module
import { student } from "./data.js";
import { sayGreetings } from "./sayGreetings.js";
console.log(student);
sayGreetings();
