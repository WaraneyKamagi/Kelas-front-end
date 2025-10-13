// Asyncrhonus
console.log("Proses 1");
console.log("Proses 2");
setTimeout(() => {
   console.log("Proses 3"); 
},  5000);
console.log("Proses 4")

// Promise
let condition = true
const newPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("Berhasil")
    } else {
        reject("Gagal")
    }
})


// Pakai Promise

// 1. then - catch
newPromise
    .then((result) => `${result} !!!`)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// 2. async - await
//Buat dalam function
( async () => {
    let result = await newPromise;
    console.log(result);
})();

// Test
fetch ('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => console.log (users))

// Mini exercise
// Ubah fetch menggunakan async - await

const getData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    users.forEach((item) => console.log(item.name))
}

getData()