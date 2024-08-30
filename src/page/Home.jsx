import React from 'react';

function Home() {
    // Ambil nama pengguna dari localStorage
    const username = localStorage.getItem('username') || 'Pengguna';

    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Selamat Datang, {username}!</h1>
            <p className="text-lg">Ini adalah halaman utama Anda.</p>
        </section>
    );
}

export default Home;
