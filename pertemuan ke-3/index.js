// // // JavaScript Variable and Operator
// // // 1. JavaSrcipt Variable

// // // let fullName = "John Done"; //camelCase
// // // const FullName = "John Doe"; //PascalCase 

// // // console.log (fullName)

// // // //Tip2 Data
// // // const gender = "male";
// // // let age = 30 // integer
// // // let weight = 90.6 // float 
// // // let isMarried = true // boolean
// // // let grade = null // Null
// // // let address // undefined

// // // console.log (age, weight, isMarried, grade, address)    

// // // 2. JavaScript Operator
// // // a. Aritmethic Operator (+, -, *, /, %, **)
// // let bill1 = 20
// // let bill2 = 1
// // console.log(bill1 + bill2); // 21
// // console.log(bill1 - bill2); // 19
// // console.log(bill1 * bill2); // 20
// // console.log(bill1 / bill2); // 20
// // console.log(bill1 % bill2); // 0
// // console.log(bill1 ** bill2); // 20

// // exercise menghitung luas lingkaran
// // const PHI = 3.14
// // let r = 5   
// // let luas_lingkaran = PHI* (r * r)

// // console.log (luas_lingkaran)


// // b. Assigntment Operator (=)

// // let bilangan = 5
// // bilangan = bilangan + 10
// // bilangan += 5
// // console.log(bilangan) 

// // c. String Operator (+) Concatination
// // let firstName = 'John'
// // let lastName = 'Doe'
// // let fullName = firstName + ' ' + lastName
// // console.log(fullName);

// // d. Relational Operator (==. ===, <, >, >=, <=, !=)
// let bill1 = 10
// let bill2 = 20
// let bill3 = '10'

// console.log(bill1 == bill3) // true
// console.log(bill1 === bill3) // false
// console.log(bill1 > bill2) // false
// console.log(bill1 < bill2) // true

// // e.Logical Operator (&&, ||, !)
// console.log(true && true)
// console.log(false && true)
// console.log(true && false)
// console.log(false && false)

// console.log(true || true)
// console.log(false || true)
// console.log(true || false)
// console.log(false || false)

// console.log(!true)

// // f. Ternary Operator (? :)
// let age = 17
// let isEligible = age >= 17 ? "Bisa buat KTP" : "Belum Bisa Buat KTP"
// console.log(isEligible)

// Mini Exercise
// Buatlah Program yang menghitung BMI (Body Mass Index)
// Rumus BMI = berat(kg) / (tinggi (m) * tinggi (m))
// tampilkan hasilnya

let berat = 76.9
let tinggi = 1.69
let BMI = berat / (tinggi * tinggi)
let Hasil = BMI > 25 ? "BMI anda adalah " + BMI + ", kategorin kelebihan berat badam" : "anda memiliki berat yang ideal"
console.log(Hasil)