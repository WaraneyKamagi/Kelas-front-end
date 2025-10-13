// Rest Parameter and Spread Operator

//1. Rest Parameter

// Fungsi tanpa Rest Parameter
const funct1 = (parm1, parm2, parm3, parm4, parm5) => {
  arr = [parm1, parm2, parm3, parm4, parm5];
  console.log(arr);
  console.log(parm1, parm2, parm3, parm4, parm5);

    let hasil = "hello"
    arr.forEach((item) => (hasil += item));
    console.log(hasil);
};
funct1("nama", "saya", "ompe", "kang", "blunder"); // Output: 1 2 3

// Fungsi dengan Rest Parameter
// Rest parameter bertipe array
const funct2 = (...rest) => {
    let hasil = "hello";
    rest.forEach((item) => (hasil += item) );
    console.log(hasil);
}
funct2("nama", "saya", "ompe", "kang", "blunder", "main", "roblox", "gunung");


// 2. Spread Operator
const arr1 = ["nama", "saya", "ompe", "kang", "blunder"];
console.log(arr1);
const arr2 = [...arr1, "main", "roblox", "gunung"];
console.log(...arr2);

// Kegunaan lain spread operator
// Duplikasi array
const arr3 = [...arr2];
console.log(arr3);
// Menggabungkan dua array
let Arr1 = [1, 2, 3];
let Arr2 = [4, 5, 6];
let Arr3 = [7, 8, 9];

let combineArr1 = Arr1.concat(Arr2, Arr3);
console.log(combineArr1);
let combineArr2 = [...Arr1, ...Arr2, ...Arr3];
console.log(combineArr2)

// Duplikasi object
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1 };
console.log(obj2);

// Menggabungkan dua object
const objA = { a: 1, b: 2, c: 3 };
const objB = { d: 4, e: 5, f: 6 };
const objC = { g: 7, h: 8, i: 9 };
const combineObj = { ...objA, ...objB, ...objC };
console.log(combineObj);