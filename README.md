# Formulir Registrasi dan Login Menggunakan React

## Pendahuluan

Proyek ini adalah aplikasi web untuk registrasi dan login user menggunakan React dan TailwindCSS. Aplikasi ini menyediakan formulir untuk mendaftar akun baru dan masuk ke akun yang sudah ada.

## Fitur

- **Registrasi Pengguna:** Memungkinkan pengguna untuk mendaftar dengan menyediakan username dan password.
- **Validasi Formulir:** Validasi waktu nyata untuk setiap input.
- **Desain Responsif:** Dioptimalkan untuk berbagai ukuran layar menggunakan TailwindCSS.
- **Aksesibilitas:** Menyertakan atribut ARIA untuk meningkatkan aksesibilitas bagi pembaca layar.
- **Ikon:** Menggunakan ikon untuk menunjukkan status validasi (valid/tidak valid) menggunakan `react-icons`.

- **Login Pengguna**
- Formulir login dengan validasi
- Autentikasi pengguna


### Halaman Registrasi
![Gambar Registrasi](https://example.com/path-to-registration-image.png) <!-- Ganti dengan path ke gambar registrasi -->

### Halaman Login
![Gambar Login](https://example.com/path-to-login-image.png) <!-- Ganti dengan path ke gambar login -->


## Teknologi yang Digunakan

- **React:** Library JavaScript untuk membangun antarmuka pengguna.
- **TailwindCSS:** Framework CSS berbasis utilitas untuk styling formulir.
- **React Icons:** Menyediakan ikon yang dapat diskalakan untuk indikasi validasi formulir.
- **JavaScript (ES6+):** Untuk logika dan arsitektur berbasis komponen.

## Instalasi

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1. **Clone Repository:**

    ```bash
   git clone https://github.com/Bais26/Authentication.git
    ```

2. **Masuk ke Direktori Proyek:**

    ```bash
    cd Authentication
    ```

3. **Instal Dependensi:**

    ```bash
    npm install
    ```

4. **Mulai Server Pengembangan:**

    ```bash
    npm run dev
    ```

   Aplikasi akan tersedia di `http://localhost:5173/`.

## Aturan Validasi

- **Username:**
  - Harus terdiri dari 4 hingga 24 karakter.
  - Harus dimulai dengan huruf.
  - Boleh mengandung huruf, angka, underscore, dan hyphen.

- **Password:**
  - Harus terdiri dari 8 hingga 24 karakter.
  - Harus mengandung setidaknya satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus (!@#$%).

- **Konfirmasi Password:**
  - Harus sesuai dengan password pertama.

## Struktur Folder

```plaintext
register-form-react/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Register.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── App.css
├── package.json
├── package.lock.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
