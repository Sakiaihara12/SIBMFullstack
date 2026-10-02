// ==========================================================
// Class Kendaraan
// Mewakili kendaraan yang bisa disewa (mobil, motor, dll)
// ==========================================================
class Kendaraan {
  constructor(jenis, merk, tarifHarian) {
    this.jenis = jenis;
    this.merk = merk;
    this.tarifHarian = tarifHarian;
  }

  // method buat nampilin info kendaraan dalam bentuk teks singkat
  infoKendaraan() {
    return this.jenis + " " + this.merk + " (Rp " + this.tarifHarian.toLocaleString("id-ID") + "/hari)";
  }
}

// ==========================================================
// Class Pelanggan
// Properti: nama, nomorTelepon, kendaraanDisewa
// kendaraanDisewa diisi null dulu di awal, soalnya pelanggan
// belum tentu langsung nyewa kendaraan pas pertama kali didaftarin
// ==========================================================
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null; // belum nyewa apa-apa di awal
  }

  // ==========================================================
  // Metode buat mencatat transaksi penyewaan kendaraan
  // Nerima objek Kendaraan, lalu disimpan ke properti kendaraanDisewa
  // ==========================================================
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(this.nama + " berhasil menyewa " + kendaraan.infoKendaraan());
  }

  // Metode buat ngecek apakah pelanggan ini lagi nyewa kendaraan atau ga
  sedangMenyewa() {
    return this.kendaraanDisewa !== null;
  }
}

// ==========================================================
// Array penyimpan semua pelanggan yang terdaftar di sistem
// ==========================================================
var daftarPelanggan = [];

// ==========================================================
// Fungsi buat menampilkan daftar pelanggan yang SEDANG menyewa
// kendaraan (kendaraanDisewa-nya ga null)
// ==========================================================
function tampilkanPelangganMenyewa() {
  var pelangganMenyewa = daftarPelanggan.filter(function (pelanggan) {
    return pelanggan.sedangMenyewa();
  });

  console.log("=== Daftar Pelanggan yang Sedang Menyewa Kendaraan ===");
  if (pelangganMenyewa.length === 0) {
    console.log("Belum ada pelanggan yang menyewa kendaraan.");
  } else {
    pelangganMenyewa.forEach(function (pelanggan) {
      console.log(
        pelanggan.nama +
        " | Telp: " + pelanggan.nomorTelepon +
        " | Kendaraan: " + pelanggan.kendaraanDisewa.infoKendaraan()
      );
    });
  }

  renderTabel(pelangganMenyewa); // sekalian update tampilan tabel di halaman
}

// ----------------------------------------------------------
// Fungsi bantu buat nampilin daftar pelanggan yang menyewa ke tabel HTML
// ----------------------------------------------------------
function renderTabel(daftar) {
  var tbody = document.getElementById("isiTabelPelanggan");
  if (!tbody) return; // kalau dipanggil di luar halaman HTML, skip aja

  var baris = "";
  daftar.forEach(function (pelanggan) {
    baris += "<tr>";
    baris += "<td>" + pelanggan.nama + "</td>";
    baris += "<td>" + pelanggan.nomorTelepon + "</td>";
    baris += "<td>" + pelanggan.kendaraanDisewa.infoKendaraan() + "</td>";
    baris += "</tr>";
  });
  tbody.innerHTML = baris;
}

// ==========================================================
// Contoh pemakaian
// ==========================================================

// Bikin beberapa objek kendaraan
var mobilAvanza = new Kendaraan("Mobil", "Toyota Avanza", 300000);
var motorNmax = new Kendaraan("Motor", "Yamaha NMAX", 100000);
var mobilInnova = new Kendaraan("Mobil", "Toyota Innova", 450000);

// Bikin beberapa objek pelanggan
var pelanggan1 = new Pelanggan("Dodi Prayodi", "081234567890");
var pelanggan2 = new Pelanggan("Siti Rahma", "081298765432");
var pelanggan3 = new Pelanggan("Budi Santoso", "081211223344"); // belum nyewa kendaraan

daftarPelanggan.push(pelanggan1, pelanggan2, pelanggan3);

// Mencatat transaksi penyewaan
pelanggan1.sewaKendaraan(mobilAvanza);
pelanggan2.sewaKendaraan(motorNmax);
// pelanggan3 sengaja ga nyewa dulu, buat tes kondisi "belum menyewa"

// Menampilkan daftar pelanggan yang sedang menyewa kendaraan
tampilkanPelangganMenyewa();
