export async function ambilDataUser() {
    try {
        const response = await fetch('https://reqres.in/api/users/2');
        if (!response.ok) {
            throw new Error('Gagal mengambil data user');
        }
        const data = await response.json();
        const user = data.data;
        console.log(`Nama Lengkap: ${user.first_name} ${user.last_name}`);
    } catch (error) {
        console.error('Terjadi error:', error.message);
    }
}

ambilDataUser();