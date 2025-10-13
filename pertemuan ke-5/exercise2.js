// Waraney Kamagi
// Exercise #01
// Program untuk menghitung BMI dimana menggunakan
// 1.IIFE
// 2.Callback Function
// yang memiliki parameter dan return value

// 1.IIFE

let output = (function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    let hasil = bmi > 25 ? "BMI anda adalah " + bmi + ", kategorin kelebihan berat badan" : + bmi + " anda memiliki berat yang ideal";
    return hasil;
})(70, 1.75);

console.log(output);

// 2. Callback Function

function hitungBMI (berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    let hasil = callback (bmi > 25 ? "BMI anda adalah " + bmi + ", kategorin kelebihan berat badan" : + bmi + " anda memiliki berat yang ideal");
    return hasil;
}

// Percobaan menghasilkan berat badan ideal
let output2 = hitungBMI (70, 1.75, function(hasil) {
    return hasil;
});

console.log(output2);

// Percobaan menghasilkan berat badan lebih
let output3 = hitungBMI (100, 1.69, function(hasil) {
    return hasil;
});

console.log(output3);