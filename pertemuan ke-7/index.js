// 1. JavaScipt Conditional
// if-else

let suhu = 8
if (suhu >= 37) {
    console.log("Panas");
} else {
    console.log("Normal")
}

// if, if-else, else
// jikanilai >= 90, maka A
// jika nilai >= 80, maka B
// jika nilai >= 70, maka C
// jika nilai >= 60, maka D
// selain itu E
let nilai = 85
if (nilai >= 90 && nilai <= 100) {
    console.log("A")
}
else if (nilai >= 80 && nilai <= 89) {
    console.log("Nilai anda B")
}
else if (nilai >= 70 && nilai <= 79) {
    console.log("Nilai anda C")
}
else if (nilai >= 60 && nilai <= 69) {
    console.log("Nilai anda D tidak lulus")
}
else{
    console.log("Nilai anda E tidak lulus")
}

// switch-case
let hari = 1;
switch (hari) {
    case 1:
        console.log("Minggu");
        break;
    case 2:
        console.log("Senin");
        break;
    case 3:
        console.log("Selasa");
        break;
    case 4:
        console.log("Rabu");
        break;
    case 5:
        console.log("Kamis");
        break;
    case 6:
        console.log("Jumat");
        break;
    case 7:
        console.log("Sabtu");
        break;
    default:
        console.log("Hari tidak valid");
        break;
}

// // 2. JavaScript Loop
// // a. for-loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i == 4) {
//         break;
//     }
// }

// // b. while-loop
// let j = 1;
// while (j <= 10) {
//     console.log(j);
//     j++;
//     if (j == 4) {
//         break;
//     }
// }

// // c. do-while loop
// let k = 1;
// do {
//     console.log(k);
//     k++;
// } while (k <= 10);

// Array built-in method
let angka = [1, 2, 3, 4, 5];
// for loop 
for ( i = 0; i < angka.length;  i++) {
    console.log(angka[i]);
}

// while loop
let m = 0;
while (m < angka.length) {
    console.log(angka[m]);
    m++;
}

// forEach
angka.forEach(function(n) {
    console.log(n);
});


// map
let angkaBaru = angka.map(function(n) {
    return n * 2;
});
console.log(angkaBaru);

// filter
let output = angka.filter(function(n) {
    return n > 2;
});
console.log(output);

// find
let cari = angka.find(function(n) {
    return n > 2;
});
console.log(cari);