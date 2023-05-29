# RestoPWA

## Progressive Web Apps

⏲️Time Line  
📆Day1 24 May 21.00 - 23.30 : Progress 1  
📆Day2 25 May 21.00 - 23:45 : Finishing Progres 1 & Mulai Progress 2  
📆Day3 26 May 20.00 - 23.15 : Finishing Progress 2 (-styling & fav btn)  
📆Day4 27 May 21.00 - 23.10 : Adding Style to review section, Set Web App Manifect, Service Worker, Cache API and Cache Service Worker.
📆Day5 28 May 20.30 - 22.42 : Using Workbox for Service Worker, Using IndexDB to store loved restaurants. Need to correct offline capabilities tomorrow.

Fitur yang harus ada pada aplikasi:

⚪ 1. Halaman Utama (Daftar Restoran) - Day 1  
&ensp; Syarat:  
&emsp; ☑️ Menampilkan daftar restoran yang datanya bersumber dari API https://restaurant-api.dicoding.dev/. Silakan lihat dokumentasinya pada halaman tersebut.  
&emsp; ☑️Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.  
&emsp; ☑️Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.  
&emsp; ☑️Hero elemen tetap dipertahankan.

⚪ 2. Halaman Detail Restoran - Day 2  
&ensp; Syarat:  
 &emsp; ☑️Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.  
 &emsp;&ensp; Pada halaman detail restoran harus terdapat:  
 &emsp; ☑️Nama restoran  
 &emsp; ☑️Gambar  
 &emsp; ☑️Alamat  
 &emsp; ☑️Kota  
 &emsp; ☑️Deskripsi  
 &emsp; ☑️Menu Makanan  
 &emsp; ☑️Menu Minuman  
 &emsp; ☑️Customer Reviews  
 &emsp; 🟨Styling  
 &emsp; ☑️Terdapat tombol favorite untuk memasukkan atau menghapus restoran favorit dari database (gunakan IndexedDB).

⚪ 3.Halaman Daftar Restoran Favorit - Day 5
&ensp; Syarat:
&emsp; ☑️Halaman Daftar Restoran dapat diakses melalui menu navigasi favorit.
&emsp; ☑️Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).
&emsp; ☑️Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
&emsp; ☑️Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.

⚪ 4.Native Capability  
&ensp; Syarat:
&emsp;☑️Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apapun, bahkan menggunakan workbox.
&emsp; ☑️Aplikasi harus menampilkan icon Add to Home Screen.
&emsp; ☑️Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.

⚪ 5.Code Quality
&ensp;Syarat:
&emsp;☑️Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript. Harap lampirkan berkas konfigurasi ESLint ya.
&emsp;☑️Menerapkan salah satu style guide baik itu Google JavaScript Code Style, AirBnB JavaScript Code Style, atau StandardJS Code Style.
&emsp;🟧Periksa kembali sebelum mengirimkan submission, apakah project yang Anda kirimkan sesuai dengan kriteria yang ditetapkan atau tidak, ditandai dengan tidak adanya satupun error ketika menjalankan eslint.

⚪ 6.Pertahankan syarat yang ada pada submission sebelumnya.
🟨Seperti responsibilitas tampilan, aksesibilitas pada website, appbar, footer dan sebagainya.

&emsp;⚪ : Judul Kriteria Pengerjaan  
&emsp;☑️ : Sudah selesai dikerjakan  
&emsp;🟨 : Dalam proses pengerjaan  
&emsp;🟧 : Akan dikerjakan selanjutnya
