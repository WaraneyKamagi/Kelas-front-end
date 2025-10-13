// // //JavaScript Function

// // // Cara pertama 1. Function Declaration
// // function greetings(name){
// //     console.log("Hello World")
// // }

// // greetings() // Call Function

// // // Cara kedua 2. Function Expression
// // const greeting2 = function (){
// //     console.log("Hello World 2")
// // }

// // greetings2() // Call function

// // Function with input (parameter dan argumen)
// // and output (return)
// // cara 1           

// //                 Parameter
// function greetings(fullName){
//     return "hello " + fullName
// }

// //         argumen
// let output = greetings("John Doe")
// console.log(output)

// // cara 2
// const greeting2 = function(fullName){
//     return "Hello " + fullName
// }

// let output2 = greetings("Jane Doe")
// console.log(output2)

// // Global, Lokal, Block Scope dari Variable
// let x = 10
// console.log(x) // 10
// function func1() {
//     let y = 20
//     console.log(x)
//     console.log(y)
//     if(true){
//         let z = 30
//         console.log(x+y)
//         let Penjumlahan = ("Jika ditambahkan dengan z maka: " + (x+y+z))
//         console.log(Penjumlahan)
//     }
// }
// func1()


// Exercise
// Modifikasi Perhitungan BMI dengan Menggunakan fungsi function


function BMI (berat, tinggi) {
    let bmi = berat / (tinggi * tinggi)
    if(true) {
        let Hasil = bmi > 25 ? "BMI anda adalah " + bmi + ", kategori kelebihan berat badan" : + bmi + "anda memiliki berat yang ideal"
        console.log(Hasil)
    }
}

BMI(70, 1.69)

// Pelajar dirumah IIFE dan callback function