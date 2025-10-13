import  {ambilDataUser} from './ambilDataUser.js';

ambilDataUser();

// 1. Mengapa kita butuh .json() setelah fetch()?
// 2. Jika API gagal merespons, bagaimana cara menambahkan error handling?

// 1. Karena jika kita hanya menggunakan fetch() maka data yang diambil dalam bentuk object dan masih belum bisa di tampilkan outputnya, sedangkan dengan adanya .json(), datanya nanti bisa kita munculkan di output sudah tidak dalam bentuk object
/* 2. Gunakan .catch seperti ini :
    .catch(error => {
            console.error('Error fetching data:', error);
        });
}
      dengan begini, nantinya akan ada respon jikalau API yang digunakan salah atau mati.*/

// 3. Apa perbedaan pendekatan Promise chaining dengan async/await?
// 3. async-wait lebih mudah dibaca seperti kode biasa, sedangkan Promise chaining memiliki struktur kode yang kompleks tetapi terperinci.