// String literal, Arrow function, Default parameter

// 1. String literal
let nama = "John";
let umur = 30;
let address = "Minahasa"

// Halo, nama Saya John, umur saya 30 tahun, saya tinggal di Minahasa
let kalimat1 = 
"Halo, nama saya " + nama 
+ ", Umur saya " + umur 
+ ", Tahun, saya tinggal di " + address;
console.log(kalimat1
);

let kalimat2 = `Halo, nama saya ${nama + " Doe"}, umur saya ${umur + 1} tahun, saya tinggal di ${address + ", Indonesia"}.`;
console.log(kalimat2);

// 2. Arrow function
function sayGreetings(nama) {
    return `Hello, my name is ${nama + " Doe"}`;
};
console.log(sayGreetings("John"));

let sayGreetings2 = (nama) => {
    return `Hello, my name is ${nama}`;
};

let array = [ 1, 2, 3, 4, 5];
let NewArray = array.map(newItem => newItem * 2);
console.log(NewArray);

// Default parameter
// const sayGreetings3 = (fullName, umur, address) => // {
// //     if (fullName === undefined) { fullName = "John Doe"; }
// //     if (umur === undefined) { umur = 30; }
// //     if (address === undefined) { address = "Minahasa"; }
// //     return `Halo, nama saya ${fullName}, umur saya ${umur + 1} tahun, saya tinggal di ${address + ", Indonesia"}.`;
// // }
const sayGreetings3 = (fullName = "John Doe", umur = 30, address = "Minahasa") => 
`Halo, nama saya ${fullName}, umur saya ${umur + 1} tahun, saya tinggal di ${address + ", Indonesia"}.`;


console.log(sayGreetings3());