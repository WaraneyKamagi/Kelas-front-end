import helloWorld from './helloWorld.js'; 

async function messages() {
    const msg = helloWorld();
    console.log(msg);
}

messages();

// 1. Mengapa kita perlu menambahkan await di dalam messages?
// 2. Apa yang terjadi jika await dihapus?
// 3. Mengapa kita perlu menggunakan export dan import di sini?

// 1. "await" bertugas menunggu hasil promise selesai dieksekusi sebelum melanjutkan code ke baris berikutnya.
// 2. Saat await di hapus, code akan berada di status "Pending", karena tidak ada konfirmasi untuk melanjutkan code.
// 3. export dan import disini digunakan agar data atau code antar file bisa terhubung dan bisa diakses.
